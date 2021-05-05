require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	plugins: [
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: 'src/pages',
			},
		},
	],
};
