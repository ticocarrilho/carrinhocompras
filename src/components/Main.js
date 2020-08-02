import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { useSelector, useDispatch } from 'react-redux';
import ProdutoGridItem from './ProdutoGridItem';
import { produtosSelector, fetchProdutos } from '../slices/produtosSlice';

const renderProdutos = (produtos) => produtos.map((produto) => <ProdutoGridItem produto={produto} />);

const Main = () => {
  const dispatch = useDispatch();
  const { produtos, loading } = useSelector(produtosSelector);
  useEffect(() => {
    dispatch(fetchProdutos());
  }, [dispatch]);

  return (
    <Container component="main">
      <Grid container spacing={3}>
        {loading ? <h1>Carregando...</h1> : renderProdutos(produtos)}
      </Grid>
    </Container>
  );
};
export default Main;
