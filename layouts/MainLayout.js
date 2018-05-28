import Head from '../components/head';
import Nav from '../components/nav';
import {createStore} from 'redux';
import reducers from '../reducers/reducers';
import { Provider } from  'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducers,composeWithDevTools());

export default ({ children }) => (
    <Provider store = {store}>
        <div className = "main-container">
         <Head title="Home" />
         <Nav />
            { children }
            <style jsx>{`
                .main-container {
                    height:300rem;
                    background:#152452;
                }
            `}</style>
        </div>
    </Provider>
  )