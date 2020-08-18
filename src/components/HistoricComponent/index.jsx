import React from 'react';
import HistoricItemComponent from '../HistoricItemComponent';
import { StyledHistoricComponent } from './styles';

const HistoricComponent = ({ client }) => {
  return client.historic.map((item, index) => {
    return (
      <StyledHistoricComponent key={index}>
        <HistoricItemComponent item={item} index={index} />
      </StyledHistoricComponent>
    );
  });
};

export default HistoricComponent;
