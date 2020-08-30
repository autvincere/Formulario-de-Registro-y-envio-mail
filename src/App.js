import React, {Fragment} from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import { Helmet } from 'react-helmet';
import Background from '../src/assets/img/bkg.jpg';
import { Reset, media, Grid, totalCenter} from './utils/constants'
import Contact from './components/Contact'
import Footer from './components/Footer'

const GlobalStyle = createGlobalStyle`
${Reset};
a{color: #ffffff; text-decoration: none;}
h1{
  color: white;
  text-transform: uppercase;
}
`

const Bkg = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  transition: opacity 0.3s linear;
  background-color: black;
  background-size: cover;
  background-position: center center;
  ${totalCenter}
  ${media('xs')}{
    background-image: none;
    background-color: blue;
  }
`;
const Main = styled.main`
border: 3px solid #e0e0e059;
height: 90vh;
max-height: 812px;
display:flex;
flex-direction: row;
`

const ContFooter = styled(Footer)`
height: 10vh;
background:  black;

`

function App() {
  return (
    <Fragment>
      <Helmet>
        <title>Suárez & Valenzuela || Estudio Jurídico</title>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet"></link>
        <meta name="description" content="Helmet application" />
      </Helmet>
    <GlobalStyle />
    <Bkg image={Background}>
      <Grid>
      <Main>
 
        <Contact />

      </Main>
        <ContFooter>
        </ContFooter>
      </Grid>
   
    </Bkg>
    </Fragment>
  );
}

export default App;
