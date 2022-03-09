import styled from "styled-components";
import { theme } from './theme';

export const Container = styled.div`
  background: ${props => props.background ? `var(--${props.background})` : 'var(--light-solid)'};
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  border: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  margin: 0;
  align-items: center;
  justify-content: center;
`

export const Separator = styled.hr`
  width: 50vw;
  margin: 20px 0;
  border: 1px solid ${props => props.color ? `var(--${props.color})` : 'var(--light-high)'};
  border-radius: 2px;
`

export const Heading = styled.p`
  ${props => props.type && `${theme.typography.sizes[props.type]}`}
  font-family: ${theme.typography.typeface.primary};
  color: ${props => props.color ? `var(--${props.color})` : 'var(--light-solid)'};
`

export const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  padding: 16px;
  font-size: 16px;
  cursor: pointer;
  color: ${props => props.textColor ? `var(--${props.textColor})` : '#000'};
  background: ${props => props.background ? `var(--${props.background})` : '#c1c1c1'};
  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 85%;
  }
`

export const Footer = styled.footer`
  ${theme.typography.sizes.bodyM}
  font-family: ${theme.typography.typeface.primary};
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  box-shadow: 0px -3px 15px -8px #000000;
  color: var(--magenta);

  a {
    text-decoration: none;
    margin-left: 0.5rem;
    transition: .2s ease;
    color: var(--magenta);

    &:hover {
      ${theme.typography.sizes.subHeading}
    }
  }
`

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 10%;
`
export const OptionsGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  width: 100%;

  input {
    appearance: none;
    cursor: pointer;
    width: 16px;
    height: 16px;
    margin-right: 5px;
    border: 1px solid var(--dark-high);
    border-radius: 50%;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    outline: none;
  }
  
  label {
    ${theme.typography.sizes.subHeading}
    font-family: ${theme.typography.typeface.primary};
    color: var(--dark-high);
    cursor: pointer;
  }

  input::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--magenta);
    opacity: 0;
    transition: all 0.3s ease-in-out;
    position: absolute;
  }

  input:checked::before {
    opacity: 1;
  }

  input:focus {
    box-shadow: 0 0 4px var(--magenta);
  }
`