import { create } from "zustand";
import type {
  IGetPokemonByName,
  IGetPokemons,
  IPokemonState,
} from "./pokemon.types";
import axios from "axios";
import { API } from "../../api/Api";

export const usePokemon = create<IPokemonState>((set) => ({
  pokemons: [],
  pokemon: null,
  pokemon2: null,
  isLoading: false,

  getPokemons: async () => {
    set({ isLoading: true });
    try {
      const responce = await axios.get<IGetPokemons>(API);
      set({ pokemons: responce.data.results, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  },
  getPokemonByName: async (name) => {
    try {
      const responce = await axios.get<IGetPokemonByName>(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      set({ pokemon: responce.data });
    } catch (error) {
      console.log(error);
    }
  },
  getPokemon2ByName: async (name) => {
    try {
      const responce = await axios.get<IGetPokemonByName>(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      set({ pokemon2: responce.data });
    } catch (error) {
      console.log(error);
    }
  },
}));
