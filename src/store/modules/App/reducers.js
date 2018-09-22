import { set } from 'lodash';
import { SET_SYNCED, SET_SYNCING, SET_SYNCED_DATE } from './constants';

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
};

export default reducers;
