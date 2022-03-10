import Head from 'next/head'
import { useState } from 'react'
import { Container, DemoPhraseInput, Footer, Heading, Main, OptionsContainer, OptionsGroup, Separator, StyledButton, StyledRadio } from "../src/styles/useExample"

export default function HomePage() {
  const [typography, setTypography] = useState('display')
  const [demoText, setDemoText] = useState('Olá, Serasa!')
  const [color, setColor] = useState('magenta')

  function handleTypographyChange(event) {
    setTypography(event.target.value)
  }

  function handleTextChange(event) {
    setDemoText(event.target.value)
  }

  function handleColorChange(event) {
    setColor(event.target.value)
  }

  return (
    <Container>
      <Head>
        <title>Desafio front 01</title>
      </Head>
      <Main>
        <Heading type='display' color='dark-high'>Tipografia</Heading>
        <Separator color='magenta' />
        <OptionsContainer>
          <Heading type='headingM' color='dark-high'>Tamanhos de texto</Heading>
          <OptionsGroup>
            <StyledRadio
              type='radio'
              id='display'
              value='display'
              name='typography'
              checked={typography === 'display'}
              onChange={handleTypographyChange}
            />
            <label htmlFor='display'>Display</label>
          </OptionsGroup>
          <OptionsGroup>
            <StyledRadio
              type='radio'
              id='headingL'
              value='headingL'
              name='typography'
              checked={typography === 'headingL'}
              onChange={handleTypographyChange}
            />
            <label htmlFor='headingL'>HeadingL</label>
          </OptionsGroup>
          <OptionsGroup>
            <StyledRadio
              type='radio'
              id='headingM'
              value='headingM'
              name='typography'
              checked={typography === 'headingM'}
              onChange={handleTypographyChange}
            />
            <label htmlFor='headingM'>HeadingM</label>
          </OptionsGroup>
          <OptionsGroup>
            <StyledRadio
              type='radio'
              id='headingS'
              value='headingS'
              name='typography'
              checked={typography === 'headingS'}
              onChange={handleTypographyChange}
            />
            <label htmlFor='headingS'>HeadingS</label>
          </OptionsGroup>
          <OptionsGroup>
            <StyledRadio
              type='radio'
              id='headingXS'
              value='headingXS'
              name='typography'
              checked={typography === 'headingXS'}
              onChange={handleTypographyChange}
            />
            <label htmlFor='headingXS'>HeadingXS</label>
          </OptionsGroup>
          <OptionsGroup>
            <StyledRadio
              type='radio'
              id='subHeading'
              value='subHeading'
              name='typography'
              checked={typography === 'subHeading'}
              onChange={handleTypographyChange}
            />
            <label htmlFor='subHeading'>SubHeading</label>
          </OptionsGroup>
          <OptionsGroup>
            <StyledRadio
              type='radio'
              id='bodyM'
              value='bodyM'
              name='typography'
              checked={typography === 'bodyM'}
              onChange={handleTypographyChange}
            />
            <label htmlFor='bodyM'>BodyM</label>
          </OptionsGroup>
        </OptionsContainer>
        <OptionsContainer>
          <Heading type='headingM' color='dark-high'>Cores</Heading>
          <OptionsGroup>
            <StyledRadio
              type='radio'
              id='darkHigh'
              value='dark-high'
              name='colors'
              checked={color === 'dark-high'}
              onChange={handleColorChange}
            />
            <label htmlFor='darkHigh'>Dark high</label>
          </OptionsGroup>
          <OptionsGroup>
            <StyledRadio
              type='radio'
              id='darkMedium'
              value='dark-medium'
              name='colors'
              checked={color === 'dark-medium'}
              onChange={handleColorChange}
            />
            <label htmlFor='darkMedium'>Dark medium</label>
          </OptionsGroup>
          <OptionsGroup>
            <StyledRadio
              type='radio'
              id='darkLow'
              value='dark-low'
              name='colors'
              checked={color === 'dark-low'}
              onChange={handleColorChange}
            />
            <label htmlFor='darkLow'>Dark low</label>
          </OptionsGroup>
          <OptionsGroup>
            <StyledRadio
              type='radio'
              id='lightHigh'
              value='light-high'
              name='colors'
              checked={color === 'light-high'}
              onChange={handleColorChange}
            />
            <label htmlFor='lightHigh'>Light high</label>
          </OptionsGroup>
          <OptionsGroup>
            <StyledRadio
              type='radio'
              id='lightSolid'
              value='light-solid'
              name='colors'
              checked={color === 'light-solid'}
              onChange={handleColorChange}
            />
            <label htmlFor='lightSolid'>Light solid</label>
          </OptionsGroup>
          <OptionsGroup>
            <StyledRadio
              type='radio'
              id='magenta'
              value='magenta'
              name='colors'
              checked={color === 'magenta'}
              onChange={handleColorChange}
            />
            <label htmlFor='magenta'>Magenta</label>
          </OptionsGroup>
          <DemoPhraseInput
            type="text"
            name="demoPhrase"
            placeholder='Altere o texto'
            onChange={handleTextChange}
          />
        </OptionsContainer>
        <Separator color='magenta' />
        <Heading type={typography} color={color}>{demoText}</Heading>
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