// @ts-nocheck
import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function ResultDetail({ result }) {
  return (
    <View>
      {/* buradaki "uri" yazılması gereken bir kural */}
      <Image
        style={{ width: 250, height: 120 }}
        source={result.image_url ? { uri: result.image_url } : null}
      />
      <Text>{result.name}</Text>

      <AntDesign name="star" size={12} color="black" />
      <Text>{result.rating}</Text>
      <Text>({result.review_count})</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
