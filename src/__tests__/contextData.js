import { vi } from 'vitest';

const contextData = {
    plantsData: [
      {
        icon: "🏵️",
        name: "one",
        id: "1",
        price: 10,
      },
      {
        icon: "🏵️",
        name: "two",
        id: "2",
        price: 10,
      },
      {
        icon: "🏵️",
        name: "three",
        id: "3",
        price: 10,
      },
      {
        icon: "🏵️",
        name: "four",
        id: "4",
        price: 10,
      },
    ],
    basketData: {
      1: {
        icon: "🏵️",
        name: "one",
        price: 10,
        quantity: 1,
      },
      2: {
        icon: "🏵️",
        name: "two",
        price: 10,
        quantity: 2,
      },
      3: {
        icon: "🏵️",
        name: "three",
        price: 12,
        quantity: 3,
      },
      4: {
        icon: "🏵️",
        name: "four",
        price: 14,
        quantity: 4,
      },
    },
    setBasketData: vi.fn(),
  };

  export default contextData;