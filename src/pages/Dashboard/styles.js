import styled from "styled-components";

export const StyledAdminPainel = styled.main`
  .container-buttons {
    display: flex;
    justify-content: space-between;
    padding: 12px 12px 0 12px;
    #background-green {
      background-color: #12a612;
      margin-right: 12px;
      padding: 12px;
      svg {
        color: #fff;
      }
    }
    .h-100 {
      height: 100%;
    }
  }
`;

export const FormContainer = styled.form`
  #container-simple-inputs {
    display: flex;
    justify-content: space-between;
    #adress-tag {
      width: 100%;
      color: rgba(0, 0, 0, 0.7);
      padding: 32px 0 0 0;
    }
    #tel-input {
      height: 51px;
    }
    > div {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    > div:nth-child(1) {
      margin-right: 24px;
    }
  }
  #dialog-footer {
    padding-top: 40px;
  }
`;
