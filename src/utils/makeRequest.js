import axios from 'axios';

// const url = `https://pre-onboarding-selection-task.shop`;
const url = `http://localhost:8000`;

export const makeRequest = async (path, method, payload, hasToken) => {
  const headers = hasToken ? {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
  } : {
    'Content-Type': 'application/json'
  };

  try {
    const response = await axios.request({
      url: `${url}${path}`,
      method,
      headers,
      data: payload,
    });
    return response;
  } catch (error) {
    console.error(error)
    throw new Error(error.message)
  }
}