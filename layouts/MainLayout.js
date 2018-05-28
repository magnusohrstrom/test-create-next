import Head from '../components/head';
import Nav from '../components/nav';
import {createStore} from 'redux';
import reducers from '../reducers/reducers';
import { Provider } from  'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import styled from 'styled-components';

const store = createStore(reducers,composeWithDevTools());

const StyledMainWrapper = styled.section`
    background:#00C0F2;
    height:70rem;
`;

export default ({ children }) => (
    <Provider store = {store}>
        <StyledMainWrapper>
         <Head title="Home" />
         <Nav />
            { children }
        </StyledMainWrapper>
    </Provider>
  )