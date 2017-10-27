import React from 'react';
import PropTypes from 'prop-types';

const withAxios = WrappedComponent => {
  const withAxiosHOC = (props, context) => {
    const { axios } = context;
    return <WrappedComponent {...props} axios={axios} />;
  };

  withAxiosHOC.displayName = 'withAxios()';
  withAxiosHOC.contextTypes = {
    axios: PropTypes.object
  };

  return withAxiosHOC;
}

export default withAxios;
