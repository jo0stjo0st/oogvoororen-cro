import { product } from "./data";
export type Age = "child" | "adult" | "senior";
export type Coverage = "standard" | "own" | "unknown";
// RIZIV, effective 01-01-2026; contracted provider, no preferential scheme.
export const rates: Record<Age, readonly [number, number]> = {
  child: [1451.56, 2875.21],
  adult: [884.59, 1751.01],
  senior: [859.59, 1701.46],
};
export function calculatePrice(age: Age, count: number, coverage: Coverage) {
  const total = product.price * count;
  const compensation =
    coverage === "standard"
      ? rates[age][count - 1]
      : coverage === "own"
        ? 0
        : null;
  return {
    total,
    compensation,
    net:
      compensation === null
        ? null
        : Math.round((total - compensation) * 100) / 100,
  };
}
