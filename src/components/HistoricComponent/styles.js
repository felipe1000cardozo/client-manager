import styled from 'styled-components';

export const StyledHistoricComponent = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 12px;
  margin-bottom: 6px;
  .order-item-container {
    display: flex;
    flex-direction: column;
    .order-title {
      font-weight: bold;
      font-size: 16px;
      color: #555;
    }
    .order {
      padding: 6px 0px 6px 12px;
    }
    .order-date {
      font-size: 11px;
      color: #777;
    }
  }
`;
