import { set } from 'lodash';
import {
  SET_LANGUAGE,
  SET_SYNCED_DATE,
  SET_SYNCED,
  SET_SYNCING
} from './constants';

const reducers = {
  [SET_SYNCING](state, { value }) {
    set(state, 'isSyncing', value);

    return state;
  },
  [SET_SYNCED](state, { value }) {
    set(state, 'isSynced', value);

    return state;
  },
  [SET_SYNCED_DATE](state, { value }) {
    set(state, 'syncedDate', value);

    return state;
  },
  [SET_LANGUAGE](state, { language }) {
    set(state, 'language', language);

    return state;
  }
};

export default reducers;
