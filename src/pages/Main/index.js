import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Header from '~/components/Header'
import Tabs from '~/components/Tabs'
import Menu from '~/components/Menu'
import { Container, Content, Card, CartHeader, CardContent, CardFooter, Title, Description, Annotation } from './styles';

export default function Main() {
  return (
    <Container>
      <Header />
      <Content>
        <Menu />

        <Card>
          <CartHeader>
            <Icon  name="attach-money" size={28} color="#666" />
            <Icon  name="visibility-off" size={28} color="#666" />
          </CartHeader>
          <CardContent>
            <Title>Saldo disponível</Title>
            <Description>R$ 197.611,65</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Rendimentos da super carteira de ações na Rico e na Clear
            </Annotation>
          </CardFooter>
        </Card>
      </Content>
      <Tabs />
    </Container>
  )
}
