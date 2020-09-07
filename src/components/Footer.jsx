import React from 'react'
import Icon from './Icon'
import styled from 'styled-components'
import { media } from '../utils/constants'

const ContentFooter = styled.footer`
height: 2vh;
margin: 4px 0px;
${media('xs')}{
  height: auto;
  }
a{
     font-family: 'Open Sans', Helvetica, Arial, sans-serif;
}
article{
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     ${media('xs')}{
          flex-direction: column;
          text-align: center;
  }
> * {
     font-family: 'Open Sans', Helvetica, Arial, sans-serif;
     margin-right: 3px;
    font-size: 0.97em;
    font-style: inherit;
    font-weight: 600;
          &:last-child{  
          margin-right: 0px;  
          }
          ${ media('xs') } {
               margin: 6px 0px;
               font-size: 1.1em;  
     }    
     }    

}

`

const Footer = () => {
     return (
          <ContentFooter>
               <article>
                    <a href="tel:+56983975723"><Icon icon="phone" size={25} color="white" style={{verticalAlign: 'middle'}} />+569 83975723</a>
                    <a href="tel:+56936103113"><Icon icon="phone" size={25} color="white" style={{verticalAlign: 'middle'}} />+569 36103113</a>
                    <a href="mailto:contacto.svabogados@gmail.com"><Icon icon="letter" size={25} color="white" style={{verticalAlign: 'middle'}} /> contacto.svabogados@gmail.com</a>

                    <address>
                         <a href="https://goo.gl/maps/fMmVJ4DquommUzPcA" target="_blank" rel="noopener noreferrer"><Icon icon="map" size={28} color="white" style={{verticalAlign: 'middle'}} />Av. Providencia N° 1650, oficina 806, Providencia, Santiago de Chile.</a>  
                    </address>
               </article>

          </ContentFooter>
     )
}

export default Footer
