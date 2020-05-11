import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 800px;
  margin: 100px auto 0;
  margin-bottom: 100px;
  padding: 0px;
  background: #fff;
  border: 0;
  border-radius: 4px;
  flex-direction: column;
`;

export const Header = styled.header`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.span`
  font-size: 2rem;
  margin-top: 0.3rem;
  font-weight: bold;
`;

export const HeaderButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  margin-top: 0.3rem;
`;

export const Hr = styled.hr`
  border: 0.05rem solid #eee;
  margin-bottom: 2rem;
`;
