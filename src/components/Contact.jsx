import React, { Fragment } from 'react'
import styled from 'styled-components'
import Photo from '../assets/img/ximena_carlos.jpg';
import Logo from '../components/Logo'
import ReCAPTCHA from "react-google-recaptcha";

const SectionForm = styled.section`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
h1{
     text-align:center;
     font-size: 1.5em;
}
form{
     width: 90%;
     margin: 10px 0px;


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
img{
     width: 100%;
}
`
const LogoMain = styled(Logo)`
  width: ${ props => props.width || '248px'};
  text-align: center;
`

const ContInput = styled.div`
    margin: 10px 0px;
div{
     height: 44px;
     display: flex;
     flex-flow: column-reverse;
     
     label, input {
     transition: all 0.2s;
     touch-action: manipulation;
     }
     label {
          font-weight: 200;
     }
     input {
     font-size: 1.3em;
     border: 0;
     
     -webkit-appearance: none;
     border-radius: 3px;
     font-size: 1.5em;
     padding: 12px 0 0 17px;
     font-weight: 400;
     cursor: text;
          &:focus {
               outline: 0;
               border-bottom: 1px solid #666;
               }
          &:placeholder-shown + label {
               cursor: text;
               max-width: 60%;
               white-space: nowrap;
               /* overflow: hidden; */
               text-overflow: ellipsis;
               transform-origin: left bottom;
               transform: translate(19px, 40px) scale(1.3);
          }
          &:focus::-webkit-input-placeholder {
               opacity: 1;
          }
          ::-webkit-input-placeholder {
               opacity: 0;
               transition: inherit;
          }
     }

     input:not(:placeholder-shown) + label,
     input:focus + label {
          transform: translate(19px,21px) scale(1);
     cursor: pointer;
     }
}  
p{
  color: white;
  text-align: right;
  padding: 4px 0 0 0;
  }
`

const ContTextArea = styled.div`
     height: 100px;
     /* display: flex;
     flex-flow: column-reverse; */
     position: relative;
     
     label, input {
     transition: all 0.2s;
     touch-action: manipulation;
     }
     label {
          font-weight: 200;
          position: absolute;
          top: 10px;
          left: 19px;
          font-size: 1.2em;
     }
textarea{
          width: 100%;
          height: 100px;
	     max-width:100%;
          resize:none;
          font-size: 1.3em;
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
background-color: #00838f;
font-size: 16px;
width: 100%;
padding: 1rem;
color: #fff;
text-transform: uppercase;
font-weight: bold;
border: none;
margin-top: 2rem;
transition: 0.3s ease;
&:hover{
     cursor: pointer;
     background-color: #26c6da;
}
`
const Contact = () => {
     const TEST_SITE_KEY = '6LfbBsQZAAAAAMc3KUafSvoPTHJYexmvyF_LeYnM';
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
                                   <input type="text" name="name" id="name" placeholder=" " />
                                   <label htmlFor="name">Nombres</label>
                              </div>
                              <p>Porfavor, ingrese un nombre válido </p>
                         </ContInput>

                         <ContInput>
                              <div>
                                   <input type="text" name="apellidos" id="apellidos" placeholder=" " />
                                   <label htmlFor="apellidos">Apellidos</label>
                              </div>
                              <p>Porfavor, ingrese un nombre válido </p>
                         </ContInput>

                         <ContTextArea>
                              <textarea 
                              id="mensaje" 
                              name="mensaje"
                              
                              ></textarea>
                              <label htmlFor="mensaje">Mensaje:</label>
                         </ContTextArea>
                         <ReCAPTCHA
                                   className="center-align"
                                   sitekey={TEST_SITE_KEY}
                                   onChange={ console.log('recapchta') }
                              />    
                         <Boton type="submit">Cotizar</Boton>
                    </form>

               </SectionForm>

               <SectionImg>
                    <img src={Photo} alt="" />
               </SectionImg>

          </Fragment>
     )
}

export default Contact
