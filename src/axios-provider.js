import React from 'react';
import PropTypes from 'prop-types';
import prepareAxios from 'axios-push';

export default class AxiosProvider extends React.Component {
  static propTypes = {
    req: PropTypes.object,
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
    const { req, axios } = this.props;
    this.setState({
      axios: prepareAxios(req, axios)
    });
  }

  componentWillReceiveProps(nextProps) {
    // TODO if new axios config passed in, update axios config.
  }

  render() {
    return this.propTypes.children;
  }
}
