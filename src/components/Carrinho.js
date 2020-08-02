import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Paper, Divider } from '@material-ui/core';
import { useSelector } from 'react-redux';
import CarrinhoItem from './CarrinhoItem';
import { carrinhoSelector } from '../slices/carrinhoSlice';

const renderItens = (produtos) =>
  produtos
    .filter((produto) => produto.quantidadeCarrinho > 0)
    .map((produtoFiltrado) => (
      <>
        <CarrinhoItem produto={produtoFiltrado} />
        <Divider />
      </>
    ));

const Carrinho = () => {
  const { produtos } = useSelector(carrinhoSelector);

  return (
    <Container component="main">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" color="initial">
            Seu Carrinho
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper variant="outlined">{renderItens(produtos)}</Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Carrinho;
