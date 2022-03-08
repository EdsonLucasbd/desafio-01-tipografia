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
      primary: '"Roboto"',
    },
    weight: {
      bold: 700,
      regular: 400,
    },
    sizes: {
      display: css`
        font-size: 3rem;
        font-weight: 700;
        line-height: 52px;
        letter-spacing: -1.2px;

        @media(max-width: 760px) {
          font-size: 2.5rem;
          line-height: 44px;
        }
      `,
      headingL: css`
        font-size: 2.5rem;
        font-weight: 700;
        line-height: 44px;
        letter-spacing: -1px;

        @media(max-width: 760px) {
          font-size: 2rem;
          line-height: 36px;
        }
      `,
      headingM: css`
        font-size: 2rem;
        font-weight: 700;
        line-height: 36px;
        letter-spacing: -0.8px;

        @media(max-width: 760px) {
          font-size: 1.5rem;
          line-height: 28px;
        }
      `,
      headingS: css`
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 28px;
        letter-spacing: -0.6px;

        @media(max-width: 760px) {
          font-size: 1.25rem;
          line-height: 24px;
        }
      `,
      headingXS: css`
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 24px;

        @media(max-width: 760px) {
          font-size: 1.125rem;
          line-height: 22px;
        }
      `,
      subHeading: css`
        font-size: 1rem;
        font-weight: 700;
        line-height: 20px;
      `,
      bodyM: css`
        font-size: 1rem;
        font-weight: 400;
        line-height: 24px;
    `,
    }
  },
}