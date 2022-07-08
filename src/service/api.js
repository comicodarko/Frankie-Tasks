import axios from 'axios';

export const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:4000';
axios.defaults.baseURL = baseUrl;

export async function getCategories() {
  let categories = await axios.get('/categories');
  categories.data.forEach(category => delete category.__v);
  return categories.data;
}

export async function newCategory(label, iconPath) {
  return axios.post('/categories', { label, iconPath }).then((response => {
    return response.data.newCategory;
  })).catch(err => {
    alert('Categoria já existe!');
  });
}

export async function deleteCategory(id) {
  return axios.delete(`/categories/${id}`).then(() => {
    return true;
  }).catch(err => {
    if(err.response.status === 404) {
      alert('Categoria não existe');
    }
    return false;
  });
}

export async function getCategoryIcons() {
  let categories = await axios.get('/categoryIcons');
  return categories.data;
}

export async function getTasks() {
  const tasks = await axios.get('/tasks');
  tasks.data.forEach(task => delete task.__v); 
  return tasks.data;
}

export async function newTask(label, category) {
  const response = await axios.post('/tasks', { label, category });
  return response.data;
}

export async function updateTask(id, status) {
  const response = await axios.put(`tasks/${id}`, {checked: status});
  return response.status === 200;
}

export async function getLetterboxdDiary(user) {
  return axios.get(`letterboxd/${user}`).then(response => {
    const movies = response.data.movies.map(movie => ({
      ...movie, 
      rate: movie.rate === '0.5' ? '½'
        : movie.rate === '1.0' ? '★'
        : movie.rate === '1.5' ? '★½'
        : movie.rate === '2.0' ? '★★'
        : movie.rate === '2.5' ? '★★½'
        : movie.rate === '2.0' ? '★★'
        : movie.rate === '2.5' ? '★★½'
        : movie.rate === '3.0' ? '★★★'
        : movie.rate === '3.5' ? '★★★½'
        : movie.rate === '4.0' ? '★★★★'
        : movie.rate === '4.5' ? '★★★★½'
        : movie.rate === '5.0' ? '★★★★★'
        : ''
    }));
    return movies.slice(0, 10);
  }).catch(error => {
    error.response.status === 404 && alert('Usuário letterboxd não encontrado!');
    error.response.status === 500 && alert('Falha ao buscar dados do letterbox!');
  });
}