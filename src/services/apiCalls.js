import axios from "axios";

export const userRoomList = (id) => {
  return axios.get(`/api/users/${id}/rooms`);
};

export const getUser = (id) => {
  return axios.get(`/api/users/${id}`);
};
