import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import React, {Component} from 'react';
import AboutArticle from '../components/AboutArticle';
//Styled
// import styled from 'styled-components';

class AboutPage extends Component {
render() {
  return (
    <div>
      <Head title="Home" />
      <Nav />
      <AboutArticle/>
    </div>
  )
}
}
export default AboutPage;