import axios, { AxiosRequestConfig } from 'axios';

export const DEFAULT_ACTIVITY_TIMEOUT = 30000;

export async function sendPostRequest<T>(
  url: string,
  body: T,
  token?: string,
  config?: AxiosRequestConfig
) {
  const conf = {
    timeout: DEFAULT_ACTIVITY_TIMEOUT,
    ...config,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: token }),
    },
  };
  try {
    return await axios.post(url, body, conf);
  } catch (e) {
    throw e;
  }
}

export async function sendImageRequest<T>(
  url: string,
  body: T,
  token?: string,
  config?: AxiosRequestConfig
) {
  const conf = {
    timeout: DEFAULT_ACTIVITY_TIMEOUT,
    ...config,
    headers: {
      'Content-Type': 'multipart/form-data',
      ...(token && { Authorization: token }),
    },
  };
  try {
    return await axios.post(url, body, conf);
  } catch (e) {
    throw e;
  }
}

export async function sendGetRequest(
  url: string,
  token?: string,
  config?: AxiosRequestConfig
) {
  console.log(url)
  const conf = {
    timeout: DEFAULT_ACTIVITY_TIMEOUT,
    ...config,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: token }),
    },
  };

  try {
    return await axios.get(url, conf);
  } catch (e) {
    throw e;
  }
}

export async function sendPutRequest<T>(
  url: string,
  body: T,
  token?: string,
  config?: AxiosRequestConfig
) {
  const conf = {
    timeout: DEFAULT_ACTIVITY_TIMEOUT,
    ...config,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: token }),
    },
  };
  try {
    return await axios.put(url, body, conf);
  } catch (e) {
    throw e;
  }
}

export async function sendDeleteRequest<T>(
  url: string,
  token?: string,
  config?: AxiosRequestConfig
) {
  const conf = {
    timeout: DEFAULT_ACTIVITY_TIMEOUT,
    ...config,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: token }),
    },
  };
  try {
    return await axios.delete(url, conf);
  } catch (e) {
    throw e;
  }
}
