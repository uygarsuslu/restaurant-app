// @ts-nocheck
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

export default function SearchScreen() {
  const [searchApi, results] = useResults();
  // console.log(results);

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      // bizim göndermiş olduğumuz price'a eşit mi diye kontrol yapıyoruz
      return result.price === price;
    });
  };
  return (
    <View>
      <SearchBar />
      <ResultsList
        title="Cheap Restaurants"
        results={filterResultsByPrice("₺")}
      />
      <ResultsList
        title="Affordable Restaurants"
        results={filterResultsByPrice("₺₺")}
      />
      <ResultsList
        title="Expensive Restaurants"
        results={filterResultsByPrice("₺₺₺")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
