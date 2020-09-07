import React from 'react'
import Logo from '../components/Logo'
import styled from 'styled-components'
import Icon from './Icon'
import { totalCenter, media } from '../utils/constants'

const ContentSucess = styled.div`
transition: .5s;
transform: translateY(0%);
${totalCenter}
flex-direction: column;
width: 100%;
color: white;
h2{
text-transform: uppercase;
${ media('xs')}{
  font-size: 1.5em;
  text-align: center;
  padding: 0px 10px;
  }
}
.icon{
     width: 38px;
     height: 38px;
     ${ media('xs')}{
          width: 68px;
          height: 68px;
      }  
  }
animation: down-arrow 1s ease-out 0s;

@keyframes down-arrow {
  0% {
    transform: translate(0px, -25px);
    opacity: 0.01; }
  100% {
    transform: translate(0px, 0px);
    opacity: 1; } 
}
`
const LogoMain = styled(Logo)`
  width: ${ props => props.width || '238px'};
  text-align: center;
  margin-bottom: 8px;
`
const ContTwoItems = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin-bottom: -6px;
${ media('xs')}{
     flex-direction: column;
  }

`
const ContentCard = styled.article`
display: flex;
justify-content: space-around;
margin-top: 12px;
flex-direction: row;
${ media('xs')}{
     flex-direction: column;
      }
`
const Line100 = styled.div`
height: 2px;
width: 30%;
background-color: #ffffff;
margin: 14px 0px;
`
const Card = styled.div`
     outline: 2px solid #ffffff63;
     position: relative;
     text-align: center;
     overflow: hidden;
     padding: 6px;
    display: inline-block;
    ${ media('xs')}{
     display: block;
      }

    &:first-child{
     margin-right: 150px;
     margin-bottom: 0px;
     ${ media('xs')}{
          margin-right: 0px;
          margin-bottom: 30px;
      } 
    }
     img{
          width: 100%;
          max-width: 250px;    
     }
     .info{
          position: absolute;
          bottom: 0px;
          text-align: left;
          display: flex;
          flex-direction: column;
          width: 95.8%;
          background: linear-gradient(0deg, #000000 0, #00000000 100%);
          height: 33%;
          padding-left: 5px;
          margin-bottom: 6px;

          /* Selector de todos los hijos */
          > * {
               margin-bottom: 3px;
          }
          .line{
               height: 2px;
               width: 16px;
               background-color: #ffffff;
               margin: 6px 0px;
          }
     }
`
const FormSuccess = () => {
     // console.log( animation );
     return (
          <ContentSucess>
                    <LogoMain />
                    <ContTwoItems>
                         <Icon icon="success" className="icon" color="white" style={{verticalAlign: 'middle'}} />
                    <h2>Su formulario ha sido enviado con exito</h2>
                    </ContTwoItems>
                    <h2>Nuestros profesionales pronto lo contactáran.</h2>
                    <Line100 />
                    <ContentCard>
                         <Card>
                             <img src={require('../assets/img/ximenita.jpg')} alt="ximena_valenzuela"/>
                             <div className="info">
                                  <h3>
                                  Ximena Valenzuela Pérez
                                  </h3>
                                  <p>
                                  Abogada. Socia en S&V. 
                                  </p>
                                  <div className="line"></div>
                                  <a href="tel:+56983975723"><Icon icon="mobile" size={30} color="white" style={{verticalAlign: 'middle', marginLeft: '-5px'}} />+569 83975723</a>
                                  <a href="mailto:ximena.valenzuelaprz@gmail.com" style={{fontSize: '0.84em'}}><Icon icon="letter" size={20} color="white" style={{verticalAlign: 'middle'}} /> ximena.valenzuelaprz@gmail.com</a>
                                  </div> 
                         </Card>

                         <Card>
                             <img src={require('../assets/img/carlos.jpg')} alt="ximena_valenzuela"/>
                             <div className="info">
                                  <h3>
                                  Carlos Suárez Cerda
                                  </h3>
                                  <p>
                                  Asesor Jurídico. Socio en S&V. 
                                  </p>
                                  <div className="line"></div>
                                  <a href="tel:+56957394980"><Icon icon="mobile" size={30} color="white" style={{verticalAlign: 'middle', marginLeft: '-5px'}} />+569 57394980</a>
                                  <a href="mailto:csuarez.asejur@gmail.com" style={{fontSize: '0.95em'}}><Icon icon="letter" size={20} color="white" style={{verticalAlign: 'middle'}} /> csuarez.asejur@gmail.com</a>
                                  </div> 
                         </Card>
                    </ContentCard>
          </ContentSucess>
     )
}

export default FormSuccess
