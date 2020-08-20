import React from 'react';
import HistoricItemComponent from '../HistoricItemComponent';
import { StyledHistoricComponent } from './styles';

const HistoricComponent = ({ client, handleDeleteOrder }) => {
  return (
    <StyledHistoricComponent>
      {client.historic.map((item, index) => (
        <HistoricItemComponent
          item={item}
          index={index}
          key={index}
          handleDeleteOrder={handleDeleteOrder}
        />
      ))}
    </StyledHistoricComponent>
  );
};

export default HistoricComponent;
