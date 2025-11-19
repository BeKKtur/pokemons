import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ICollectionState } from "./collection.types";

export const useCollections = create(
  persist<ICollectionState>(
    (set) => ({
      collection: [],
      addToCollection: async (item) => {
        set((state) => {
          if (state.collection.some((el) => el.name === item.name)) {
            alert("У тебя уже есть этот покемон");
            return state;
          } else {
            alert("SUCCESSFUL!");
            return {
              collection: [...state.collection, { ...item, count: 1 }],
            };
          }
        });
      },
      removePokemon: async (name) => {
        set((state) => ({
          collection: state.collection.filter((el) => el.name !== name),
        }));
      },
    }),
    {
      name: "collections",
    }
  )
);
