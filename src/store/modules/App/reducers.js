import { set } from 'lodash';
import {
  SET_LANGUAGE,
  SET_SCREEN_HEIGHT,
  SET_SCREEN_WIDTH,
  SET_SYNCED_DATE,
  SET_SYNCED,
  SET_SYNCING
} from './constants';

const reducers = {
  [SET_LANGUAGE](state, { language }) {
    set(state, 'language', language);

    return state;
  },
  [SET_SYNCED](state, { value }) {
    set(state, 'isSynced', value);

    return state;
  },
  [SET_SYNCING](state, { value }) {
    set(state, 'isSyncing', value);

    return state;
  },
  [SET_SYNCED_DATE](state, { value }) {
    set(state, 'syncedDate', value);

    return state;
  },
  [SET_SCREEN_HEIGHT](state, { value }) {
    set(state, 'screen.height', value);

    return state;
  },
  [SET_SCREEN_WIDTH](state, { value }) {
    set(state, 'screen.width', value);

    return state;
  }
};

export default reducers;
