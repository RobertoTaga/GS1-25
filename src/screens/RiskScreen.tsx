import React from 'react';
import styled from 'styled-components/native';
import { Button } from 'react-native-elements';
import { HeaderContainer, HeaderTitle } from '../components/Header';
import RiskIndicator from '../components/RiskIndicator';
import theme from '../styles/theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { calculateRisk } from '../services/riskCalculator';

type RootStackParamList = {
  Risk: { humidity: number; slope: number };
  Input: undefined;
};

type RiskScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Risk'>;
type RiskScreenRouteProp = RouteProp<RootStackParamList, 'Risk'>;

type Props = {
  navigation: RiskScreenNavigationProp;
  route: RiskScreenRouteProp;
};

const RiskScreen: React.FC<Props> = ({ navigation, route }) => {
  const { humidity, slope } = route.params;

  const riskLevel = calculateRisk(humidity, slope);

  return (
    <Container>
      <HeaderContainer>
        <HeaderTitle>Nível de Risco</HeaderTitle>
      </HeaderContainer>

      <Content>
        <DataText>Umidade: {humidity}%</DataText>
        <DataText>Inclinação: {slope}°</DataText>

        <RiskIndicator level={riskLevel} />

        <Button
          title="Voltar"
          icon={{
            name: 'arrow-left',
            type: 'font-awesome',
            size: 20,
            color: 'white',
          }}
          buttonStyle={{
            backgroundColor: theme.colors.primary,
            borderRadius: 8,
            padding: 12,
            marginTop: 24,
          }}
          onPress={() => navigation.goBack()}
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

const DataText = styled.Text`
  font-size: ${theme.typography.body.fontSize}px;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.small}px;
`;

export default RiskScreen;
