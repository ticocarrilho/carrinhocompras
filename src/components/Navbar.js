import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { carrinhoSelector } from '../slices/carrinhoSlice';

const useStyles = makeStyles({
  root: {
    background:
      'linear-gradient(141deg, #0b8286 0%, #188eac 71%, #1686c8 100%)',
  },
  flex: {
    flex: 1,
  },
  logo: {
    color: 'white',
    textDecoration: 'none',
  },
});

const IconBadge = ({ children }) => {
  const { totalCarrinho } = useSelector(carrinhoSelector);

  return (
    <Badge
      badgeContent={totalCarrinho}
      color="secondary"
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
    >
      {children}
    </Badge>
  );
};

const Navbar = () => {
  const classes = useStyles();

  return (
    <header>
      <AppBar className={classes.root} position="sticky" color="primary">
        <Toolbar>
          <Typography className={classes.flex} variant="h6">
            <Link className={classes.logo} to="/">
              FoodsGo
            </Link>
          </Typography>
          <Link className={classes.logo} to="/carrinho">
            <IconBadge>
              <IconButton size="small" color="inherit">
                <ShoppingCart />
              </IconButton>
            </IconBadge>
          </Link>
        </Toolbar>
      </AppBar>
    </header>
  );
};
export default Navbar;
