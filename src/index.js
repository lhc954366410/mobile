import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import RouterApp from './routers'
import rootReducer from './reducers'
import 'antd-mobile/dist/antd-mobile.css'
const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <RouterApp />
  </Provider>,
  document.getElementById('root')
)
