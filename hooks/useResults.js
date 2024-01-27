// @ts-nocheck
import { useEffect, useState } from "react";
import yelp from "../api/yelp";

// başlangıçta menüsünde tost içeren restoranları çekmek istiyorsak
export default () => {
  const [results, setResults] = useState([]);

  // Toast = searchTerm'e karşılık gelecek
  const searchApi = async (searchTerm) => {
    // cevap gelene kadar herhangi bir işlem yapmasını istemiyorsak await kullanırız

    // burdan dönen cevabı bir değişkene atayabiliriz
    const response = await yelp.get("/search", {
      params: {
        limit: 50,
        term: searchTerm,
        location: "İstanbul",
      },
    });
    setResults(response.data.businesses);
  };

  useEffect(() => {
    searchApi("Toast");
  }, []); // sayfa render edilince bir kere çağırılmasını istiyorsak boş köşeli parantez koyarız
  // içerisinde değişken değiştiğinde çağırılmasını istiyorsak içine değişkeni yazarız

  // aramayı yapabilmek için searchApi'yi dışarıya açmamız gerekiyor
  return [searchApi, results];
};
