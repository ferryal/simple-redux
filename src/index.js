import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import productsReducer from './reducers/products-reducer'
import userReducer from './reducers/user-reducer'


const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer
})

const store = createStore(allReducers, {
  products: [{
    brand: 'iPhone',
    type: 'iPhone x',
    price: 20000000
  }, {
    brand: 'Samsung',
    type: 'Samsung S8',
    price: 14000000
  }],
  user: 'Ferryal Muhamad Fajar'
},
  window.devToolsExtension && window.devToolsExtension()
)


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
