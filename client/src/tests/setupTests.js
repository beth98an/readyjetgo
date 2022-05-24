import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../redux/reducers';
import { MemoryRouter } from "react-router-dom";

const TestProviders = ({ initState }) => {
    initState ||= {username: ''};
    let testReducer = () => reducer(initState, { type: '@@INIT' })
    const testStore = createStore(testReducer, applyMiddleware(thunk))

    return ({ children }) => (
        <MemoryRouter>
            <Provider store={testStore}>
                { children }
            </Provider>
        </MemoryRouter>
    )
}

const renderWithReduxProvider = (ui, options={}) => {
    let TestWrapper = TestProviders(options)
    render(ui, { wrapper: TestWrapper, ...options })
}

global.React = React;
global.render = render;
global.renderWithReduxProvider = renderWithReduxProvider
global.userEvent = userEvent;