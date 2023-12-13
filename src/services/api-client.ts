import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bc6506998e584f7fac3db5a5a807f12b",
  },
});
