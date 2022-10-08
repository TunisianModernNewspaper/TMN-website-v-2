/* -------------------------------------------------------------------------- */
/*                                Dependencies                                */
/* -------------------------------------------------------------------------- */

// Packages
import * as React from 'react';
// import PropTypes from 'prop-types';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Link } from 'gatsby';
// UI component
import Image from '../Image/index';
// Style
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                                  Component                                 */
/* -------------------------------------------------------------------------- */

function PageHeader() {
  /* ********************************** HOOKS ********************************* */

  // Localization
  const { t } = useTranslation();
  const {
    header: { links },
  } = t('layout', { returnObjects: true });

  /* ***************************** RENDER HELPERS ***************************** */
  const headerLinks = links.map(({ id, link }) => (
    <Link to="/" className="page-header-links-container-link" key={id}>
      {link}
    </Link>
  ));

  /* ******************************** RENDERING ******************************* */
  return (
    <header className="page-header">
      <div className="Logo-container">
        <Image src="tmn-logo" alt="Tunisan-Modern-NewsPaper" />
      </div>
      <div className="page-header-links-container">
        <div className="input-search-container">
          <input type="text" placeholder="Looking for something ? " />
        </div>
        {headerLinks}
      </div>
      <div className="page-header-auth-section">
        <Link to="/" className="page-header-auth-section-link">
          <div className="insta-logo-container">
            <Image src="insta-logo.png" alt="" />
          </div>
          Login
        </Link>
        <Link to="/" className="page-header-auth-section-link">
          Subscribe
        </Link>
      </div>
    </header>
  );
}

PageHeader.propTypes = {};

PageHeader.defaultProps = {};

export default PageHeader;
