import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import React, {Component} from 'react';
import {connect} from 'react-redux';
import AboutArticle from '../components/AboutArticle';
import MainLayout from '../layouts/MainLayout';
//Styled
// import styled from 'styled-components';

class AboutPage extends Component {
render() {
    return (
      <MainLayout>
        <AboutArticle/>
      </MainLayout>
      
    )
  }
}
// const mapStateProps = ( state ) => ({
//   cats:state.cats,
//   dogs:state.dogs
// });

// export default connect(mapStateProps) (AboutPage);
export default AboutPage;