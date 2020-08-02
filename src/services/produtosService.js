import axios from 'axios';

const baseUrl = 'http://localhost:3004/produtos';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const update = (produto) => {
  const request = axios.put(`${baseUrl}/${produto.id}`, produto);
  return request.then((response) => response.data);
};

export { getAll, update };
