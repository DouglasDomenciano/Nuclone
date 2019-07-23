import React from 'react'
import logo from '~/assets/Nubank_Logo.png'
import QRCode from "react-native-qrcode";
import { Container, Code } from './style'

export default function Menu() {
  return (
    <Container>
      <Code>
        <QRCode source={logo} />
      </Code>
    </Container>
  )
}
