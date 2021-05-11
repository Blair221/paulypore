import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => (props.theme === 'purple' ? 'purple' : 'white')};
  }
`;

export { GlobalStyle };
