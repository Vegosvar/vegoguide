import config from 'config';
import store from 'store';

const { host, port, protocol, prefix, version } = config.api;

export const getUrl = (path = '', params) => {
  const url = new URL(
    `${protocol}://${host}${port ? `:${port}` : ''}${
      prefix ? `/${prefix}` : ''
    }/${version}/${path}`
  );

  if (params) {
    Object.keys(params).forEach(key =>
      url.searchParams.append(key, JSON.stringify(params[key]))
    );
  }

  return url;
};

export const getOptions = (settings = {}) => {
  const state = store.getState();

  return {
    ...settings,
    headers: {
      'Accept-Language': state.App.language,
      Authorization: state.App.token ? `JWT ${state.App.token}` : '',
      ...settings.headers
    }
  };
};
