import React from 'react'

import QRCode from 'react-native-qrcode';

import { Container } from './style'

export default function Menu() {
  return (
    <Container>
      <QRCode
          value="https://google.com"
          size={200}
          bgColor='purple'
          fgColor='white'/>
    </Container>
  )
}
