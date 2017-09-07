/*eslint-disable import/default*/
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import ReactCompositor from './components/ReactCompositor';

import '../node_modules/pearson-elements/scss/elements.scss';

const store = configureStore();

render(
    <Provider store={store}>
        <ReactCompositor/>
    </Provider>,
    document.getElementById('app')
);
