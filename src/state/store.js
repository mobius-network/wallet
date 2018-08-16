import store from './configureStore';
import rootSaga from './saga';

store.runSaga(rootSaga);

export { persistor } from './configureStore';

export default store;
