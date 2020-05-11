import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 3rem;
  position: fixed;
  width: 100%;
  z-index: 999;
`;

export const Content = styled.div`
  height: 6.4rem;
  max-width: 150rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
    align-items: center;
    margin-left: 3rem;
    img {
      margin-right: 2rem;
      padding-right: 2rem;
      border-right: 0.1rem solid #eee;
      height: 3.2rem;
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 2rem;
  padding-left: 2rem;
  border-left: 0.1rem solid #eee;

  img {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
  }
`;
