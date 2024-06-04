import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "fc7cbd63af5e16acd8083125591c2a20",
    language: "ko-KR",
  },
});

export default instance;
