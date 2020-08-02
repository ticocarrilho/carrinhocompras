import React from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 8.2em;
  border-radius: 25px;
  border: 1px solid #f7f7f7;
`;

const Quantity = styled.div`
  padding: 0.8em;
`;

const NumericInput = ({
  quantidadeCarrinho,
  quantidade,
  handleAdd,
  handleRemove,
}) => (
  <Container>
    <IconButton onClick={handleRemove}>
      <RemoveIcon />
    </IconButton>
    <Quantity>{quantidadeCarrinho}</Quantity>
    <IconButton
      onClick={handleAdd}
      disabled={quantidade === 0}
    >
      <AddIcon />
    </IconButton>
  </Container>
  );
export default NumericInput;
