import React from 'react';
import Dialog from '@material-ui/core/Dialog';
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

const ClientModalComponent = (props) => {
  const [client, setClient] = useState(clientDefault);
  const [loading, setLoading] = useState(true);

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
  }, []);

  // useEffect(() => {
  //   setClient(clientList.filter((client) => client.id === clientId)[0]);
  //   console.log(clientList.filter((client) => client.id === clientId));
  // }, []);

  return (
    <Dialog
      open={openModalClient}
      onClose={handleCloseModalClient}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Adicionar novo cliente</DialogTitle>

      <DialogContent>
        {loading ? (
          <Dialog open={openModalClient}>
            <PreLoader />
          </Dialog>
        ) : (
          <FormContainer>
            <div id="container-simple-inputs">
              <div>
                <TextField
                  label="Nome"
                  placeholder="Nome"
                  value={client.name}
                  onChange={(event) => setClient({ ...client, name: event.target.value })}
                />
                <h3 id="adress-tag">Endereço</h3>
                <TextField
                  label="Rua"
                  placeholder="Rua"
                  value={client.adress.street}
                  onChange={(event) =>
                    setClient({
                      ...client,
                      adress: { ...client.adress, street: event.target.value },
                    })
                  }
                />

                <TextField
                  label="Valor entrega"
                  placeholder="Valor entrega"
                  type="number"
                  value={client.adress.deliveryPrice}
                  onChange={(event) =>
                    setClient({
                      ...client,
                      adress: {
                        ...client.adress,
                        deliveryPrice: Number(event.target.value),
                      },
                    })
                  }
                />
              </div>

              <div>
                <TextField
                  label="Telefone"
                  placeholder="Telefone"
                  type="tel"
                  value={client.phone}
                  onChange={(event) => setClient({ ...client, phone: event.target.value })}
                />
                <span id="tel-input"></span>

                <TextField
                  label="Número"
                  placeholder="Número"
                  type="number"
                  value={client.adress.number}
                  onChange={(event) =>
                    setClient({
                      ...client,
                      adress: { ...client.adress, number: event.target.value },
                    })
                  }
                />

                <TextField
                  label="Complemento"
                  placeholder="Complemento"
                  value={client.adress.complement}
                  onChange={(event) =>
                    setClient({
                      ...client,
                      adress: { ...client.adress, complement: event.target.value },
                    })
                  }
                />
              </div>
            </div>

            <DialogActions id="dialog-footer">
              <Button
                variant="contained"
                size="small"
                color="secondary"
                onClick={handleCloseModalClient}
              >
                Cancelar
              </Button>
              <Button
                variant="contained"
                size="small"
                color="primary"
                // type="submit"
                onClick={() => console.log(client)}
              >
                Cadastrar
              </Button>
            </DialogActions>
          </FormContainer>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ClientModalComponent;
