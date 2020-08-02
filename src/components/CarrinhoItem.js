import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Box } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { useDispatch } from 'react-redux';
import NumericInput from './NumericInput';
import {
  addCarrinho,
  removeCarrinho,
  removeAllCarrinho,
} from '../slices/carrinhoSlice';
import { updateProduto } from '../slices/produtosSlice';

const useStyles = makeStyles({
  imagem: {
    maxHeight: '11em',
  },
});

const CarrinhoItem = ({ produto }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleRemove = (produto) => {
    produto = { ...produto, quantidade: produto.quantidade + 1 };
    dispatch(updateProduto(produto));
    dispatch(removeCarrinho(produto));
  };

  const handleRemoveAll = (produto) => {
    produto = {
      ...produto,
      quantidade: produto.quantidade + produto.quantidadeCarrinho,
    };
    dispatch(updateProduto(produto));
    dispatch(removeAllCarrinho(produto));
  };

  const handleAdd = (produto) => {
    produto = {
      ...produto,
      quantidadeCarrinho: produto.quantidadeCarrinho + 1,
      quantidade: produto.quantidade - 1,
    };
    dispatch(updateProduto(produto));
    dispatch(addCarrinho(produto));
  };

  return (
    <Box p={1}>
      <Grid container item xs={12}>
        <Grid item xs={12} sm={12} md={2}>
          <img
            className={classes.imagem}
            src={produto.imagem}
            alt={produto.titulo}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} direction="column" container>
          <Typography variant="h6" color="initial">
            {produto.titulo}
          </Typography>
        </Grid>
        <Grid container direction="row" item xs={12} sm={12} md={4}>
          <Grid item xs={4} sm={3} md={5}>
            <Typography variant="h5" color="initial">
              R$
              {(produto.preco * produto.quantidadeCarrinho).toFixed(2)}
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4} md={5}>
            <NumericInput
              handleRemove={() => handleRemove(produto)}
              handleAdd={() => handleAdd(produto)}
              quantidadeCarrinho={produto.quantidadeCarrinho}
              quantidade={produto.quantidade}
            />
          </Grid>
          <Grid item xs={2} sm={2} md={2}>
            <Button
              onClick={() => handleRemoveAll(produto)}
              variant="outlined"
              color="secondary"
            >
              <DeleteForeverIcon />
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
export default CarrinhoItem;
