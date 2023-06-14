import { create } from 'zustand';
import apiCall from './apiCall';
import { API_URL } from '@env';

type TPokedex = {
    list: any[];
    getList: () => Promise<any>;
}

const pokedexStore = create<TPokedex>((set, get) => ({
    list: [],
    getList: async () => {
        try {
            const result = await apiCall({url: `${API_URL}pokemon?limit=20&offset=0`})
            set({ list: result.results }); 
        } catch (error: any){

        }
    }
}));

export default pokedexStore;