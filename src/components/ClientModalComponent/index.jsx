import React from 'react';
// import Dialog from '@material-ui/core/Dialog';
import Dialog from './styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import { FormContainer } from '../../pages/Dashboard/styles';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import { Button } from '@material-ui/core';
import { useState } from 'react';
import { useEffect } from 'react';
import PreLoader from '../PreLoader';

import firebase from '../../firebase';
import getFullDate from '../../utils/getFullDate';
import HistoricComponent from '../HistoricComponent';

const clientDefault = {
  id: '',
  name: '',
  phone: '',
  adress: {
    street: '',
    number: '',
    district: '',
    complement: '',
    deliveryPrice: 0,
  },
};
const newOrderDefault = {
  order: '',
  date: '',
};

const ClientModalComponent = (props) => {
  const [client, setClient] = useState(clientDefault);
  const [loading, setLoading] = useState(true);

  const [newOrder, setNewOrder] = useState(newOrderDefault);

  const { openModalClient, handleCloseModalClient, clientId } = props;

  useEffect(() => {
    firebase.app
      .ref('clients')
      .child(clientId)
      .on('value', (snapshot) => {
        if (snapshot.val()) {
          setClient(snapshot.val());
        }
        setLoading(false);
      });
    // eslint-disable-next-line
  }, []);

  // useEffect(() => {
  //   setClient(clientList.filter((client) => client.id === clientId)[0]);
  //   console.log(clientList.filter((client) => client.id === clientId));
  // }, []);

  const handleSubmitOrder = (event) => {
    event.preventDefault();
    if (!client.historic) {
      firebase.app.ref('clients').child(clientId).child('historic').set([newOrder]);
    } else {
      firebase.app
        .ref('clients')
        .child(clientId)
        .child('historic')
        .set([...client.historic, newOrder]);
    }
    setNewOrder(newOrderDefault);
  };

  const handleDeleteOrder = (index) => {
    let list = JSON.parse(JSON.stringify(client.historic));

    list.splice(index, 1);
    firebase.app.ref('clients').child(clientId).child('historic').set(list);
  };

  const handleOnChange = (event) => {
    const now = new Date();
    setNewOrder({ date: getFullDate(now), order: event.target.value });
  };

  return (
    <Dialog
      open={openModalClient}
      onClose={handleCloseModalClient}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">
        <span>{client.name}</span>
        <span>{client.phone}</span>
      </DialogTitle>

      <DialogContent>
        {loading ? (
          <Dialog open={openModalClient}>
            <PreLoader />
          </Dialog>
        ) : (
          <>
            <div id="Modal-body">
              <div className="row-modal">
                <span className="adress-row">{`${client.adress.street}${
                  client.adress.street && client.adress.number && ','
                } ${client.adress.number}`}</span>
                <span className="adress-row">{`${client.adress.district}${
                  client.adress.district && client.adress.complement && ','
                } ${client.adress.complement}`}</span>
                <span className="adress-row">
                  Entrega: R$ {client.adress.deliveryPrice.toFixed(2)}
                </span>
              </div>
              <div className="row-modal">
                <FormContainer
                  onSubmit={(event) => {
                    handleSubmitOrder(event);
                  }}
                >
                  <TextField
                    id="outlined-multiline-static"
                    label="Novo Pedido"
                    multiline
                    rows={4}
                    value={newOrder.order}
                    onChange={(event) => handleOnChange(event)}
                    variant="outlined"
                    fullWidth
                  />
                  <Button variant="contained" size="small" color="primary" type="submit">
                    Adicionar Pedido
                  </Button>
                </FormContainer>
              </div>
              {client.historic && (
                <HistoricComponent
                  className="row-modal"
                  client={client}
                  handleDeleteOrder={handleDeleteOrder}
                />
              )}
            </div>

            <DialogActions id="dialog-footer">
              <Button
                variant="contained"
                size="small"
                color="secondary"
                onClick={handleCloseModalClient}
              >
                Sair
              </Button>
            </DialogActions>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ClientModalComponent;
