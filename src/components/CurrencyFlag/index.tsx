import React from "react";
import { View, Text, Image } from "react-native";

import { CountriesFlag } from "../../types/types";
import currencyFlags from "../../constants/currency-flag.json";

import styles from "./styles";

interface CurrencyFlagProps {
  code: string;
  currency: string;
}

export const CurrencyFlag = ({ code, currency }: CurrencyFlagProps) => {
  const data = currencyFlags as CountriesFlag;
  const img = data[code];
  return (
    <View style={styles.currencyCard}>
      {img ? (
        <Image source={{ uri: img }} width={45} height={30} />
      ) : (
        <View style={{ width: 45, height: 30 }} />
      )}

      <View style={styles.content}>
        <Text style={styles.code}>{code}</Text>
        <Text style={styles.currency}>{currency}</Text>
      </View>
    </View>
  );
};
