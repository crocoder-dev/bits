import React from 'react';
import styles from './index.module.scss';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import Typography from '../../components/Typography';
import Button from '../../components/Button';
import PropTypes from 'prop-types';

const NotFoundSection = ({ title, image, subtitle, homepage }) => {
  return (
    <section className={styles.wrapper}>
      <Img
        className={styles.image}
        fadeIn={false}
        fluid={image ? image.childImageSharp.fluid : {}}
        alt={'abc'}
      />
      <Typography
        className={styles.title}
        element="h1"
        color="gray_2"
        fontSize="65"
        fontWeight={700}
      >
        {title}
      </Typography>
      <Typography
        className={styles.subtitle}
        element="h2"
        color="gray_2"
        fontSize="24"
      >
        {subtitle}
      </Typography>
      <Typography
        element="div"
        fontSize="16"
        className={styles.wrapper__buttons}
      >
        <Link to={'/'}>
          <Button color="primary">{homepage}</Button>
        </Link>
      </Typography>
    </section>
  );
};

NotFoundSection.propTypes = {
  title: PropTypes.string,
  image: PropTypes.any,
  subtitle: PropTypes.string,
  homepage: PropTypes.string,
};

export default NotFoundSection;
