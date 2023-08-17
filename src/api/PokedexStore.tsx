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
    getList: () => Promise<void>;
    getItems: () => Promise<void>;
    nextCall?: string;
}

const pokedexStore = create<TPokedex>((set, get) => ({
    list: [],
    listCard: [],
    getList: async () => {
        try {
            console.log(get().nextCall)
            const result = await apiCall({url: get().nextCall ?? `${API_URL}/pokemon?limit=20&offset=0`})

            set({nextCall: result.next});

            const listPokemons = result.results;

            set(() => ({list: listPokemons}));
        } catch (error: any){
            throw error
        }   
    },
    getItems: async () => {
        try {

            const results = get().listCard;
            for await (const pokemon of get().list) {
                console.log(pokemon.url)
                const result = await apiCall({url: pokemon.url});
                results.push({
                    id: result.id,
                    name: result.name,
                    types: result.types.map((x: any, index: number) => {
                        return x.type.name
                    }),
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