import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import indigo from '@material-ui/core/colors/indigo';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useDispatch } from 'react-redux';
import ProdutoInfo from './ProdutoInfo';
import { addCarrinho } from '../slices/carrinhoSlice';
import { updateProduto } from '../slices/produtosSlice';

const useStyles = makeStyles({
  preco: {
    fontSize: '1.7em',
  },
  textoTitulo: {
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    lineHeight: '1em',
    maxHeight: '2em',
  },
  informacaoContainer: {
    '&:hover': {
      color: indigo[900],
    },
  },
  imagem: {
    width: '100%',
    objectFit: 'contain',
  },
  botao: {
    marginLeft: 'auto',
  },
});

const ProdutoGridItem = ({ produto }) => {
  const dispatch = useDispatch();

  const classes = useStyles();
  const [openInfo, setOpenInfo] = useState(false);

  const handleOpenInfo = () => {
    setOpenInfo(true);
  };

  const handleCloseInfo = () => {
    setOpenInfo(false);
  };

  const handleComprar = () => {
    produto = { ...produto, quantidade: produto.quantidade - 1 };
    dispatch(updateProduto(produto));
    dispatch(addCarrinho(produto));
  };

  return (
    <Grid item xs={6} sm={4}>
      <Card>
        <CardActionArea onClick={handleOpenInfo}>
          <CardMedia
            className={classes.imagem}
            component="img"
            height="220"
            image={produto.imagem}
          />
          <CardContent className={classes.informacaoContainer}>
            <p className={classes.textoTitulo}>{produto.titulo}</p>
            <Typography
              variant="subtitle2"
              component="strong"
              color="primary"
              className={classes.preco}
            >
              R$
              {produto.preco.toFixed(2)}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            disabled={produto.quantidade === 0}
            className={classes.botao}
            onClick={handleComprar}
            variant="text"
            color="default"
          >
            Comprar 
            {' '}
            <AddShoppingCartIcon />
          </Button>
        </CardActions>
      </Card>
      <ProdutoInfo
        produto={produto}
        open={openInfo}
        onClose={handleCloseInfo}
        onClick={handleComprar}
      />
    </Grid>
  );
};
export default ProdutoGridItem;
