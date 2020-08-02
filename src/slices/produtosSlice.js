import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAll, update } from '../services/produtosService';

export const initialState = {
  loading: false,
  produtos: [],
};

export const updateProduto = createAsyncThunk(
  'produtos/updateProduto',
  async (produto, thunkAPI) => {
    const produtoTemp = { ...produto };
    delete produtoTemp.quantidadeCarrinho;
    try {
      const response = await update(produtoTemp);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
);

const produtosSlice = createSlice({
  name: 'produtos',
  initialState,
  reducers: {
    getProdutos: (state) => {
      state.loading = true;
    },
    getProdutosSuccess: (state, { payload }) => {
      state.produtos = payload;
      state.loading = false;
    },
  },
  extraReducers: {
    [updateProduto.fulfilled]: (state, { payload }) => {
      state.produtos = state.produtos.map((produto) => {
        if (produto.id === payload.id) {
          return payload;
        }
        return produto;
      });
    },
  },
});

export const { getProdutos, getProdutosSuccess } = produtosSlice.actions;
export const produtosSelector = (state) => state.produtos;
export default produtosSlice.reducer;

export function fetchProdutos() {
  return async (dispatch) => {
    dispatch(getProdutos()); // colocar como loading
    try {
      const response = await getAll();
      dispatch(getProdutosSuccess(response));
    } catch (error) {
      console.log(error);
    }
  };
}
