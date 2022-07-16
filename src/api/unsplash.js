import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID D5Q9P13j5qVCuRX1yLTrn0Rx2lEmlvV_QHcTU7hsjZE",
  },
});
