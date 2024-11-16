import { api } from '../services/api';

export const getPosts = async () => {
  try {
    const { data } = await api.get('/posts');
    if (data) {
      return data;
    }
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
  }
  return [];
};

export const getPostBySlug = async (id) => {
    try {
      const { data } = await api.get(`/post/${id}`);
      return data;
    } catch (error) {
      console.error("Erro ao buscar o post:", error);
      return null;
    }
  };
  