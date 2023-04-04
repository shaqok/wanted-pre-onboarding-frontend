import axios from 'axios';

const url = `https://www.pre-onboarding-selection-task.shop`;
// const url = `http://localhost:8000`;

export const makeRequest = async (path, method, payload=null, hasToken) => {
  const headers = hasToken ? {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
  } : {
    'Content-Type': 'application/json'
  };

  const config = payload ? {
    url: `${url}${path}`,
    method,
    headers,
    data: payload,
  } : {
    url: `${url}${path}`,
    method,
    headers,
  }

  try {
    const response = await axios.request(config);
    return response;
  } catch (error) {
    console.error(error)
    throw new Error(error.message)
  }
}