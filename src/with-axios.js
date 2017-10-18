const withAxios = WrappedComponent => (props, context) => {
  // TODO contextTypes
  const { axios } = context;
  return <WrappedComponent {...props} axios={axios} />;
};

export default withAxios;
