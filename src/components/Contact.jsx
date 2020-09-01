import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import { media } from '../utils/constants'
import Photo from '../assets/img/ximena_carlos.jpg';
import Logo from '../components/Logo'
import ReCAPTCHA from "react-google-recaptcha";
import Icon from './Icon'

const SectionForm = styled.section`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
${ media('xs')}{
  width: 100%;
  flex-direction: column;
  }

h1{
     font-family: 'Open Sans', Helvetica, Arial, sans-serif;
     text-align: center;
     font-size: 1.3em;
}
form{
     font-family: 'Open Sans', Helvetica, Arial, sans-serif;
     width: 90%;
     margin: 2px 0px 17px 0px;
}
label{
     color: #202020;
}
.center-recaptcha{
    text-align: center;
    display: flex;
    justify-content: center;
    margin-top: 34px;
}
.label-primary{
     font-size: 1.1em;
     font-weight: 200;
     position: absolute;
     top: 10px;
     left: 19px;
}
.label-interaction{
     font-size: 0.9em;
     font-weight: 200;
     position: absolute;
     top: 3px;
     left: 19px;
}
.social-icons{
    filter: dropShadow(-2px 3px 4px #000000);
}
p{
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  color: white;
  text-align: right;
  padding: 0px 0 0 0;
  font-size: 0.98em;

     ${ media('xs') } {
               text-align: center;
     }
  }
/* > * {
     justify-content:center;   
} */
`
const SectionImg = styled.section`
width: 50%;
height: 100%;
line-height: 0px;
overflow: hidden;
position: relative;

${media('xs')}{
overflow: inherit;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;
  }

.social{
     position: absolute;
     bottom: 5px;
     right: 4px;

    ${media('xs')}{
          position: inherit;
          text-align: center;
          bottom: 0px;
          right: 0px;
          margin: 6px 0px;  
  
  }
    
    a{
         margin-right: 6px;
          &:last-child {
               margin-right: 0px;
          }
          .social-icons{
    filter: drop-shadow(-2px 3px 2px #000000);
}
    }
}
img{
     width: 100%;
     ${media('xs')}{
          width: 260px;
          margin: 0 auto;
  }
}
`
const LogoMain = styled(Logo)`
  width: ${ props => props.width || '238px'};
  text-align: center;
  margin-bottom: 8px;
  margin-top: 8px;
`

const ContInput = styled.div`
    margin: 32px 0px;
     position: relative;
     height: 38px;
     &:first-child{
          margin: 0px 0px 32px 0px;
     }
     
     label, input {
     font-family: 'Open Sans', Helvetica, Arial, sans-serif;
     transition: all 0.2s;
     touch-action: manipulation;
     }
     label {
          font-weight: 200;
     }
     input {
     width: 100%;
     height: 38px;
     font-size: 1.1em;
     border: 0;
     margin: 6px 0px;
     -webkit-appearance: none;
     border-radius: 3px;
     /* font-size: 1.5em; */
     padding: 12px 0 0 17px;
     font-weight: 400;
     cursor: text;
          &:focus {
               outline: 0;
               border-bottom: 1px solid #666;
               }
          }
`

