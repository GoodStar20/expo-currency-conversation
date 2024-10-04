import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  listItem: {
    padding: 20,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    marginHorizontal: 15,
    marginVertical: 10,
  },
  rate: {
    fontSize: 20,
    color: "green",
    marginTop: 10,
  },
  date: {
    fontSize: 15,
    color: "gray",
    marginTop: 5,
    fontWeight: "500",
  },
});
