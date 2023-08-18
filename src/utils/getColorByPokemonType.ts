import {POKEMON_TYPE_COLORS, TPOKEMON_TYPE_COLORS} from './pokemonTypeColors';

export const getColorByPokemonType = (type: keyof TPOKEMON_TYPE_COLORS) =>
  POKEMON_TYPE_COLORS[type];
