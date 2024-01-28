// @ts-nocheck
import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

export default function SearchScreen() {
  const [searchApi, results, errorMessage] = useResults();
  // console.log(results);

  const [term, setTerm] = useState("");

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      // bizim göndermiş olduğumuz price'a eşit mi diye kontrol yapıyoruz
      return result.price === price;
    });
  };
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => {
          searchApi(term);
        }}
      />
      {errorMessage ? (
        <Text>{errorMessage}</Text>
      ) : (
        <>
          {results.length == 0 ? (
            <></>
          ) : (
            <>
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
            </>
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
