import React from 'react';
import { GlobalStyle } from '../GlobalStyle/GlobalStyle';

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
