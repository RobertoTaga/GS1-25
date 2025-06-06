import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Button } from 'react-native-elements';
import { HeaderContainer, HeaderTitle } from '../components/Header';
import theme from '../styles/theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TextInput, Alert } from 'react-native';
import { saveEntry } from '../services/storage';

type RootStackParamList = {
  Input: undefined;
  Risk: { humidity: number; slope: number };
};

type InputScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Input'>;
};

const InputScreen: React.FC<InputScreenProps> = ({ navigation }) => {
  const [humidity, setHumidity] = useState('');
  const [slope, setSlope] = useState('');

  const handleSubmit = async () => {
    const humidityValue = Number(humidity);
    const slopeValue = Number(slope);

    if (isNaN(humidityValue) || isNaN(slopeValue)) {
      Alert.alert('Erro', 'Por favor, insira valores numéricos válidos.');
      return;
    }

    const entry = {
      humidity: humidityValue,
      slope: slopeValue,
      date: new Date().toISOString(),
    };

    await saveEntry(entry);

    navigation.navigate('Risk', { humidity: humidityValue, slope: slopeValue });
  };

  return (
    <Container>
      <HeaderContainer>
        <HeaderTitle>Inserir Dados</HeaderTitle>
      </HeaderContainer>

      <Content>
        <Label>Umidade do Solo (%)</Label>
        <Input
          keyboardType="numeric"
          value={humidity}
          onChangeText={setHumidity}
          placeholder="Ex: 75"
        />

        <Label>Inclinação do Terreno (°)</Label>
        <Input
          keyboardType="numeric"
          value={slope}
          onChangeText={setSlope}
          placeholder="Ex: 30"
        />

        <Button
          title="Calcular Risco"
          icon={{
            name: 'search',
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
          onPress={handleSubmit}
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
`;

const Label = styled.Text`
  font-size: ${theme.typography.body.fontSize}px;
  color: ${theme.colors.text};
  margin-bottom: 4px;
`;

const Input = styled(TextInput)`
  background-color: ${theme.colors.white};
  padding: ${theme.spacing.small}px;
  border-radius: 8px;
  margin-bottom: ${theme.spacing.medium}px;
  border: 1px solid #ccc;
`;

export default InputScreen;
