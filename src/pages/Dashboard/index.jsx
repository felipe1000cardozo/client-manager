import React, { useState, Fragment, useEffect } from 'react';

import Button from '@material-ui/core/Button';

import ClientListComponent from '../../components/ClientListComponent';
// import clientList from '../../utils/client.json';
import NewClientModalComponent from '../../components/NewClientModalComponent';

import firebase from '../../firebase';
import { StyledAdminPainel } from './styles';
import { Tooltip } from '@material-ui/core';

import { GoLocation } from 'react-icons/go';

import PreLoader from '../../components/PreLoader';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [clientList, setClientList] = useState([]);

  useEffect(() => {
    firebase.app.ref('clients').on('value', (snapshot) => {
      if (snapshot.val()) {
        setClientList(Object.values(snapshot.val()));
      } else {
        setClientList([]);
      }
      setLoading(false);
    });
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <StyledAdminPainel>
        <div className="container-buttons">
          <div>
            <a href="https://www.google.com/maps/@-27.5532021,-48.6335036,18.04z" target="blank">
              <Tooltip title="Google Maps" placement="left">
                <Button id="background-green" variant="contained" color="secondary">
                  <GoLocation size="20" />
                </Button>
              </Tooltip>
            </a>
            <Button variant="contained" color="primary" onClick={handleClickOpen} className="h-100">
              Adicionar novo cliente
            </Button>
          </div>

          <NewClientModalComponent open={open} handleClose={handleClose} />
        </div>
        {loading ? <PreLoader /> : <ClientListComponent clientList={clientList} />}
      </StyledAdminPainel>
    </Fragment>
  );
};

export default Dashboard;
