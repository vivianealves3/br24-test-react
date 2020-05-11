import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MdArrowBack, MdDelete, MdModeEdit, MdHome } from 'react-icons/md';
import VisualizationMode from '../../components/ViewModes/VisualizationMode';
import EditMode from '../../components/ViewModes/EditMode';
import CreateContact from '../../components/CreateContact';
import api from '../../services/api';
import { Container, Header, HeaderButton, Title, Hr } from './styles';
import history from '../../services/history';

const Form = (props) => {
  const [empresa, setEmpresa] = useState('');
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [revenue, setRevenue] = useState('');
  const [viewMode, setViewMode] = useState(true);
  const { id } = props.location;
  // console.log('id', props.location.id, 'create?', props.location.createCompany);
  useEffect(() => {
    if (props.location.createCompany) {
      setViewMode(false);
    }

    if (id) {
      const getById = async () => {
        const response = await api.get(`/get-company-by-id.php?id=${id}`);
        const findedCompany = response.data.result;
        // console.log(findedCompany);
        if (findedCompany) {
          setEmpresa(findedCompany.TITLE);
          setNome(findedCompany.UF_CRM_1588901076);
          setCpf(findedCompany.UF_CRM_1588903094);
          setCnpj(findedCompany.UF_CRM_1588901065);
          setTelefone(findedCompany.PHONE[0].VALUE);
          setEmail(findedCompany.EMAIL[0].VALUE);
          setRevenue(findedCompany.REVENUE);
        }
      };

      getById();
    }
  }, []);

  const handleViewMode = () => {
    setViewMode(!viewMode);
  };

  const handleDelete = async (del) => {
    // console.log({ id });
    await api
      .delete('/delete-company.php', { data: { id: del } })
      .then(() => {
        history.push('/');
        toast.success('Empresa deletada com sucesso!');
      })
      .catch(() => {
        history.push('/');
        toast.error('Erro ao deletar, tente novamente!');
      });
  };

  const renderDefaultView = () => {
    return (
      <Container>
        {id ? (
          <>
            <Header>
              <HeaderButton onClick={handleViewMode}>
                <MdArrowBack size={25} color="#be7abb" />
              </HeaderButton>
              <Title>Atualizar Empresa</Title>
              <HeaderButton>
                <Link to="/">
                  <MdHome size={25} color="#be7abb" />
                </Link>
              </HeaderButton>
            </Header>
            <Hr />
          </>
        ) : (
          <>
            <Header>
              <HeaderButton>
                <Link to="/">
                  <MdArrowBack size={25} color="#be7abb" />
                </Link>
              </HeaderButton>
              <Title>Cadastrar Empresa</Title>
              <HeaderButton>
                <Link to="/">
                  <MdHome size={25} color="#be7abb" />
                </Link>
              </HeaderButton>
            </Header>
            <Hr />
          </>
        )}
        {/* {id && (
          <button type="button" onClick={handleViewMode}>
            visualizar
          </button>
        )} */}
        <EditMode
          id={id}
          form={{ empresa, nome, cpf, cnpj, telefone, email }}
        />
      </Container>
    );
  };

  const renderViewMode = () => {
    return (
      <Container>
        <Header>
          <HeaderButton>
            <Link to="/">
              <MdArrowBack size={25} color="#be7abb" />
            </Link>
          </HeaderButton>
          <Title>Ver, Editar ou Excluir a Empresa.</Title>
          <HeaderButton>
            <MdModeEdit size={25} color="#be7abb" onClick={handleViewMode} />
            <MdDelete
              size={25}
              color="#be7abb"
              onClick={() => handleDelete(id)}
            />
          </HeaderButton>
        </Header>
        <Hr />
        <VisualizationMode
          props={{ id, empresa, nome, cpf, cnpj, telefone, email, revenue }}
        />
        <CreateContact id={id} />
      </Container>
    );
  };
  return <>{viewMode ? renderViewMode() : renderDefaultView()}</>;
};

export default Form;
