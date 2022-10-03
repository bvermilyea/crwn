import { compose, createStore, applyMiddleware } from 'redux'
//import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import { rootReducer } from './root-reducer'
// import { configure } from '@testing-library/react'

const middleWares = [logger]

const composedEnhancers = compose(applyMiddleware(...middleWares))

export const store = createStore(rootReducer, undefined, composedEnhancers)