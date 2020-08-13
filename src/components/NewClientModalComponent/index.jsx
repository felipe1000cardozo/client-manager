import React, { useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import { FormContainer } from '../../pages/Dashboard/styles';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import { Button } from '@material-ui/core';
import { useState } from 'react';

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
    deliveryPrice: 3,
  },
};

const NewClientModalComponent = (props) => {
  const [newClient, setNewClient] = useState(clientDefault);

  const { open, handleClose } = props;

  const firebaseClients = firebase.app.ref('clients');

  useEffect(() => {
    const newClientKey = firebaseClients.push().key;
    setNewClient((n) => {
      return { ...n, id: newClientKey };
    });
  }, [open]);

  const handleSubmit = (event) => {
    event.preventDefault();
    firebaseClients.child(newClient.id).set(newClient);
  };

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Adicionar novo cliente</DialogTitle>

      <DialogContent>
        <FormContainer onSubmit={(event) => handleSubmit(event)}>
          <div id="container-simple-inputs">
            <div>
              <TextField
                label="Nome"
                placeholder="Nome"
                value={newClient.name}
                onChange={(event) => setNewClient({ ...newClient, name: event.target.value })}
              />
              <h3 id="adress-tag">Endereço</h3>
              <TextField
                label="Rua"
                placeholder="Rua"
                value={newClient.adress.street}
                onChange={(event) =>
                  setNewClient({
                    ...newClient,
                    adress: { ...newClient.adress, street: event.target.value },
                  })
                }
              />

              <TextField
                label="Bairro"
                placeholder="Bairro"
                value={newClient.adress.district}
                onChange={(event) =>
                  setNewClient({
                    ...newClient,
                    adress: { ...newClient.adress, district: event.target.value },
                  })
                }
              />
              <TextField
                label="Valor entrega"
                placeholder="Valor entrega"
                type="number"
                value={newClient.adress.deliveryPrice}
                onChange={(event) =>
                  setNewClient({
                    ...newClient,
                    adress: {
                      ...newClient.adress,
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
                value={newClient.phone}
                onChange={(event) => setNewClient({ ...newClient, phone: event.target.value })}
              />
              <span id="tel-input"></span>

              <TextField
                label="Número"
                placeholder="Número"
                type="number"
                value={newClient.adress.number}
                onChange={(event) =>
                  setNewClient({
                    ...newClient,
                    adress: { ...newClient.adress, number: event.target.value },
                  })
                }
              />

              <TextField
                label="Complemento"
                placeholder="Complemento"
                value={newClient.adress.complement}
                onChange={(event) =>
                  setNewClient({
                    ...newClient,
                    adress: { ...newClient.adress, complement: event.target.value },
                  })
                }
              />
            </div>
          </div>

          <DialogActions id="dialog-footer">
            <Button variant="contained" size="small" color="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button
              variant="contained"
              size="small"
              color="primary"
              type="submit"
              onClick={() => handleClose()}
            >
              Cadastrar
            </Button>
          </DialogActions>
        </FormContainer>
      </DialogContent>
    </Dialog>
  );
};

export default NewClientModalComponent;
