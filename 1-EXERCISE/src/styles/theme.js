import { css } from 'styled-components';
import { GlobalStyles } from '../styles/globals';

export const theme = {
  TextColors: {
    // Monochrome
    darkHigh: 'rgba(0,0,0,0.80)',
    darkLow: 'rgba(0,0,0,0.44)',
    darkMedium: 'rgba(0,0,0,0.60)',
    lightHigh: 'rgba(255,255,255,0.80)',
    lightSolid: '#FFF',
  
    // acent color
    magenta: '#E63888', 
  },
  
  typography: {
    typeface: {
      primary: 'Roboto',
    },
    weight: {
      bold: 700,
      regular: 400,
    },
    sizes: {
      display: css`
        font-size: 3rem;
        font-weight: 700;
        line-height: 3.25rem;
        letter-spacing: -0.075rem;

        @media(max-width: 760px) {
          font-size: 2.5rem;
          line-height: 2.75rem;
        }
      `,
      headingL: css`
        font-size: 2.5rem;
        font-weight: 700;
        line-height: 2.75rem;
        letter-spacing: -0.063rem;

        @media(max-width: 760px) {
          font-size: 2rem;
          line-height: 2.25rem;
        }
      `,
      headingM: css`
        font-size: 2rem;
        font-weight: 700;
        line-height: 2.25rem;
        letter-spacing: -0.05rem;

        @media(max-width: 760px) {
          font-size: 1.5rem;
          line-height: 1.75rem;
        }
      `,
      headingS: css`
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1.75rem;
        letter-spacing: -0.038rem;

        @media(max-width: 760px) {
          font-size: 1.25rem;
          line-height: 1.5rem;
        }
      `,
      headingXS: css`
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1.5rem;

        @media(max-width: 760px) {
          font-size: 1.125rem;
          line-height: 1.375rem;
        }
      `,
      subHeading: css`
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.25rem;
      `,
      bodyM: css`
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5rem;
    `,
    }
  },
}