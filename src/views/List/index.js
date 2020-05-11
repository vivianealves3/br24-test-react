import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import {
  Container,
  Table,
  Header,
  Btn,
  SearchContainer,
  SearchInput,
  TableHeader,
  ThItem,
  Rows,
  Cell,
} from './styles';

const List = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('/list-company.php');
      setCompanies(response.data.result);
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const comp = companies.map((c) => c);
    const results = comp.filter((cp) =>
      cp.TITLE.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm, companies]);

  function handleSearch(event) {
    setSearchTerm(event.target.value);
  }
  // console.log(companies);
  return (
    <div>
      {loading ? (
        <h1>CARREGANDO...</h1>
      ) : (
        <Container>
          <>
            <Table>
              <Header>
                <Link
                  to={{ pathname: 'create', createCompany: true, id: null }}
                >
                  <Btn>Criar empresa</Btn>
                </Link>

                <SearchContainer>
                  <SearchInput
                    type="text"
                    placeholder="Pesquisar"
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                </SearchContainer>
              </Header>

              <TableHeader>
                <ThItem>Empresa</ThItem>
                <ThItem>Usuário</ThItem>
                <ThItem>E-mail</ThItem>
              </TableHeader>

              {searchResults.map((c) => (
                <Link
                  to={{ pathname: 'create', createCompany: false, id: c.ID }}
                >
                  <Rows key={c.ID}>
                    <Cell>{c.TITLE}</Cell>
                    <Cell>{c.UF_CRM_1588901076}</Cell>
                    <Cell>{c.EMAIL[0].VALUE}</Cell>
                  </Rows>
                </Link>
              ))}
            </Table>
          </>
        </Container>
      )}
    </div>
  );
};

export default List;
