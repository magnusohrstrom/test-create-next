import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import AboutArticle from '../components/AboutArticle'
import MainLayout from '../layouts/MainLayout'; 
import AboutPage from '../pages/AboutPage';
import React, { Component } from 'react';
import {createStore} from 'redux';
import reducers from '../reducers/reducers';
import { Provider } from  'react-redux';


 class Index extends Component {

  render() {
   
    return (
      
      <MainLayout>
        Main
      </MainLayout>
    );
  }
 }
export default Index;