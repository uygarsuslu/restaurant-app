// npm i axios

import axios from "axios";

export default axios.create({
  // nereye istek attığımızı belirtiriz
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer P2ikc7Ld19tJ48Tir6778eyS3Vr1_3AOICz0ZgeasiTiML3K8Q7NpjC9lTQ6aJLH9krUQIRQemq2v0ywwpquBbclzjT0gd_Vemmh0HRQZW08l1SqCFVGLKdfPXO1ZXYx",
  },
});

// projenin herhangi bir yerinde bu dosyayı import ederek axios isteği gerçekleştirebiliriz
