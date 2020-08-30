import React from 'react'
import Icon from './Icon'
import styled from 'styled-components'

const ContentFooter = styled.footer`
height: 2vh;
margin: 4px 0px;
a{
     font-family: 'Open Sans', Helvetica, Arial, sans-serif;
}
article{
     display: flex;
     flex-direction: row;
     justify-content: space-between;
> * {
     font-family: 'Open Sans', Helvetica, Arial, sans-serif;
     margin-right: 3px;
    font-size: 0.97em;
    font-style: inherit;
    font-weight: 600;
          &:last-child{  
          margin-right: 0px;  
          }    
     }    

}
.social{
     justify-content: center;
}
`

const Footer = () => {
     return (
          <ContentFooter>
               <article>
                    <a href="tel:858652585"><Icon icon="phone" size={25} color="white" style={{verticalAlign: 'middle'}} />+569 83975723</a>
                    <a href="tel:858652585"><Icon icon="phone" size={25} color="white" style={{verticalAlign: 'middle'}} />+569 83975723</a>
                    <a href="mailto:contacto.svabogados@gmail.com"><Icon icon="letter" size={25} color="white" style={{verticalAlign: 'middle'}} /> contacto.svabogados@gmail.com</a>

                    <address>
                         <a href="tel:858652585"><Icon icon="map" size={28} color="white" style={{verticalAlign: 'middle'}} />Av. Providencia N° 1650, oficina 806, Providencia, Santiago de Chile.</a>  
                    </address>
               </article>

               {/* <article className="social">
               <a href="tel:858652585"><Icon icon="facebook" size={25} color="white" style={{verticalAlign: 'middle'}} /></a>
               <a href="tel:858652585"><Icon icon="twitter" size={25} color="white" style={{verticalAlign: 'middle'}} /></a>
               <a href="tel:858652585"><Icon icon="instagram" size={25} color="white" style={{verticalAlign: 'middle'}} /></a>
               </article> */}

          </ContentFooter>
     )
}

export default Footer
