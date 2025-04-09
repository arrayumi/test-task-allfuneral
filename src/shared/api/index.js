import axios from "axios";

const BASE_URL = "https://test-task-api.allfuneral.com";
const USER = "USERNAME";
const COMPANY_ID = "12";
const CONTACT_ID = "16";

const makeRequest = (url, method, data) => {
  const token = localStorage.getItem("access");
  const headers = {};
  if (token) headers["Authorization"] = `Bearer ${token}`;
  if (data?.queryString) {
    headers["Content-Type"] = "multipart/form-data";
  }

  return axios({
    url: BASE_URL + url,
    method: method,
    data: data,
    headers: headers,
  });
};

export const authorize = () => {
  return makeRequest(`/auth?user=${USER}`, "GET");
};

export const getCompany = () => {
  return makeRequest(`/companies/${COMPANY_ID}`, "GET");
};

export const patchCompany = (data) => {
  return makeRequest(`/companies/${COMPANY_ID}`, "PATCH", data);
};

export const deleteCompany = (data) => {
  return makeRequest(`/companies/${COMPANY_ID}`, "DELETE", data);
};

export const addCompanyImage = (data) => {
  return makeRequest(
    `/companies/${COMPANY_ID}/image?${data.queryString}`,
    "POST",
    data
  );
};

export const deleteCompanyImage = (imageName) => {
  return makeRequest(`/companies/${COMPANY_ID}/image/${imageName}`, "DELETE");
};

export const getContact = () => {
  return makeRequest(`/contacts/${CONTACT_ID}`, "GET");
};

export const patchContact = () => {
  return makeRequest(`/contacts/${CONTACT_ID}`, "PATCH");
};
