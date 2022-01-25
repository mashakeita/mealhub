import axios from 'axios';

const url = 'http://localhost:5000/recipies';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newRecipe);
export const likePost = (id) => axios.patch(`${url}/${id}/likeRecipe`);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedRecipe);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
