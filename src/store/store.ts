import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { ICurrency } from "../types/types";

interface StoreState {
  currencies: ICurrency[];
  fetchCurrencies: () => void;
}

const useStore = create<StoreState>()(
  persist(
    (set) => ({
      currencies: [],
      fetchCurrencies: async () => {
        try {
          const response = await axios.get(
            "https://www.floatrates.com/daily/usd.json",
          );
          const responseData = response.data;

          const currencies = Object.keys(responseData).map((key) => {
            const currencyData = responseData[key];

            return {
              code: currencyData.code, // Currency code
              currency: currencyData.name, // Currency name
              rate: currencyData.rate, // Conversion rate
              date: new Date(currencyData.date).toLocaleString(),
            };
          });

          // Sort by rate (ascending)
          currencies.sort((a, b) => a.rate - b.rate);

          // Get highest and lowest
          const highestRate = currencies.pop();
          const lowestRate = currencies.shift();

          if (lowestRate) {
            currencies.unshift(lowestRate); // Add lowest rate at the top
          }
          if (highestRate) {
            currencies.splice(1, 0, highestRate); // Add highest rate as second
          }

          set({ currencies });
        } catch (error) {
          console.error("Error fetching currency rates", error);
        }
      },
    }),
    {
      name: "currency-storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default useStore;
