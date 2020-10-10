import React from "react";
import { Tooltip } from "@material-ui/core";
import { RiDeleteBin6Line } from "react-icons/ri";

const HistoricItemComponent = ({ index, item, handleDeleteOrder }) => {
  function createMarkup() {
    return { __html: item.order.replace(/\//g, "<br>") };
  }

  return (
    <div className="order-item-container">
      <div className="order-title">
        {`Pedido - ${index + 1}`}{" "}
        <Tooltip title="Excluir pedido" placement="top">
          <button
            onClick={(event) => {
              handleDeleteOrder(index);
            }}
          >
            <RiDeleteBin6Line size="20" />
          </button>
        </Tooltip>
      </div>

      <div className="order" dangerouslySetInnerHTML={createMarkup()} />
      <div className="order-date">{item.date}</div>
    </div>
  );
};

export default HistoricItemComponent;
