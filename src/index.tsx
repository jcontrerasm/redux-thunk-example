import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from '@app/src/common/store';
import { Profile } from '@app/src/views/profile';
import './index.css';

render(
  <Provider store={store}>
    <Profile />
  </Provider>,
  document.getElementById('app')
)
