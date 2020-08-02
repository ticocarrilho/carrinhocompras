import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  produtos: [],
  totalCarrinho: 0,
};

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    addCarrinho: (state, { payload }) => {
      // verifica se o produto já está no carrinho
      const produtoCarrinho = state.produtos.findIndex(
        (produto) => produto.id === payload.id,
      );
      // se o produto não estiver no carrinho ele será adicionado
      if (produtoCarrinho === -1) {
        state.produtos.push({ ...payload, quantidadeCarrinho: 1 });
      }
      // se o produto já estiver no carrinho acrescenta 1 quantidade
      else {
        state.produtos = state.produtos.map((produto, index) => {
          if (index === produtoCarrinho) {
            return {
              ...produto,
              quantidade: payload.quantidade,
              quantidadeCarrinho: produto.quantidadeCarrinho + 1,
            };
          }
          return produto;
        });
      }
      state.totalCarrinho += 1;
    },
    removeCarrinho: (state, { payload }) => {
      // verifica a quantidade no carrinho, se só tiver 1 no carrinho remove o produto
      if (payload.quantidadeCarrinho <= 1) {
        state.produtos = state.produtos.filter(
          (produto) => produto.id !== payload.id,
        );
      }
      // se tiver mais de 1 no carrinho irá diminuir 1 quantidade do carrinho
      else {
        state.produtos = state.produtos.map((produto) => {
          if (produto.id === payload.id) {
            return {
              ...payload,
              quantidadeCarrinho: produto.quantidadeCarrinho - 1,
            };
          }
          return produto;
        });
      }
      state.totalCarrinho -= 1;
    },
    removeAllCarrinho: (state, { payload }) => {
      state.totalCarrinho -= payload.quantidadeCarrinho;
      state.produtos = state.produtos.filter(
        (produto) => produto.id !== payload.id,
      );
    },
  },
});

export const {
  addCarrinho,
  removeCarrinho,
  removeAllCarrinho,
} = carrinhoSlice.actions;
export const carrinhoSelector = (state) => state.carrinho;
export default carrinhoSlice.reducer;
