import React, { useState, useEffect } from 'react';

import { FormControl, InputLabel, Input, InputAdornment, Tooltip } from '@material-ui/core';
import { FaSearch } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { GrEdit } from 'react-icons/gr';
import { StyledVehiclesList } from './styles';

import ClientModalComponent from '../ClientModalComponent';
import firebase from '../../firebase';
import EditClientModalComponent from '../EditClientModalComponent';

const ClientListComponent = ({ clientList }) => {
  const [search, setSearch] = useState('');
  const [openModalClient, setOpenModalClient] = useState(false);
  const [openModalEditClient, setOpenModalEditClient] = useState(false);
  const [clientId, setClientId] = useState('');
  const [filteredClientList, setFilteredClientList] = useState(clientList);

  const handleFilter = (event) => {
    setSearch(event.target.value);
    setFilteredClientList(
      clientList.filter((client) => {
        return (
          client.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
          client.phone.toLowerCase().includes(event.target.value.toLowerCase())
        );
      })
    );
  };

  useEffect(() => {
    setFilteredClientList(clientList);
  }, [clientList]);

  const handleCloseModalClient = () => {
    setOpenModalClient(false);
    setClientId('');
  };

  const handleCloseModalEditClient = () => {
    setOpenModalEditClient(false);
    setClientId('');
  };

  const handleOpenModalClient = (id) => {
    setClientId(id);
    setOpenModalClient(true);
  };

  const handleOpenModalEditClient = (id) => {
    setClientId(id);
    setOpenModalEditClient(true);
  };

  const handleDeleteClient = (id) => {
    window.confirm('Excluir Cliente?') && firebase.app.ref('clients').child(id).remove();
  };

  return (
    <StyledVehiclesList>
      {openModalClient && (
        <ClientModalComponent
          clientId={clientId}
          openModalClient={openModalClient}
          handleCloseModalClient={handleCloseModalClient}
        />
      )}

      {openModalEditClient && (
        <EditClientModalComponent
          clientId={clientId}
          openModalEditClient={openModalEditClient}
          handleCloseModalEditClient={handleCloseModalEditClient}
        />
      )}

      <div className="header">
        <div>
          <h2>Clientes</h2>
        </div>
        <div>
          <FormControl className="search-container">
            <div>
              <InputLabel htmlFor="standard-adornment">Pesquisar</InputLabel>
              <Input
                id="standard-adornment"
                type="text"
                value={search}
                onChange={(e) => handleFilter(e)}
                endAdornment={
                  <InputAdornment position="end">
                    <FaSearch color="#737373" />
                  </InputAdornment>
                }
              />
            </div>
          </FormControl>
        </div>
      </div>
      <div>
        <div className="header-list">
          <div>
            <h4>#</h4>
          </div>
          <div>
            <h4>Nome</h4>
          </div>
          <div>
            <h4>Número</h4>
          </div>
          <div>
            <h4>Endereço</h4>
          </div>
          <div>
            <h4>Ações</h4>
          </div>
        </div>
        {filteredClientList.map((client, index) => (
          <div className="list-item" key={index} onClick={() => handleOpenModalClient(client.id)}>
            <div>
              <p>{index + 1}</p>
            </div>
            <div>
              <p>{client.name}</p>
            </div>
            <div>
              <p>{client.phone}</p>
            </div>
            <div>
              <p>
                {client.adress.street}
                {client.adress.street && client.adress.number && ','} {client.adress.number}
              </p>
            </div>
            <div>
              <Tooltip title="Excluir cliente" placement="top">
                <button
                  onClick={(event) => {
                    event.stopPropagation();
                    handleDeleteClient(client.id);
                  }}
                >
                  <RiDeleteBin6Line className="delete-icon" size="20" />
                </button>
              </Tooltip>
              <Tooltip title="Editar cliente" placement="top">
                <button
                  onClick={(event) => {
                    event.stopPropagation();
                    handleOpenModalEditClient(client.id);
                  }}
                >
                  <GrEdit size="20" />
                </button>
              </Tooltip>
            </div>
          </div>
        ))}
      </div>
    </StyledVehiclesList>
  );
};

export default ClientListComponent;
