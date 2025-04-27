import React from 'react';
import PropTypes from 'prop-types';

const AppTopbar = (props) => {
  return (
      <div className="layout-topbar clearfix">
        <a className="layout-menu-button" onClick={props.onToggleMenu}>
          <span className="pi pi-bars" />
        </a>
    </div>
  );
}

AppTopbar.propTypes = {
  onToggleMenu: PropTypes.func.isRequired,
};

export default React.memo(AppTopbar);
