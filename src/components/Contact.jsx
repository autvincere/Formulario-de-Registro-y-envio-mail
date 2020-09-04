import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import emailjs from 'emailjs-com'
import { media } from '../utils/constants'
import Logo from '../components/Logo'
import ReCAPTCHA from "react-google-recaptcha";
import Icon from './Icon'
import SectionImg from '../components/SectionImg'

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
          ${ media('xs')}{
          width: 100%;
          }
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
     &:focus{
          outline: transparent;
     }
     &.disabled{
          background-color: #959595;
          opacity: 0.9;
          &:hover{
          background-color: #959595;
          cursor: auto;
     }
     }
`
const Contact = ({ setSuccess, setAnimation }) => {

     const [label, setLabel] = useState('label-primary')
     const [datos, setDatos] = useState({
          nombreYapellido: '',
          email: '',
          telefono: '',
          asunto: '',
          mensaje: ''
     })
     // const [datos, setDatos] = useState({
     //      nombreYapellido: 'Eduardo',
     //      email: 'aut.vincere@gmail.com',
     //      telefono: '56956144519',
     //      asunto: 'prueba',
     //      mensaje: 'prueba1'
     // })

     const [datosNombreYapellido, setDatosNombreYapellido] = useState('')
     const [ datosEmail, setDatosEmail ] = useState('')
     const [ datosPhone, setDatosPhone ] = useState('')
     const [ datosAsunto, setDatosAsunto] = useState('')
     const [ datosMensaje, setDatosMensaje ] = useState('')

     const [ captcha, setCaptcha] = useState(false)

     const onChange = (value) => {
          setCaptcha(true)
          console.log("Captcha value:", value);
     }

     const TEST_SITE_KEY = '6LfbBsQZAAAAAMc3KUafSvoPTHJYexmvyF_LeYnM';

     // Leer los datos del formulario y colocarlos en el state
     const handleChange = e => {
          // console.log(e.target.value);
          setLabel('label-interaction')

          setDatos({
               ...datos,
               [e.target.name]: e.target.value
          })


     }
     // extraer los valores
     let { nombreYapellido, email, telefono, asunto, mensaje } = datos;
     
     const handleSubmit = e => {
          e.preventDefault();

          if ( !nombreYapellido.trim() ){
               setDatosNombreYapellido('Ingrese nombre y apellido porfavor')
               return
          // }else if ( !/^[A-Z]+$/i.test(nombreYapellido) ){
          //      setDatosNombreYapellido('Ingrese solo letras porfavor')
          //      return
          }else{
               setDatosNombreYapellido('nombre y apellido correctos')
          }

          if ( !email.trim() ){
               setDatosEmail('Ingrese email porfavor')
               return
          }else if ( !/\S+@\S+\.\S+/.test(email) ){
               setDatosEmail('Ingrese caracteres validos porfavor')
               return
          }else{
               setDatosEmail('email correcto')  
          }


          if ( !telefono.trim() ){
               setDatosPhone('Ingrese un número de telefono porfavor')
               return

          }else if (!/^\d+$/.test(telefono)) {
               // console.log('telefono invalido')
               setDatosPhone('Número de telefono inválido')
               return
          } else {
               // datos.telefono = '+56' + telefono; 
               setDatosPhone('Número de telefono correcto')
          }

          if ( !asunto.trim() ){
               setDatosAsunto('Ingrese un asunto porfavor')
               return
          }else{
               setDatosAsunto('asunto correcto')
          }

          if ( !mensaje.trim() ){
               setDatosMensaje('Ingrese mensaje porfavor')
               return
          }else{
               setDatosMensaje('mensaje correcto')
          }

          console.log('datos correctos!');

          emailjs.sendForm('gmail', 'template_nveymuh', e.target, 'user_QSwylU3q0ZhN4klGcFido')
          .then((result) => {
              console.log('exito!',result.text);
          }, (error) => {
              console.log(error.text);
          });

          setSuccess(true)
          setAnimation(true)
      }

     

     return (
          <Fragment>
               <SectionForm>
                    <LogoMain />
                    <h1>¿Necesitas asesoría jurídica?</h1>

                    <form onSubmit={ handleSubmit }>
                         <ContInput>
                              <div>
                                   <input
                                        type="text"
                                        name="nombreYapellido"
                                        value={nombreYapellido}
                                        onChange={handleChange}
                                   />
                                   <label htmlFor="name" className={label}>Nombre y apellido</label>
                              </div>
                              { datosNombreYapellido && <p>{ datosNombreYapellido }</p> }
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
                              { datosEmail && <p>{ datosEmail }</p> }
                              
                         </ContInput>

                         <ContInput>
                              <div>
                                   <input
                                        type="text"
                                        name="telefono"
                                        value={telefono}
                                        onChange={handleChange}
                                   />
                                   <label htmlFor="telefono" className={label}>telefono</label>
                              </div>
                              { datosPhone && <p>{ datosPhone }</p> }
                             
                         </ContInput>

                         <ContInput>
                              <div>
                                   <input
                                        type="text"
                                        name="asunto"
                                        value={ asunto }
                                        onChange={handleChange}
                                   />
                                   <label htmlFor="asunto" className={label}>Asunto</label>
                              </div>
                              { datosAsunto && <p>{ datosAsunto }</p> }
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
                              { datosMensaje && <p>{ datosMensaje }</p> }
                         </ContTextArea>
                         <ReCAPTCHA
                              className="center-recaptcha"
                              sitekey={TEST_SITE_KEY}
                              onChange={ onChange }
                         />
                          {
                                   captcha ? (<Boton type="submit">enviar <Icon icon="call" size={20} color="white" style={{ verticalAlign: 'middle' }} /></Boton>) : (<Boton className="disabled">enviar <Icon icon="call" size={20} color="white" style={{ verticalAlign: 'middle' }} /></Boton>)
                              }
                    </form>
               </SectionForm>

               <SectionImg />

          </Fragment>
     )
}

export default Contact
