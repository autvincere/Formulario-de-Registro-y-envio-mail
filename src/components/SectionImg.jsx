import React from 'react'
import Photo from '../assets/img/ximena_carlos.jpg';
import Icon from './Icon'
import styled from 'styled-components'
import { media } from '../utils/constants'

const ContImage = styled.div`
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
          border: 3px solid #ffffff38;
  }
}
`

const SectionImg = () => {
     return (
     <ContImage>
                    <article className="social">
                         <a href="https://www.facebook.com/suvalegal/" target="_blank" rel="noopener noreferrer"><Icon icon="facebook" size={40} color="white" style={{ verticalAlign: 'middle', }} className="social-icons" /></a>

                         {/* <a href="tel:858652585"><Icon icon="twitter" size={29} color="white" style={{ verticalAlign: 'middle' }} className="social-icons" /></a> */}

                         <a href="https://www.instagram.com/sv.abogados/?igshid=17eskiz2pzwe8" target="_blank" rel="noopener noreferrer"><Icon icon="instagram" size={40} color="white" style={{ verticalAlign: 'middle' }} className="social-icons" /></a>
                    </article>
                    <img src={Photo} alt="" />
     </ContImage> 
        
     )
}

export default SectionImg
