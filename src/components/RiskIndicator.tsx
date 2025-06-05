// src/components/RiskIndicator.tsx
import React from 'react';
import styled from 'styled-components/native';

interface Props {
  level: 'Baixo' | 'Médio' | 'Alto';
}

const RiskIndicator: React.FC<Props> = ({ level }) => {
  const getColor = () => {
    switch (level) {
      case 'Alto': return '#FF3B30';
      case 'Médio': return '#FFA500';
      default: return '#00C48C';
    }
  };

  return (
    <Box style={{ backgroundColor: getColor() }}>
      <Text>Nível: {level}</Text>
    </Box>
  );
};

const Box = styled.View`
  padding: 20px;
  border-radius: 12px;
  margin-top: 20px;
`;

const Text = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export default RiskIndicator;
