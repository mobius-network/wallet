import store from './configureStore';

import appInitSaga from './sagas/appInit';
import hackathonVoteInitSaga from './sagas/hackathonVote/hackathonVoteInitSaga';
import rootSaga from './saga';

store.runSaga(rootSaga);
store.runSaga(appInitSaga);
store.runSaga(hackathonVoteInitSaga);

export default store;
