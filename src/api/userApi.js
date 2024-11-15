import axios from "axios";

const USER_URL = "https://jsonplaceholder.typicode.com/users";

export const getUsers = async () => {
  try {
    const response = await axios.get(USER_URL);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
};

export const addUser = async (user) => {
  try {
    const response = await axios.post(USER_URL, user);
    return response.data;
  } catch (error) {
    throw new Error("Failed to add user");
  }
};

export const editUser = async (id, updatedUser) => {
  try {
    const response = await axios.put(`${USER_URL}/${id}`, updatedUser);
    return response.data;
  } catch (error) {
    throw new Error("Failed to edit user");
  }
};

export const deleteUser = async (id) => {
  try {
    await axios.delete(`${USER_URL}/${id}`);
  } catch (error) {
    throw new Error("Failed to delete user");
  }
};
