import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.section`
  width: 100%;
  max-width: 800px;
  margin: 50px auto 0;
  padding: 0px;
  background: #fff;
  border: 0;
  border-radius: 4px;
  flex-direction: column;
`;

export const Article = styled.article`
  background: #fff;
  border: 1px solid #ddd;
  margin-top: 30px;
  border: none;
  border-radius: 4px;
`;

export const Name = styled.header`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const InputName = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const TitleInput = styled.input`
  font-size: 15px;
  margin-top: 3px;
  background: rgba(0, 0, 0, 0.05);
  border: 0;
  border-radius: 4px;
  height: 44px;
  width: 70%;
  padding: 0 15px;
  color: #000;
  margin: 0 0 10px;
  &::placeholder {
    color: rgba(0, 0, 0, 0.1);
  }
`;

export const Btn = styled.button`
  padding: 10px 20px;
  margin-bottom: 20px;
  border-radius: 4px;
  border: 0;
  height: 44px;
  width: 48%;
  background: #be7abb;
  color: #363636;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: ${darken(0.04, '#be7abb')};
  }
`;

export const BtnWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
