// @ts-nocheck
import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function ResultDetail({ result }) {
  return (
    <View style={styles.container}>
      {/* buradaki "uri" yazılması gereken bir kural */}
      <Image
        style={styles.image}
        source={result.image_url ? { uri: result.image_url } : null}
      />
      <Text style={styles.name}>{result.name}</Text>
      <View style={styles.details}>
        <AntDesign style={styles.icon} name="star" size={12} color="black" />
        <Text style={styles.rating}>{result.rating}</Text>
        <Text>({result.review_count})</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 8,
    marginBottom: 5,
  },
  name: {
    fontWeight: "bold",
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    color: "#ffd700",
    marginRight: 3,
  },
  rating: {
    fontWeight: "bold",
    marginRight: 3,
  },
});
