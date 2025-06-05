import React from 'react';
import styled from 'styled-components/native';
import { Button } from 'react-native-elements';
import { HeaderContainer, HeaderTitle } from '../components/Header';
import theme from '../styles/theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Actions: undefined;
  Input: undefined;
};

type ActionsScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Actions'>;
};

const ActionsScreen: React.FC<ActionsScreenProps> = ({ navigation }) => {
  return (
    <Container>
      <HeaderContainer>
        <HeaderTitle>Ações de Mitigação</HeaderTitle>
      </HeaderContainer>

      <Content>
        <Button
          title="Voltar"
          icon={{
            name: 'arrow-left',
            type: 'font-awesome',
            size: 20,
            color: 'white'
          }}
          buttonStyle={{
            backgroundColor: theme.colors.primary,
            borderRadius: 8,
            padding: 12,
            marginBottom: 20
          }}
          onPress={() => navigation.goBack()}
        />

        <ActionsList>
          <ActionCard>
            <ActionTitle>🌧️ Melhorar Drenagem</ActionTitle>
            <ActionText>
              Instalar sistemas de escoamento para evitar acúmulo de água no solo.
            </ActionText>
          </ActionCard>

          <ActionCard>
            <ActionTitle>🧱 Construir Barreiras</ActionTitle>
            <ActionText>
              Utilizar barreiras físicas (muros de arrimo) para conter encostas.
            </ActionText>
          </ActionCard>

          <ActionCard>
            <ActionTitle>🚨 Monitoramento Contínuo</ActionTitle>
            <ActionText>
              Utilizar sensores e vistorias frequentes em áreas de risco.
            </ActionText>
          </ActionCard>

          <ActionCard>
            <ActionTitle>📢 Alertar Comunidade</ActionTitle>
            <ActionText>
              Implementar planos de evacuação e sistemas de alerta em tempo real.
            </ActionText>
          </ActionCard>
        </ActionsList>
      </Content>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.background};
`;

const Content = styled.ScrollView`
  flex: 1;
  padding: ${theme.spacing.medium}px;
`;

const ActionsList = styled.View`
  margin-top: ${theme.spacing.medium}px;
`;

const ActionCard = styled.View`
  background-color: ${theme.colors.white};
  border-radius: 8px;
  padding: ${theme.spacing.medium}px;
  margin-bottom: ${theme.spacing.medium}px;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 2;
`;

const ActionTitle = styled.Text`
  font-size: ${theme.typography.subtitle.fontSize}px;
  font-weight: ${theme.typography.subtitle.fontWeight};
  color: ${theme.colors.primary};
  margin-bottom: 8px;
`;

const ActionText = styled.Text`
  font-size: ${theme.typography.body.fontSize}px;
  color: ${theme.colors.text};
  opacity: 0.9;
`;

export default ActionsScreen;
