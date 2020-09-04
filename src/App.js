import React, { Fragment, useState} from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import { Helmet } from 'react-helmet';
import Background from '../src/assets/img/bkg.jpg';
import { Reset, media, Grid, totalCenter} from './utils/constants'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FormSuccess from './components/FormSuccess';
// import Spinner from './components/Spinner';


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
  /* width: 100%; */
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  transition: opacity 0.3s linear;
  background-color: black;
  background-size: cover;
  background-position: center center;
    ${totalCenter}
    ${media('xs')}{
        background-attachment: fixed;
        height: auto;
        overflow-x: hidden;
        overflow-y: scroll;
    }
`;
const Main = styled.main`
border: 3px solid #e0e0e059;
height: 90vh;
max-height: 812px;
display:flex;
flex-direction: row;
${media('xs')}{
  border: 0px solid transparent;
  flex-direction: column;
  height: auto;
  margin: 0 auto;
  max-height: fit-content;
  }
`

const ContFooter = styled(Footer)`
height: 10vh;
background: black;
`

function App() {

  const [ success, setSuccess ] = useState(false)
  const [ animation, setAnimation ] = useState(false)
  return (
    <Fragment>
      <Helmet>
        <title>Suárez & Valenzuela || Estudio Jurídico</title>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet"></link>
        <meta name="description" content="Estudio jurídico conformado por un equipo multidisciplinario de abogados y asesores, cuyo desempeño y asesoría integral está abocada a la representación de nuestros patrocinados en litigios, la prevención y solución alternativa de conflictos" />
      </Helmet>
    <GlobalStyle />
    <Bkg image={Background}>
      <Grid>
      <Main>

        { success ? <FormSuccess animation = {animation}/> : <Contact setSuccess={setSuccess} setAnimation={setAnimation}/>}
        {/* <Spinner /> */}
      </Main>
        <ContFooter>
        </ContFooter>
      </Grid>
   
    </Bkg>
    </Fragment>
  );
}

export default App;
