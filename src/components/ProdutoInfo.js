import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import { Typography, Box } from '@material-ui/core';

const ProdutoInfo = ({
 produto, open, onClose, onClick 
}) => {

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="">
      <DialogTitle id="">{produto.titulo}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Box mb={1}>
            <Typography variant="h5" color="primary">
              Marca: 
              {produto.marca}
            </Typography>
            <Typography variant="h5" color="primary">
              Memória: 
              {produto.memoria}
            </Typography>
            <Typography variant="h5" color="primary">
              Tipo de Chip: 
              {produto.chip}
            </Typography>
            <Typography variant="h5" color="primary">
              Preço: R$ 
              {produto.preco}
            </Typography>
            <Divider light />
          </Box>
          {produto.descricao}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button disabled={produto.quantidade === 0} onClick={onClick} color="default">
          Comprar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default ProdutoInfo;
