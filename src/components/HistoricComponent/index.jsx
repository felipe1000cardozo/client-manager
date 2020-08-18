import React from 'react';
import HistoricItemComponent from '../HistoricItemComponent';
import { StyledHistoricComponent } from './styles';

const HistoricComponent = ({ client }) => {
  return (
    <StyledHistoricComponent>
      {client.historic.map((item, index) => (
        <HistoricItemComponent item={item} index={index} key={index} />
      ))}
    </StyledHistoricComponent>
  );
};

export default HistoricComponent;
