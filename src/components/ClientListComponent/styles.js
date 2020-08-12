import styled from "styled-components";

export const StyledVehiclesList = styled.main`
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    h2 {
      font-weight: 400;
    }
    > div {
      width: fit-content;
    }
  }
  .header-list {
    display: flex;
    justify-content: space-between;
    padding: 12px;
    > div {
      text-align: center;
      width: 22%;
    }
    div:nth-child(1) {
      width: 5%;
    }
  }
  .list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #ccc;
    padding: 14px;
    cursor: pointer;
    transition: background-color 0.5s;
    > div {
      text-align: center;
      width: 22%;

      button {
        border: none;
        background-color: inherit;
        margin: 0 6px;
        &:hover {
          opacity: 0.6;
        }
      }
    }
    div:nth-child(1) {
      width: 5%;
    }
    &:hover {
      background-color: #ccc;
    }
  }
`;
