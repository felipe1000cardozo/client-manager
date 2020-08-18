import styled from 'styled-components';
import Dialog from '@material-ui/core/Dialog';

export default styled(Dialog)`
  && {
    .MuiDialogTitle-root h2 {
      display: flex;
      justify-content: space-between;
      min-width: 530px;
    }
    .row-modal {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      margin: 30px 0;
    }
    .row-modal .adress-row {
      font-size: 19px;
      width: 100%;
      padding-bottom: 6px;
    }
    form {
      width: 100%;
      text-align: end;
      button {
        margin-top: 6px;
      }
    }
  }
`;
