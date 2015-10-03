export default function prefix( segment = '/api' ) {
  return {
    processRequest: req => {
      req.url = segment + req.url;
    },
  };
}
