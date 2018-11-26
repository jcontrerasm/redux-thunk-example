import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { profileState } from '@app/src/views/profile/state';

const CONFIG_REDUX_DEV_TOOL = (
  (window as any).devToolsExtension &&
  (window as any).devToolsExtension()
);

export const store = createStore(
  profileState,
  CONFIG_REDUX_DEV_TOOL,
  applyMiddleware(thunk)
);
