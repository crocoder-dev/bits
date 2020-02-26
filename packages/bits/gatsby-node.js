const path = require('path');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const bitsTemplate = path.resolve('./src/templates/bits.js');

  const bitsData = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              html
              fields {
                slug
              }
            }
          }
        }
      }
    `
  );

  const bits = bitsData.data.allMarkdownRemark.edges;

  bits.forEach(bit => {
    createPage({
      path: bit.node.fields.slug,
      component: bitsTemplate,
      context: {
        slug: bit.node.fields.slug,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};

exports.onCreateWebpackConfig = ({
  stage,
  getConfig,
  rules,
  loaders,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      plugins: [
        new DirectoryNamedWebpackPlugin({
          exclude: /node_modules/,
        }),
      ],
    },
  });
};
