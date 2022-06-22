import axios from 'axios';

export const baseUrl = 'http://localhost:4000';
// export const baseUrl = 'http://192.168.0.105:1337';

axios.defaults.baseURL = baseUrl;

export async function getCategories() {
  let categories = await axios.get('/categories');
  categories.data.forEach(category => delete category.__v);
  return categories.data;
}

export async function getTasks() {
  const tasks = await axios.get('/tasks');
  tasks.data.forEach(task => delete task.__v); 
  return tasks.data;
}

export async function newTask(label, category) {
  const response = await axios.post('/tasks', { label, category});
  return response.data;
}

export async function updateTask(id, status) {
  const response = await axios.put(`tasks/${id}`, {checked: status});
  return response.status === 200;
}