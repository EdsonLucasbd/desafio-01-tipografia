import Head from 'next/head'
import { useState } from 'react'
import { Container, Footer, Heading, Main, OptionsContainer, OptionsGroup, Separator, StyledButton } from "../src/styles/useExample"

export default function HomePage() {
  const [typography, setTypography] = useState('display')
  
  function handleTypographyChange(event) {
    setTypography(event.target.value)
  }

  return (
    <Container>
      <Head>
        <title>Desafio front 01</title>
      </Head>
      <Main>
        <Heading type='headingM' color='dark-high'>Tipografia</Heading>
        <OptionsContainer>
          <OptionsGroup>
            <input 
              type='radio'
              id='display' 
              value='display' 
              name='typography' 
              checked={typography==='display'}
              onChange={handleTypographyChange}
            />
            <label htmlFor='display'>Display</label>
          </OptionsGroup>
          <OptionsGroup>
            <input 
              type='radio'
              id='headingL' 
              value='headingL' 
              name='typography'
              checked={typography==='headingL'}
              onChange={handleTypographyChange}
            />
            <label htmlFor='headingL'>HeadingL</label>
          </OptionsGroup>
          <OptionsGroup>
            <input 
              type='radio'
              id='headingM' 
              value='headingM' 
              name='typography'
              checked={typography==='headingM'}
              onChange={handleTypographyChange}
            />
            <label htmlFor='headingM'>HeadingM</label>
          </OptionsGroup>
          <OptionsGroup>
            <input 
              type='radio'
              id='headingS' 
              value='headingS' 
              name='typography'
              checked={typography==='headingS'}
              onChange={handleTypographyChange}
            />
            <label htmlFor='headingS'>HeadingS</label>
          </OptionsGroup>
          <OptionsGroup>
            <input 
              type='radio'
              id='headingXS' 
              value='headingXS' 
              name='typography'
              checked={typography==='headingXS'}
              onChange={handleTypographyChange}
            />
            <label htmlFor='headingXS'>HeadingXS</label>
          </OptionsGroup>
          <OptionsGroup>
            <input 
              type='radio'
              id='subHeading' 
              value='subHeading' 
              name='typography'
              checked={typography==='subHeading'}
              onChange={handleTypographyChange}
            />
            <label htmlFor='subHeading'>SubHeading</label>
          </OptionsGroup>
          <OptionsGroup>
            <input 
              type='radio'
              id='bodyM' 
              value='bodyM' 
              name='typography'
              checked={typography==='bodyM'}
              onChange={handleTypographyChange}
            />
            <label htmlFor='bodyM'>BodyM</label>
          </OptionsGroup>
        </OptionsContainer>
        <Heading type={typography} color='magenta'>Olá, Serasa!</Heading>
        <Separator color='magenta'/>
        <StyledButton background='dark-high' textColor='light-solid'>Start</StyledButton>
      </Main>
      <Footer>
      Powered with ❤️ by{' '} <a 
        href='https://github.com/EdsonLucasbd' 
        target="_blank">
          Edson Lucas
        </a>
      </Footer>
    </Container>
  )
}