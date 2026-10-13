"use client";
import { createContext, useContext, useState, type ReactNode } from "react";
import { calculatePrice, type Age, type Coverage } from "./pricing";
function useLocalPrice() {
  const [count, setCount] = useState(1);
  const [age, setAge] = useState<Age>("senior");
  const [coverage, setCoverage] = useState<Coverage>("standard");
  return {
    count,
    setCount,
    age,
    setAge,
    coverage,
    setCoverage,
    ...calculatePrice(age, count, coverage),
  };
}
const PriceContext = createContext<ReturnType<typeof useLocalPrice> | null>(
  null,
);
export function PriceProvider({ children }: { children: ReactNode }) {
  const model = useLocalPrice();
  return (
    <PriceContext.Provider value={model}>{children}</PriceContext.Provider>
  );
}
export function usePrice() {
  const context = useContext(PriceContext);
  const local = useLocalPrice();
  return context || local;
}
