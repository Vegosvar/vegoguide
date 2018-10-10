import { isEmpty } from 'lodash';
import { all } from 'redux-saga/effects';

const generateSagas = modules =>
  Object.values(modules).reduce((generatedSagas, { sagas = {} }) => {
    if (isEmpty(sagas)) {
      return generatedSagas;
    }

    return [...generatedSagas, ...Object.values(sagas)];
  }, []);

export default function generateRootSaga(modules) {
  const generatedSagas = generateSagas(modules);
  const invokedSagas = generatedSagas.map(saga => saga());

  return function* rootSaga() {
    yield all(invokedSagas);
  };
}
