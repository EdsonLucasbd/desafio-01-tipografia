import Head from 'next/head'
import { Container, Heading, Separator, StyledButton } from "../src/styles/useExample"

export default function HomePage() {
  return (
    <Container>
      <Head>
        <title>Desafio front 01</title>
      </Head>
      <Heading type='display' color='magenta'>Olá, Serasa!</Heading>
      <Separator color='magenta'/>
      <StyledButton background='dark-high' textColor='light-solid'>Start</StyledButton>
    </Container>
  )
}