import React from 'react';
const HistoricItemComponent = ({ index, item }) => {
  function createMarkup() {
    return { __html: item.order.replace(/\//g, '<br>') };
  }
  return (
    <div className="order-item-container">
      <div className="order-title">{`Pedido - ${index + 1}`}</div>

      <div className="order" dangerouslySetInnerHTML={createMarkup()} />
      <div className="order-date">{item.date}</div>
    </div>
  );
};

export default HistoricItemComponent;
