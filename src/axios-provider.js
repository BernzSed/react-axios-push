import React from 'react';
import PropTypes from 'prop-types';
import prepareAxios from 'axios-push';

export default class AxiosProvider extends React.Component {
  static propTypes = {
    request: PropTypes.object,
    axios: PropTypes.object,
    children: PropTypes.node.isRequired
  };

  static childContextTypes = {
    axios: PropTypes.object
  }

  getChildContext() {
    return {
      axios: this.state.axios
    };
  }

  componentWillMount() {
    const { request, axios } = this.props;
    this.setState({
      axios: prepareAxios(request, axios)
    });
  }

  render() {
    return this.propTypes.children;
  }
}
