import getAxiosInstance from "./instance";

const getUser = async (search) => {
  const instance = getAxiosInstance();

  const res = await instance.get(search);

  return res.data;
};

export default getUser;
