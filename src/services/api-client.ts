import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "7f1fe3cc0b0c4528b6f9ec2cbfb48306",
  },
});
