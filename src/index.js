import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import Reducer from './modules/ReduxReducer.js'
import App from './components/App.jsx'
import './index.scss'

// inject some initial DOM into our HTML before letting React takeover
let container = document.createElement('div')
let title = 'Links'
document.body.appendChild(container)
container.id = 'container'
document.getElementsByTagName('title')[0].innerHTML = title

// Redux Store
const store = createStore(Reducer)
store.subscribe(()=>{
  // a function call that you want to run every time
  // the app state has been updated

  // console.log(store.getState())
  
})

// Render
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
)
