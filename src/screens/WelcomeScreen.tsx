import React from 'react';
import styled from 'styled-components/native';
import { Button } from 'react-native-elements';
import { HeaderContainer, HeaderTitle } from '../components/Header';
import theme from '../styles/theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Welcome: undefined;
  Input: undefined;
  Risk: undefined;
  History: undefined;
  Actions: undefined;
};

type WelcomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Welcome'>;
};

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  return (
    <Container>
      <HeaderContainer>
        <HeaderTitle>Monitor de Riscos</HeaderTitle>
      </HeaderContainer>

      <Content>
        <Description>
          Este aplicativo simula um sistema de monitoramento de áreas com risco de deslizamento, utilizando sensores fictícios de umidade e inclinação do solo.
        </Description>

        <Button 
          title="Iniciar Monitoramento"
          icon={{
            name: 'exclamation-triangle',
            type: 'font-awesome',
            size: 20,
            color: 'white'
          }}
          buttonStyle={{
            backgroundColor: theme.colors.primary,
            borderRadius: 8,
            padding: 12,
            marginTop: 32
          }}
          onPress={() => navigation.navigate('Input')}
        />
      </Content>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

const Content = styled.View`
  flex: 1;
  padding: ${theme.spacing.medium}px;
  justify-content: center;
  align-items: center;
`;

const Description = styled.Text`
  font-size: ${theme.typography.body.fontSize}px;
  text-align: center;
  color: ${theme.colors.text};
  opacity: 0.8;
`;

export default WelcomeScreen;
