import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { loadHistory } from '../services/storage';
import { HeaderContainer, HeaderTitle } from '../components/Header';
import theme from '../styles/theme';
import { calculateRisk } from '../services/riskCalculator';

interface HistoryEntry {
  humidity: number;
  slope: number;
  date: string;
}

const HistoryScreen: React.FC = () => {
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const data = await loadHistory();
      setHistory(data);
    };
    fetchHistory();
  }, []);

  return (
    <Container>
      <HeaderContainer>
        <HeaderTitle>Histórico</HeaderTitle>
      </HeaderContainer>

      <Content>
        <FlatList
          data={history}
          keyExtractor={(_, index) => index.toString()}
          ListEmptyComponent={<EmptyText>Sem registros ainda.</EmptyText>}
          renderItem={({ item }) => (
            <ItemCard>
              <InfoText>📅 {new Date(item.date).toLocaleString()}</InfoText>
              <InfoText>💧 Umidade: {item.humidity}%</InfoText>
              <InfoText>⛰️ Inclinação: {item.slope}°</InfoText>
              <RiskText>Nível de Risco: {calculateRisk(item.humidity, item.slope)}</RiskText>
            </ItemCard>
          )}
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

const ItemCard = styled.View`
  background-color: ${theme.colors.white};
  border-radius: 8px;
  padding: ${theme.spacing.medium}px;
  margin-bottom: ${theme.spacing.medium}px;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 2;
`;

const InfoText = styled.Text`
  font-size: ${theme.typography.body.fontSize}px;
  color: ${theme.colors.text};
  margin-bottom: 4px;
`;

const RiskText = styled(InfoText)`
  font-weight: bold;
  color: ${theme.colors.primary};
`;

const EmptyText = styled.Text`
  text-align: center;
  margin-top: ${theme.spacing.large}px;
  font-size: ${theme.typography.body.fontSize}px;
  color: ${theme.colors.text};
  opacity: 0.6;
`;

export default HistoryScreen;
