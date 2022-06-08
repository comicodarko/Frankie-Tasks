import axios from 'axios';
import qs from 'qs';

// export const baseUrl = 'http://localhost:1337';
export const baseUrl = 'http://192.168.0.105:1337';

const token = 'f07108133f6bc82f1d9170f950f042de65054ddeaa0e06efd82fe84c34d3d5a72491af3fdad81599385447d1066e23d9cafe062550cd739d7f61a4c36b6956076f84efaeec61965b6b528d94910706150dc1846eb81e37edef8c6914ee1baf9461e60094ad6bd9612d06272a4598f3eb13411dfd8c081598d42006297782615b'

axios.defaults.baseURL = baseUrl;
axios.defaults.headers = {'Authorization': `bearer ${token}`}

export async function getCategories() {
  const query = qs.stringify({
    populate: {
      icon: {fields: ['url']}
    },
    fields: ['label'],
  })
  const categories = await axios.get(`/api/categories?${query}`);
  return categories.data.data.map(category => ({
    value: category.id,
    id: category.id,
    label: category.attributes.label,
    icon: category.attributes.icon.data.attributes.url
  })) 
}

export async function getTasks() {
  const query = qs.stringify({
    fields: ['label', 'category', 'checked', 'createdAt'],
  })
  const tasks = await axios.get(`/api/tasks?${query}`);
  return tasks.data.data;
}

export async function newTask(label, category) {
  return axios.post('/api/tasks', {
    data: {
      label,
      category
    }
  }) 
}

export async function updateTask(id, status) {
  const response = await axios.put(`api/tasks/${id}`, {
    data: {
      checked: status
    }
  })
  return response.status === 200
}