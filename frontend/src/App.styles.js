import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f5f5f5ff;
    color: #333;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

export const AppContainer = styled.div`
  display: flex;
  align-items: center; 
  justify-content: center;
  min-height: 100vh;
  background-color: #2b62e3ff;
  flex-direction: column;
`;

export const HeaderContainer = styled.header`
box-sizing: border-box;
  background-color: white;
  padding: 20px;
  border-radius: 10px 10px 0 0;
  width: 100%;
  max-width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderTitle = styled.h1`
  font-size: 1.5em;
  margin-left: 20px;
  color: #333;
`;

export const CalculatorContainer = styled.div`
  box-sizing: border-box;
  background-color: white;
  padding: 30px;
  border-radius: 0 0 10px 10px;
  width: 100%;
  max-width: 500px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Input = styled.input`
  padding: 15px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1em;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #2b62e3;
  }
`;

export const Button = styled.button`
  padding: 15px;
  border-radius: 5px;
  border: none;
  background-color: #2b62e3;
  color: white;
  font-size: 1.2em;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2554c3;
  }
`;

export const Result = styled.p`
  margin-top: 20px;
  font-size: 1.2em;
  color: #2b62e3;
`;

export const Error = styled.p`
  margin-top: 20px;
  font-size: 1em;
  color: #dc3545;
`;

export const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  padding: 15px;
  width: 100%;
  max-width: 500px;
  border-top: 1px solid #eee;
  border-radius: 15px 15px 0 0;
  text-align: center;
  font-size: 0.9em;
  color: #555;
`;


export const FooterText = styled.p`
  margin: 8px 0;
  font-weight: 400;
  letter-spacing: 0.5px;
`;

export const FooterLink = styled.a`
  color: #2b62e3;
  text-decoration: none;
  font-weight: 500;
  margin: 0 5px;
  transition: color 0.3s;

  &:hover {
    color: #2554c3;
    text-decoration: underline;
  }
`;

export const IconWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 15px;

  a {
    font-size: 20px;
    color: #61dafb;
    transition: transform 0.2s ease, color 0.3s ease;

    &:hover {
      transform: scale(1.2);
      color: #21a1f1;
    }
  }
`;
