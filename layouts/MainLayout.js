import Head from '../components/head';
import Nav from '../components/nav';
import {createStore} from 'redux';
import reducers from '../reducers/reducers';
import { Provider } from  'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducers,composeWithDevTools());

export default ({ children }) => (
    <Provider store = {store}>
        <div>
         <Head title="Home" />
         <Nav />
            { children }
        </div>
    </Provider>
  )