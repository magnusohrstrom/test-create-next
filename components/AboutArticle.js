import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import React, {Component} from 'react';
//Styled
import styled from 'styled-components';


const StyledArticle= styled.section`
    background:pink;
    height:100rem;
`;
class AboutArticle extends Component {
render() {
  return (
      <StyledArticle>
        <h1>
          About
        </h1>
      </StyledArticle>
  )
}
}
export default AboutArticle;