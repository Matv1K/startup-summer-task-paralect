import getAxiosInstance from "./instance";

const getRepos = async (search, page) => {
  const instance = getAxiosInstance();

  const res = await instance.get(`${search}/repos?per_page=4&page=${page}`);

  return res.data;
};

export default getRepos;
