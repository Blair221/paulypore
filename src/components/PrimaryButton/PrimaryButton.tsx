import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PrimaryButton = styled.button`
	display: flex;
	background: #1e90ff;
	color: #f5f5f5;
	font-size: 1em;
	font-family: cairo;
	width: 7.5em;
	height: 2.5em;
	padding: 0.25em 1em;
	border-radius: 0.5em;
	border: solid 1px #4682b4;
	justify-content: center;
	align-items: center;
	font-weight: regular;
	text-transform: uppercase;
	letter-spacing: 1px;
	:hover {
		background: #4682b4;
	}
`;

export { PrimaryButton };
