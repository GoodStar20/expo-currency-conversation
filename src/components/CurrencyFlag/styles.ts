import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  currencyCard: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  code: {
    fontSize: 20,
    fontWeight: "700",
  },
  currency: {
    fontSize: 15,
    fontWeight: "400",
  },
  content: {
    flexDirection: "column",
    marginLeft: 15,
  },
});
