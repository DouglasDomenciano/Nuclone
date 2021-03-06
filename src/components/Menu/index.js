import React from 'react'
import logo from '~/assets/qrcode.png'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Container, Code, QRCode, Nav, NavItem, NavText,SignOutButton, SignOutButtonText } from './style'

export default function Menu({ translateY }) {
  return (
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0,150],
        outputRange: [0,1]
      })
    }}>
      <Code>
        <QRCode source={logo} />
      </Code>
      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#FFF" />
          <NavText>Me Ajuda</NavText>
        </NavItem>
        <NavItem>
          <Icon name="person-outline" size={20} color="#FFF" />
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <Icon name="credit-card" size={20} color="#FFF" />
          <NavText>Configurar NuConta</NavText>
        </NavItem>
        <NavItem>
          <Icon name="smartphone" size={20} color="#FFF" />
          <NavText>Configurações do app</NavText>
        </NavItem>
      </Nav>

      <SignOutButton onPress={()=>{}}>
        <SignOutButtonText>Logout</SignOutButtonText>
      </SignOutButton>

    </Container>
  )
}