const ContTextArea = styled.div`
     height: 100px;
     padding-top: 5px;
     position: relative;

     label, input {
     font-family: 'Open Sans', Helvetica, Arial, sans-serif;
     transition: all 0.2s;
     touch-action: manipulation;
     }
      /* label {
          font-weight: 200;
          position: absolute;
          top: 10px;
          left: 19px;
     }  */
textarea{
          width: 100%;
          height: 100px;
	     max-width:100%;
          resize:none;
          /* font-size: 1.3em; */
          border: 0;
          -webkit-appearance: none;
          border-radius: 3px;
          font-size: 1.5em;
          padding: 12px 0 0 17px;
          font-weight: 400;
          cursor: text;
          &:focus {
               outline: transparent auto 0px;
          }
     }
`
const Boton = styled.button`
     background-color: #1D6697;
     font-size: 1.2em;
     width: 100%;
     padding: 9px;
     color: #fff;
     text-transform: capitalize;
     border: none;
     border-radius: 3px;
     margin-top: 10px;
     transition: 0.3s ease;
     &:hover{
          cursor: pointer;
          background-color: #124465;
     }
`
const Contact = () => {

     const [label, setLabel] = useState('label-primary')
     const [datos, setDatos] = useState({
          nombres: '',
          apellidos: '',
          email: '',
          telefono: '',
          asunto: '',
          mensaje: ''
     })

     const TEST_SITE_KEY = '6LfbBsQZAAAAAMc3KUafSvoPTHJYexmvyF_LeYnM';

     // Leer los datos del formulario y colocarlos en el state
     const handleChange = e => {
          console.log(e.target.value);
          setLabel('label-interaction')

          setDatos({
               ...datos,
               [e.target.name]: e.target.value
          })


     }
     // extraer los valores
     let { nombres, email, telefono, asunto, mensaje } = datos;
     return (
          <Fragment>
               <SectionForm>
                    <LogoMain />
                    <h1>
                         ¿Necesitas asesoría jurídica?
                    </h1>

                    <form>

                         <ContInput>
                              <div>
                                   <input
                                        type="text"
                                        name="nombres"
                                        value={nombres}
                                        onChange={handleChange}
                                   />
                                   <label htmlFor="name" className={label} >Nombres</label>
                              </div>
                              <p>Porfavor, ingrese un nombre válido </p>
                         </ContInput>

                         <ContInput>
                              <div>
                                   <input
                                        type="text"
                                        name="email"
                                        value={email}
                                        onChange={handleChange}
                                   />
                                   <label htmlFor="email" className={label}>Email</label>
                              </div>
                              <p>Porfavor, ingrese un nombre válido </p>
                         </ContInput>

                         <ContInput>
                              <div>
                                   <input
                                        type="text"
                                        name="email"
                                        value={telefono}
                                        onChange={handleChange}
                                   />
                                   <label htmlFor="telefono" className={label}>telefono</label>
                              </div>
                              <p>Porfavor, ingrese un nombre válido </p>
                         </ContInput>

                         <ContInput>
                              <div>
                                   <input
                                        type="text"
                                        name="email"
                                        value={asunto}
                                        onChange={handleChange}
                                   />
                                   <label htmlFor="asunto" className={label}>Asunto</label>
                              </div>
                              <p>Porfavor, ingrese un nombre válido </p>
                         </ContInput>


                         <ContTextArea>
                              <div>
                                   <textarea
                                        id="mensaje"
                                        name="mensaje"
                                        value={mensaje}
                                        onChange={handleChange}
                                   >

                                   </textarea>
                                   <label htmlFor="mensaje" className={label} >Mensaje:</label>
                              </div>
                              <p>Porfavor, ingrese un nombre válido </p>
                         </ContTextArea>
                         <ReCAPTCHA
                              className="center-recaptcha"
                              sitekey={TEST_SITE_KEY}
                              onChange={console.log('recaptcha')}
                         />
                         <Boton type="submit">enviar <Icon icon="call" size={20} color="white" style={{ verticalAlign: 'middle' }} /></Boton>
                    </form>

               </SectionForm>

               <SectionImg>
                    <article className="social">
                         <a href="tel:858652585"><Icon icon="facebook" size={29} color="white" style={{ verticalAlign: 'middle', }} className="social-icons" /></a>

                         <a href="tel:858652585"><Icon icon="twitter" size={29} color="white" style={{ verticalAlign: 'middle' }} className="social-icons" /></a>

                         <a href="tel:858652585"><Icon icon="instagram" size={29} color="white" style={{ verticalAlign: 'middle' }} className="social-icons" /></a>
                    </article>
                    <img src={Photo} alt="" />
               </SectionImg>

          </Fragment>
     )
}

export default Contact
