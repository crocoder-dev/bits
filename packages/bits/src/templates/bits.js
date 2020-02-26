import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styles from './bits.module.scss';
import rehypeReact from 'rehype-react';
import Snippet from '../components/CodeExample/Snippet';
import Demo from '../components/CodeExample/Demo';
import Column from '../components/CodeExample/Column';
import Row from '../components/CodeExample/Row';
import Head from '../components/Head';

export default class BitsTemplate extends React.Component {
  render() {
    const bits = this.props.data.markdownRemark;

    if (!bits) {
      return null;
    }
    const {
      color,
      title,
      theme,
      fontSize,
      titleSize,
      titleColor,
      titleShadow,
    } = bits.frontmatter;

    const renderAst = new rehypeReact({
      createElement: React.createElement,
      components: {
        row: Row,
        column: Column,
        demo: Demo,
        snippet: Snippet,
      },
    }).Compiler;

    bits.htmlAst.properties.style = {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    };
    let titleEl = null;

    if (titleColor === 'transparent') {
      titleEl = (
        <span
          style={{ fontSize: `${titleSize || '3em'}` }}
          className={`${styles[`heading${titleShadow || 'orange_4'}`]} ${
            styles.strokeShadowTransparent
          }`}
        >
          {title}
        </span>
      );
    } else {
      titleEl = (
        <span
          style={{ fontSize: `${titleSize || '3em'}` }}
          className={`${styles[`heading${titleShadow || 'white'}`]} ${
            styles[`font${titleColor || 'orange_4'}`]
          } ${styles.strokeShadow}`}
        >
          {title}
        </span>
      );
    }

    return (
      <>
        <Head pageTitle={title} />
        <div
          style={{
            overflow: 'hidden',
            height: '100vh',
            width: '100vw',
            padding: 0,
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          className={`markdown-body ${
            styles[`color${color || 'red_1'}`]
          } ${theme || 'okaidia'}`}
        >
          <div
            style={{
              height: '1080px',
              width: '1080px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              fontSize: `${fontSize || '1em'}`,
              boxSizing: 'border-box',
              padding: '0px 30px',
            }}
            className={`${styles[`color${color || 'red_1'}`]} ${styles.zoom}`}
            id="capture"
          >
            <img alt="" width="200" src="/logo.png" />
            {titleEl}
            {renderAst(bits.htmlAst)}
            <span className="icon">crocoder.dev @crocoderdev</span>
          </div>
        </div>
      </>
    );
  }
}

BitsTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query BitsBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      htmlAst
      frontmatter {
        color
        title
        theme
        fontSize
        titleSize
        titleColor
        titleShadow
      }
    }
  }
`;
