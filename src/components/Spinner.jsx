import React from 'react'
import styled from 'styled-components'

const ContentSpinner = styled.div`
margin: 100px auto 0;
     width: 70px;
     text-align: center;
     div{
     width: 18px;
     height: 18px;
     background-color: #ffffff;
     border-radius: 100%;
     display: inline-block;
     animation: sk-bouncedelay 1.4s infinite ease-in-out both;  
     }
     .bounce1{
          animation-delay: -0.32s;
     }
     .bounce2{
          animation-delay: -0.16s;
     }
     @keyframes sk-bouncedelay {
     0%, 80%, 100% { 
       transform: scale(0);
     } 40% { 
       transform: scale(1.0);
     }
   }
`
const Spinner = () => {
     return (
          <ContentSpinner>
               <div className="bounce1"></div>
               <div className="bounce2"></div>
               <div className="bounce3"></div>
          </ContentSpinner>
     )
}

export default Spinner
