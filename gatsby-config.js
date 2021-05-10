require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	plugins: [
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-styled-components',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: 'src/pages',
			},
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`cairo`],
				display: 'swap',
			},
		},
	],
};
