import store from './configureStore';

import appInitSaga from './sagas/appInit';
import hackathonVoteInitSaga from './sagas/hackathonVote/hackathonVoteInitSaga';
import initCurrenciesSaga from './sagas/userCurrencies/initUserCurrenciesSaga';
import rootSaga from './saga';

store.runSaga(rootSaga);
store.runSaga(appInitSaga);
store.runSaga(hackathonVoteInitSaga);
store.runSaga(initCurrenciesSaga);

export default store;
