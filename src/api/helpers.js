import config from '../config.json';

const { host, port, protocol, token, version } = config.api;

export const getUrl = (path = '', params) => {
  const url = new URL(
    `${protocol}://${host}${port ? `:${port}` : ''}/${version}/${path}`
  );
  if (params) {
    Object.keys(params).forEach(key =>
      url.searchParams.append(key, JSON.stringify(params[key]))
    );
  }
  return url;
};

export const getOptions = settings => ({
  ...settings,
  token: `JWT ${token}`
});
