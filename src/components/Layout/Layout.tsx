import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => (props.theme === 'purple' ? 'purple' : 'white')};
  }
`;

interface Props {
	children: React.FC[];
}

export const Layout: React.FC<Props> = ({ children }) => {
	return (
		<React.Fragment>
			<GlobalStyle theme="purple" />
			{children}
		</React.Fragment>
	);
};
