import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import Store from './Raffle/store';
import Raffle from './Raffle/Raffle.component'

const StoreInstance = Store();

ReactDOM.render(
	<Provider store={StoreInstance}>
		<Raffle />
	</Provider>,
  document.getElementById('root')
);
