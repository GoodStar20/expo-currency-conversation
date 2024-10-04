import React, { useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import CurrencyCard from "../../components/CurrencyCard";

import { ICurrency } from "../../types/types";
import useStore from "../../store/store";
import styles from "./styles";

const CurrencyList = () => {
  const { currencies, fetchCurrencies } = useStore();

  const fetchCurrenciesData = async () => {
    await fetchCurrencies();
  };

  useEffect(() => {
    fetchCurrenciesData();

    const interval = setInterval(() => {
      fetchCurrencies();
    }, 10000); // Fetch data every 10s

    return () => clearInterval(interval);
  }, [fetchCurrencies]);

  const renderItem = ({ item }: { item: ICurrency }) => (
    <CurrencyCard item={item} />
  );

  return (
    <>
      <View style={styles.titleView}>
        <Text style={styles.title}>US Dollar Exchange Rages</Text>
      </View>

      <FlatList
        data={currencies}
        renderItem={renderItem}
        keyExtractor={(item) => item.code}
      />
    </>
  );
};

export default CurrencyList;
