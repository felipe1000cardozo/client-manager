import React, { useState, useEffect } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Tooltip,
} from "@material-ui/core";
import { FaSearch } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { StyledVehiclesList } from "./styles";

const ClientListComponent = ({ clientList, deleteClient }) => {
  const [search, setSearch] = useState("");
  useEffect(() => {}, []);

  return (
    <StyledVehiclesList>
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
                onChange={(e) => setSearch(e.target.value)}
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
            <h4>Excluir</h4>
          </div>
        </div>
        {clientList.map((client, index) => (
          <div className="list-item">
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
                {client.adress.street}, {client.adress.number}
              </p>
            </div>
            <div>
              <Tooltip title="Excluir veículo" placement="top">
                <button>
                  <RiDeleteBin6Line size="20" />
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
