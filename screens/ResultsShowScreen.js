// @ts-nocheck
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import yelp from "../api/yelp";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

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
      <Text style={styles.title}>{result.name}</Text>
      <Text style={styles.phone}>{result.phone}</Text>
      <View style={styles.icon}>
        {result.is_closed ? (
          <AntDesign name="closecircleo" size={30} color="black" />
        ) : (
          <MaterialIcons name="delivery-dining" size={30} color="black" />
        )}
      </View>

      <FlatList
        data={result.photos}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 180,
    margin: 10,
    borderRadius: 20,
  },
  title: {
    alignSelf: "center",
    fontSize: 25,
    marginVertical: 10,
  },
  phone: {
    alignSelf: "center",
    fontSize: 20,
  },
  icon: {
    alignSelf: "center",
  },
});
