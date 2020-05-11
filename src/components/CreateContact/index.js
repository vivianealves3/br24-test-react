import React, { useState } from 'react';
import { toast } from 'react-toastify';
import api from '../../services/api';
import history from '../../services/history';
import { InputName, Name, TitleInput, Btn, BtnWrapper } from './styles';

function CreateContact(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');

  const { id } = props;

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSave = async () => {
    await api
      .post('/create-contact.php', {
        nome,
        sobrenome,
        id,
      })
      .then(() => {
        history.push('/');
        toast.success('Contato cadastrado com sucesso!');
      })
      .catch(() => {
        history.push('/');
        toast.error('Erro ao cadastrar, tente novamente!');
      });
  };
  // console.log(id);

  const renderInputs = () => {
    if (isOpen)
      return (
        <>
          <InputName>Nome</InputName>
          <Name>
            <TitleInput
              type="text"
              name="nome"
              id="nome"
              onChange={(e) => setNome(e.target.value)}
            />
          </Name>
          <InputName>Sobrenome</InputName>
          <Name>
            <TitleInput
              type="text"
              name="Sobrenome"
              id="Sobrenome"
              onChange={(e) => setSobrenome(e.target.value)}
            />
          </Name>
          <BtnWrapper>
            <Btn type="button" onClick={handleSave}>
              Salvar Contato
            </Btn>
          </BtnWrapper>
        </>
      );
    return null;
  };

  return (
    <>
      <BtnWrapper>
        <Btn type="button" onClick={() => toggle()}>
          Adicionar Contato
        </Btn>
      </BtnWrapper>
      {renderInputs(isOpen)}
    </>
  );
}

export default CreateContact;
