// @ts-nocheck
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import yelp from "../api/yelp";

// navigation'da yolladığımız id, route'un içinde tutulur
export default function ResultsShowScreen({ route }) {
  // api'den gelen değerleri gösterebilmemiz için
  const [result, setResult] = useState(null);

  // id'yi değişkene atadık
  const id = route.params.id;

  // id yerine farklı bir isim de verebilirdik. bu useEffect'in içindeki id'ye karşılık gelir
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  // her seferinde istek atılmasını değil 1 defa istiyorsak [] ile bunu gerçekleştirdik
  useEffect(() => {
    //yelp.api'ye istek atmamızı sağlayan method
    getResult(id);
  }, []);

  // başlangıçta result gelmeyip, belli bir süre sonra geldiği için bu kodu yazdık
  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <Text>{result.phone}</Text>
      <FlatList
        data={result.photos}
        renderItem={({ item }) => {
          return (
            <Image style={{ width: 50, height: 50 }} source={{ uri: item }} />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
