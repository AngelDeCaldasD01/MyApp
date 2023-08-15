import { create } from 'zustand';
import { API_URL } from '@env';
import apiCall from './ApiCall';

export interface IPokemon {
    id: string;
    name: string;
    types: string[];
    order: string;
    imageUrl: string;
}

type TPokedex = {
    list: any[];
    listCard: any[];
    offset: number;
    limit: number;
    getList: () => Promise<void>;
    getItems: () => Promise<void>;
}

const pokedexStore = create<TPokedex>((set, get) => ({
    list: [],
    listCard: [],
    offset: 0,
    limit: 20,
    getList: async () => {
        try {
            const offset = get().offset;
            const limit = get().limit;

            set({offset: offset + limit})

            const result = await apiCall({url: `${API_URL}/pokemon?limit=${limit}&offset=${offset}`})
            const newPokemon = result.results;
            set((state) => ({list: newPokemon}));
            console.log(get().list)

            // set({ list: result.results }); 
        } catch (error: any){
            throw error
        }   
    },
    getItems: async () => {
        try {

            const results = [];
            for await (const pokemon of get().list) {
                const result = await apiCall({url: pokemon.url});
                results.push({
                    id: result.id,
                    name: result.name,
                    types: result.types.map((x: any, index: number) => {
                        console.log(x)
                        return x.type.name
                    }),
                    // type: result.types[0],
                    order: result.order,
                    imageUrl: result.sprites.other["official-artwork"].front_default
                  })
            }
            set({ listCard: results as IPokemon[] }); 

        } catch (error: any) {
            throw error
        }
    }
}));

export default pokedexStore;