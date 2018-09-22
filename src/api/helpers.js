import config from '../../config.json';

const {
  host, port, protocol, token, version,
} = config;

export const getUrl = path => `${protocol}://${host}/${version}/${path}`;
