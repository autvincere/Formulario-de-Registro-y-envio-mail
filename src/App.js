import React, {Fragment} from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import Background from '../src/assets/img/bkg.jpg';
import { Reset, Typography, media, Grid, totalCenter} from './utils/constants'
import Contact from './components/Contact'
import Footer from './components/Footer'

const GlobalStyle = createGlobalStyle`
${Reset}
${Typography}
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
height:80vh;
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
