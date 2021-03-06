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
  tasks.data.forEach(task => {
    delete task.__v;

    task.dates = {
      initial: task.dates.initial ? new Date(task.dates.initial).toLocaleDateString() : null,
      final: task.dates.final ? new Date(task.dates.final).toLocaleDateString() : null
    }
    console.log(task.dates);
  }); 
  return tasks.data;
}

export async function newTask(label, category, initial, final) {
  const dates = { initial, final };
  const response = await axios.post('/tasks', { label, category, dates });
  return response.data;
}

export async function updateTask(id, status) {
  const response = await axios.put(`tasks/${id}`, {checked: status});
  return response.status === 200;
}