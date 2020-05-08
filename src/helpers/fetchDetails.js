import { BASE_URL } from '../config.json';

export const fetchPosts = () => {
  return fetch(`${BASE_URL}posts`)
    .then((response) => response.json())
    .then((json) => json);
};
export const fetchUsers = () => {
  return fetch(`${BASE_URL}users`)
    .then((response) => response.json())
    .then((json) => json);
};
export const fetchPost = (id) => {
  return fetch(`${BASE_URL}posts/${id}`)
    .then((response) => response.json())
    .then((json) => json);
};
export const fetchComments = (id) => {
  return fetch(`${BASE_URL}posts/${id}/comments`)
    .then((response) => response.json())
    .then((json) => json);
};
export const fetchUser = (id) => {
  return fetch(`${BASE_URL}users/${id}`)
    .then((response) => response.json())
    .then((json) => json);
};
