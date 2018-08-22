import store from './configureStore';

import appInitSaga from './sagas/appInit';
import rootSaga from './saga';

store.runSaga(rootSaga);
store.runSaga(appInitSaga);

export { persistor } from './configureStore';

export default store;
