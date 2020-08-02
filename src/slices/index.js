import { combineReducers } from 'redux';
import produtosReducer from './produtosSlice';
import carrinhoRuducer from './carrinhoSlice';

const rootReducer = combineReducers({
  produtos: produtosReducer,
  carrinho: carrinhoRuducer,
});

export default rootReducer;
