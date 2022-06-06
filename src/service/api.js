import axios from 'axios';
import qs from 'qs';

export const baseUrl = 'http://localhost:1337';

axios.defaults.baseURL = baseUrl;

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
    label: category.attributes.label,
    icon: category.attributes.icon.data.attributes.url
  }))
  
}