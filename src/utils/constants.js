import styled, { css } from 'styled-components'

export const Reset = css`
  *{
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
      -ms-font-smoothing: antialiased;
      -o-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-rendering: optimizeLegibility;
      box-sizing: border-box;
      font-family: Arial, Helvetica, sans-serif; 
  }
`
export const Typography = css`
*{
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
 /* @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
    font-family: 'Open Sans', Helvetica, Arial, sans-serif; */
    /* @font-face {
      src: url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
      font-family: 'Open Sans', Helvetica, Arial, sans-serif;
    } */
  }

`
const breakpointsDictionary = [
  {
    id: 'cero',
    breakpoint: '0px'
  }, 
  {
    id: 'xss',
    breakpoint: '320px'
  },
  {
    id: 'xs',
    breakpoint: '480px'
  }, 
  {
    id: 'md',
    breakpoint: '767px'
  },
  {
    id: 'lg',
    breakpoint: '1370px'
  },
  {
    id: 'full',
    breakpoint: '1920px'
  },
  {
    id: 'doblefull',
    breakpoint: '3840px'
  }
]

const searchInObj = ( obj, key ) => obj.find( y => y.id === key).breakpoint

export const media = (x) => {
  const result = searchInObj( breakpointsDictionary, x )
  return `@media (max-width: ${result})`
}

export const totalCenter = css` 
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Grid = styled.div`
    max-width: 1100px;
    width: 100%;
    ${media('xs')}{
      width: auto;
      display: flex;
    flex-direction: column;
  }
`
// export default {
//      breakpoints: ['480px', '1024px', '1366px','1680px','1920px'],
//      fontSizes: [
//        '1em', '1,31em', '0,93em', '1,5em', '1,12em'],
//      colors: {
//        blue: '#07c',
//        lightgray: '#f6f6ff'
//      },
//      space: [
//        0, 4, 8, 16, 32, 64, 128, 256
//      ],
//      fonts: {
//      font-family: 'Open Sans', sans-serif;
//        heading: 'inherit',
//        monospace: 'Menlo, monospace',
//      },
//      fontWeights: {
//        body: 400,
//        heading: 700,
//        bold: 700,
//      },
//      lineHeights: {
//        body: 1.5,
//        heading: 1.25,
//      },
//      shadows: {
//        small: '0 0 4px rgba(0, 0, 0, .125)',
//        large: '0 0 24px rgba(0, 0, 0, .125)'
//      },
//      variants: {
//      },
//      text: {
//      },
//      buttons: {
//        primary: {
//          color: 'white',
//          bg: 'primary',
//        }
//      }
//    }