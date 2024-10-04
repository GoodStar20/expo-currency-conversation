import React from "react";
import { View, Text } from "react-native";

import { CurrencyFlag } from "../CurrencyFlag";
import { ICurrency } from "../../types/types";

import styles from "./styles";

const CurrencyCard = ({ item }: { item: ICurrency }) => {
  return (
    <View style={styles.listItem}>
      <CurrencyFlag code={item.code} currency={item.currency} />
      <Text style={styles.rate}>Rate: {item.rate}</Text>
      <Text style={styles.date}>Last Updated: {item.date}</Text>
    </View>
  );
};

export default CurrencyCard;
