import {create} from 'zustand';
import {API_URL} from '@env';
import apiCall from './ApiCall';

type TPokemon = {
  detailPokemon: any;
  getDetailPokemon: (id: string) => Promise<void>;
};

const pokemonStore = create<TPokemon>((set, get) => ({
  detailPokemon: [],
  getDetailPokemon: async (id: string) => {
    try {
      const result = await apiCall({
        url: `${API_URL}/pokemon/${id}`,
      });

      set({detailPokemon: result});
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  },
}));

export default pokemonStore;
