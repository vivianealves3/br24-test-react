import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import history from '../../../services/history';
import 'react-toastify/dist/ReactToastify.min.css';

import {
  Container,
  Article,
  TitleInput,
  Name,
  Btn,
  InputName,
  BtnWrapper,
} from './styles';

function EditMode(props) {
  const [empresa, setEmpresa] = useState('');
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');

  const { id, form } = props;
  const handleSave = async () => {
    await api
      .post('/create-company.php', {
        empresa,
        nome,
        cpf,
        cnpj,
        telefone,
        email,
      })
      .then(() => {
        history.push('/');
        toast.success('Empresa cadastrada com sucesso!');
      })
      .catch(() => {
        history.push('/');
        toast.error('Erro ao cadastrar, tente novamente!');
      });
  };
  // console.log('create?', props.location.id);
  const handleUpdate = async () => {
    await api
      .put('/update-company.php', {
        id,
        empresa,
        nome,
        cpf,
        cnpj,
        telefone,
        email,
      })
      .then(() => {
        history.push('/');
        toast.success('Empresa atualizada com sucesso!');
      })
      .catch(() => {
        history.push('/');
        toast.error('Erro ao atualizar, tente novamente!');
      });
  };

  useEffect(() => {
    if (form) {
      setEmpresa(form.empresa);
      setNome(form.nome);
      setCpf(form.cpf);
      setCnpj(form.cnpj);
      setTelefone(form.telefone);
      setEmail(form.email);
    }
  }, []);
  // console.log('iddd', id, 'mode', mode, 'sdad', viewMode, 'form', form);
  return (
    <Container>
      <Article>
        <InputName>Empresa</InputName>
        <Name>
          <TitleInput
            type="text"
            name="empresa"
            id="empresa"
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
          />
        </Name>
        <InputName>Nome</InputName>
        <Name>
          <TitleInput
            type="text"
            name="nome"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </Name>
        <InputName>CPF</InputName>
        <Name>
          <TitleInput
            type="text"
            name="cpf"
            id="cpf"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </Name>
        <InputName>CNPJ</InputName>
        <Name>
          <TitleInput
            type="text"
            name="cnpj"
            id="cnpj"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
          />
        </Name>
        <InputName>E-mail</InputName>
        <Name>
          <TitleInput
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Name>
        <InputName>Telefone</InputName>
        <Name>
          <TitleInput
            type="text"
            name="telefone"
            id="telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </Name>
        {id ? (
          <BtnWrapper>
            <Btn type="button" onClick={handleUpdate}>
              Atualizar Empresa
            </Btn>
          </BtnWrapper>
        ) : (
          <BtnWrapper>
            <Btn type="button" onClick={handleSave}>
              Criar Empresa
            </Btn>
          </BtnWrapper>
        )}
      </Article>
    </Container>
  );
}

export default EditMode;
