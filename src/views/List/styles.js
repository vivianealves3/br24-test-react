import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 0px;
  border: 0;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 80px;
`;

export const Table = styled.div`
  display: flex;
  width: 100%;
  max-width: 90%;
  margin: 50px auto;
  padding: 0px;
  background: #fff;
  border: 0;
  border-radius: 4px;
  flex-direction: column;
  box-shadow: 2px 2px rgba(68, 68, 68, 0.1);
`;

export const Header = styled.div`
  padding: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  a {
    text-decoration: none;
  }
`;

export const Btn = styled.button`
  display: flex;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  max-width: 300px;
  background: #be7abb;
  color: white;
  font-weight: bolder;
  align-items: center;
  color: #363636;
  &:hover {
    background: ${darken(0.04, '#be7abb')};
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 300px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 18px;
  border: none;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  &::placeholder {
    text-align: center;
    color: #dfdfdf;
  }
  &:focus {
    background: ${darken(0.2, 'rgba(0,0,0,0.07)')};
  }
`;

export const TableHeader = styled.div`
  background: linear-gradient(to right top, #ac58aa, #be7abb, #cf9bcc, #f0ddee);
  padding: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
`;

export const ThItem = styled.div`
  color: #363636;
  font-weight: bold;
  display: flex;
  width: 100%;
  max-width: 300px;
`;

export const Rows = styled.div`
  font-size: 16px;
  padding: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(68, 68, 68, 0.1);
  text-decoration: none;
  &:hover {
    background: #f0ddee;
    font-weight: bolder;
    border: none;
    box-shadow: 0 3px rgba(68, 68, 68, 0.1);
  }
`;

export const Cell = styled.div`
  color: #363636;
  display: flex;
  width: 100%;
  max-width: 300px;
`;
