import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6520616a7ee74c8bb144599ae27f3944",
  },
});
