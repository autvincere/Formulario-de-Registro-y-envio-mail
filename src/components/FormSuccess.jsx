import React from 'react'
import Logo from '../components/Logo'
import styled from 'styled-components'
import Icon from './Icon'
import { totalCenter } from '../utils/constants'
// import { CSSTransition } from 'react-transition-group'

const ContentSucess = styled.div`
transition: .5s;
transform: translateY(0%);
${totalCenter}
flex-direction: column;
width: 100%;
color: white;
h2{
     text-transform: uppercase;
font-family: 'Open Sans', Helvetica, Arial, sans-serif;
}

.resultado-enter {
  transition: .5s;
}
.resultado-enter.resultado-enter-active{
  transform: translateY(0%);
}
.resultado-exit{
  transform: translateY(0);
  transition: .5s;
  position : absolute;
  left: 0;
  bottom : 0;
  right: 0;
}
.resultado-exit-active{
  opacity: 0;
  transform: translateY(-10%);
}
`
const LogoMain = styled(Logo)`
  width: ${ props => props.width || '238px'};
  text-align: center;
  margin-bottom: 8px;
  margin-top: 8px;
`
const ContTwoItems = styled.div`
display: flex;
flex-direction: row;
font-family: 'Open Sans', Helvetica, Arial, sans-serif;
align-items: center;
margin-bottom: -6px;
`
const FormSuccess = () => {
     // console.log( animation );
     return (
          <ContentSucess>
              
                    {/* <CSSTransition 
                     classNames="resultado"
                     in={animation}
                     timeout={{ enter: 500, exit: 500}}
                    > */}
                    <LogoMain />
                    <ContTwoItems>
                         <Icon icon="success" size={48} color="white" style={{verticalAlign: 'middle'}} />
                    <h2>Su formulario ha sido enviado con exito</h2>
                    </ContTwoItems>
                    <h2>Nuestros profesionales pronto lo contactáran.</h2>
               {/* </CSSTransition> */}
          </ContentSucess>
     )
}

export default FormSuccess
