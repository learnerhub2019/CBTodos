import { API_BASE_PATH, METHOD_GET } from "../constants/utils";

export const apiRequest = async (path, method = METHOD_GET, body = null) => {
  const options = { method };
  path = API_BASE_PATH + path;

  if (body && method !== METHOD_GET) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(path, options);
  return parseResponse(response);
};

export const parseResponse = async (response, parseType = "JSON") => {
  const parsedResponse = await parseJsonResponse(response);
  return parsedResponse;
};

const parseJsonResponse = async (response) => {
  let responseData = null;

  try {
    responseData = await response.json();
  } catch {}

  if (!response.ok) {
    const error = new Error(response.statusText);
    error.isFromServer = true;
    error.responseJson = responseData;
    throw error;
  }

  return responseData;
};
