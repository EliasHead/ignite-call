import { Heading, Text } from '@ignite-ui/react'
import { Hero, Preview, Container } from './style'
import Image from 'next/image'

import previewImage from '../../assets/app-preview.png'
import { ClaimUsernameForm } from '@/components'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading as="h1" size="4xl">
          Agendamento descomplicado
        </Heading>
        <Text size="xl">
          Connect seu calendário e oermita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>
        <ClaimUsernameForm />
      </Hero>

      <Preview>
        <Image
          alt="Calendário simbolizando a palicação em funcionamento"
          src={previewImage}
          height={400}
          quality={100}
          priority
        />
      </Preview>
    </Container>
  )
}
