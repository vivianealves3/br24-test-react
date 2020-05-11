import React, { useState, useEffect } from 'react';
import api from '../../../services/api';
import {
  Container,
  Article,
  TitleInput,
  Name,
  InputText,
  InputContainer,
  InputName,
  MediumInputName,
  Contact,
} from './styles';

function VisualizationMode(props) {
  const [newObject, setNewObject] = useState({});
  const [contactData, setContactData] = useState();
  const { id } = props.props;
  useEffect(() => {
    const handleGetContact = async () => {
      const response = await api.get(`/get-contact-by-id.php?id=${id}`);
      const findedContacts = response.data.result;
      setContactData(findedContacts);
    };
    handleGetContact();
  }, []);

  useEffect(() => {
    setNewObject(props.props);
  }, [props]);
  // console.log('contact', contactData);
  // console.log('new', newObject);

  return (
    <Container>
      {props ? (
        <Article>
          <InputName>Empresa</InputName>
          <Name>
            <TitleInput
              name="name"
              type="text"
              disabled
              value={newObject.empresa}
            />
          </Name>
          <InputName>Nome</InputName>
          <Name>
            <TitleInput
              name="name"
              type="text"
              disabled
              value={newObject.nome}
            />
          </Name>
          <InputName>CPF</InputName>
          <Name>
            <TitleInput
              name="name"
              type="text"
              disabled
              value={newObject.cpf}
            />
          </Name>
          <InputName>CNPJ</InputName>
          <Name>
            <TitleInput
              name="name"
              type="text"
              disabled
              value={newObject.cnpj}
            />
          </Name>
          <InputName>E-mail</InputName>
          <Name>
            <TitleInput
              name="name"
              type="text"
              disabled
              value={newObject.email}
            />
          </Name>
          <InputName>Telefone</InputName>
          <Name>
            <TitleInput
              name="name"
              type="text"
              disabled
              value={newObject.telefone}
            />
          </Name>
          {newObject.revenue && (
            <>
              <InputName>Negócios</InputName>
              <Name>
                <TitleInput
                  name="name"
                  type="text"
                  disabled
                  value={newObject.revenue}
                />
              </Name>
            </>
          )}
          <>
            <Contact>Contatos</Contact>
            {contactData
              ? contactData.map((ct) => (
                  <div key={ct.ID}>
                    <MediumInputName>
                      <span>Nome</span>
                      <span>Sobrenome</span>
                    </MediumInputName>
                    <InputContainer>
                      <InputText
                        name="Nome"
                        type="text"
                        defaultValue={ct.NAME}
                        disabled
                      />
                      <InputText
                        name="Sobrenome"
                        type="text"
                        defaultValue={ct.LAST_NAME}
                        disabled
                      />
                    </InputContainer>
                  </div>
                ))
              : null}
          </>
        </Article>
      ) : null}
    </Container>
  );
}

export default VisualizationMode;
