
import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'http://localhost:8002';

const apiRequest = async (url: string, method: string, data?: any): Promise<AxiosResponse> => {
  try {
    const response = await axios({
      method,
      url: `${BASE_URL}/${url}`,
      headers: {
        'Content-Type': 'application/json',
        // You may include other headers like authorization tokens here
      },
      data,
    });

    return response;
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};

export const get = async (url: string) => {
  return apiRequest(url, 'GET');
};

export const post = async (url: string, data: any) => {
  return apiRequest(url, 'POST', data);
};

export const put = async (url: string, data: any) => {
  return apiRequest(url, 'PUT', data);
};

export const del = async (url: string) => {
  return apiRequest(url, 'DELETE');
};
