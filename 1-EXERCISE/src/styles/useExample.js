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