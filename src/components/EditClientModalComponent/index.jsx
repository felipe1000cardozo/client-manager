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
import PreLoader from '../PreLoader';

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

const EditClientModalComponent = (props) => {
  const [loading, setLoading] = useState(true);
  const [client, setClient] = useState(clientDefault);

  const { openModalEditClient, handleCloseModalEditClient, clientId } = props;

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

  const firebaseClients = firebase.app.ref('clients');

  const handleSubmit = (event) => {
    event.preventDefault();
    firebaseClients.child(client.id).set(client);
    setClient(clientDefault);
    handleCloseModalEditClient();
  };

  const handleClickCancel = () => {
    setClient(clientDefault);
    handleCloseModalEditClient();
  };

  return (
    <Dialog
      open={openModalEditClient}
      onClose={handleCloseModalEditClient}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Editar cliente</DialogTitle>

      <DialogContent>
        {loading ? (
          <PreLoader />
        ) : (
          <FormContainer onSubmit={(event) => handleSubmit(event)}>
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
                  label="Bairro"
                  placeholder="Bairro"
                  value={client.adress.district}
                  onChange={(event) =>
                    setClient({
                      ...client,
                      adress: { ...client.adress, district: event.target.value },
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
                  type="text"
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
                onClick={handleClickCancel}
              >
                Cancelar
              </Button>
              <Button variant="contained" size="small" color="primary" type="submit">
                Salvar
              </Button>
            </DialogActions>
          </FormContainer>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default EditClientModalComponent;
