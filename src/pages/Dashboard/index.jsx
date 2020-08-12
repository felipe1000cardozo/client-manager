import React, { useState, Fragment } from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Tooltip, CircularProgress } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

import { GoLocation } from "react-icons/go";

import { StyledAdminPainel, FormContainer } from "./styles";
import { Link } from "react-router-dom";
import ClientListComponent from "../../components/ClientListComponent";
import clientList from "../../utils/client.json";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   firebase.app.ref("vehicles").on("value", (snapshot) => {
  //     console.log(typeof Object.values(snapshot.val()));
  //     setVehicles(Object.values(snapshot.val()));
  //     setLoading(false);
  //   });
  // }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      {loading ? (
        // <PreLoader />
        <>carregando</>
      ) : (
        <StyledAdminPainel>
          <div className="container-buttons">
            <div>
              <a
                href="https://www.google.com/maps/@-27.5532021,-48.6335036,18.04z"
                target="blank"
              >
                <Tooltip title="Google Maps" placement="left">
                  <Button
                    id="background-green"
                    variant="contained"
                    color="secondary"
                  >
                    <GoLocation size="20" />
                  </Button>
                </Tooltip>
              </a>
              <Button
                variant="contained"
                color="primary"
                onClick={handleClickOpen}
                className="h-100"
              >
                Adicionar novo cliente
              </Button>
            </div>

            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">
                Adicionar novo cliente
              </DialogTitle>

              <DialogContent>
                <FormContainer>
                  <div id="container-simple-inputs">
                    <div>
                      <TextField
                        label="Nome"
                        placeholder="Nome"
                        // value={newVehicle.model}
                      />
                      <h3 id="adress-tag">Endereço</h3>
                      <TextField
                        label="Rua"
                        placeholder="Rua"
                        // value={newVehicle.year}
                      />

                      <TextField
                        label="Bairro"
                        placeholder="Bairro"
                        // value={newVehicle.price}
                      />
                      <TextField
                        label="Valor entrega"
                        placeholder="Valor entrega"
                        type="number"
                        // value={newVehicle.power}
                      />
                    </div>

                    <div>
                      <TextField
                        label="Telefone"
                        placeholder="Telefone"
                        type="tel"
                        // value={newVehicle.year}
                      />
                      <span id="tel-input"></span>

                      <TextField
                        label="Número"
                        placeholder="Número"
                        type="number"
                        // value={newVehicle.km}
                      />

                      <TextField
                        label="Complemento"
                        placeholder="Complemento"
                        // value={newVehicle.plate}
                      />
                    </div>
                  </div>

                  <DialogActions id="dialog-footer">
                    <Button
                      variant="contained"
                      size="small"
                      color="secondary"
                      onClick={handleClose}
                    >
                      Cancelar
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      color="primary"
                      type="submit"
                      onClick={handleClose}
                    >
                      Cadastrar
                    </Button>
                  </DialogActions>
                </FormContainer>
              </DialogContent>
            </Dialog>
          </div>
          <ClientListComponent clientList={clientList} />
        </StyledAdminPainel>
      )}
    </Fragment>
  );
};

export default Dashboard;
