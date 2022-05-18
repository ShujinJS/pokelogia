// constants enumerable'a çevrildi, atamada "=" kalktı, ":" yerine "=" kondu.
export enum POKEMONS_ACTION_TYPES {
    ACTION_TYPE_SET_POKEMONS = "ACTION_TYPE_SET_POKEMONS",
    ACTION_TYPE_GET_POKEMONS = "ACTION_TYPE_GET_POKEMONS",
    ACTION_TYPE_SET_POKEMON_DETAIL = "ACTION_TYPE_SET_POKEMON_DETAIL",
    ACTION_TYPE_GET_POKEMON_DETAIL = "ACTION_TYPE_GET_POKEMON_DETAIL",
    ACTION_TYPE_CLEAR_POKEMON_DETAIL = "ACTION_TYPE_CLEAR_POKEMON_DETAIL"
}

export type RootState = {
  rootState: {
      pokemonList: GetResult;
      selectedPokemon: PokemonDetail;
  }
}

export type PokemonsState = {
  pokemonList: GetResult | {};
  selectedPokemon: PokemonDetail | {};
} 

export type GetResult = {
    count: number | null;
    next: string | null;
    previous: string | null ;
    results: Pokemon[]
}

export type Pokemon = {
    name: string;
    url: string
}

export type PickedPokemon = {
    url: string
}

export interface PokemonDetail {
    abilities?: (AbilitiesEntity)[] | null;
    base_experience: number;
    forms?: (AbilityOrFormsEntityOrVersionOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies)[] | null;
    game_indices?: (GameIndicesEntity)[] | null;
    height: number;
    held_items?: (null)[] | null;
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves?: (MovesEntity)[] | null;
    name: string;
    order: number;
    past_types?: (null)[] | null;
    species: AbilityOrFormsEntityOrVersionOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
    sprites: Sprites;
    stats?: (StatsEntity)[] | null;
    types?: (TypesEntity)[] | null;
    weight: number;
  }
  export interface AbilitiesEntity {
    ability: AbilityOrFormsEntityOrVersionOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
    is_hidden: boolean;
    slot: number;
  }
  export interface AbilityOrFormsEntityOrVersionOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies {
    name: string;
    url: string;
  }
  export interface GameIndicesEntity {
    game_index: number;
    version: AbilityOrFormsEntityOrVersionOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
  }
  export interface MovesEntity {
    move: AbilityOrFormsEntityOrVersionOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
    version_group_details?: (VersionGroupDetailsEntity)[] | null;
  }
  export interface VersionGroupDetailsEntity {
    level_learned_at: number;
    move_learn_method: AbilityOrFormsEntityOrVersionOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
    version_group: AbilityOrFormsEntityOrVersionOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
  }
  export interface Sprites {
    back_default: string;
    back_female?: null;
    back_shiny: string;
    back_shiny_female?: null;
    front_default: string;
    front_female?: null;
    front_shiny: string;
    front_shiny_female?: null;
    other: Other;
    versions: Versions;
  }
  export interface Other {
    dream_world: DreamWorldOrIcons;
    home: HomeOrOmegaruby_alphasapphireOrX_yOrUltra_sun_ultra_moon;
    official_artwork: Official_artwork;
  }
  export interface DreamWorldOrIcons {
    front_default: string;
    front_female?: null;
  }
  export interface HomeOrOmegaruby_alphasapphireOrX_yOrUltra_sun_ultra_moon {
    front_default: string;
    front_female?: null;
    front_shiny: string;
    front_shiny_female?: null;
  }
  export interface Official_artwork {
    front_default: string;
  }
  export interface Versions {
    generation_i: Generation_i;
    generation_ii: Generation_ii;
    generation_iii: Generation_iii;
    generation_iv: Generation_iv;
    generation_v: Generation_v;
    generation_vi: Generation_vi;
    generation_vii: Generation_vii;
    generation_viii: Generation_viii;
  }
  export interface Generation_i {
    red_blue: Red_blueOrYellow;
    yellow: Red_blueOrYellow;
  }
  export interface Red_blueOrYellow {
    back_default: string;
    back_gray: string;
    back_transparent: string;
    front_default: string;
    front_gray: string;
    front_transparent: string;
  }
  export interface Generation_ii {
    crystal: Crystal;
    gold: GoldOrSilver;
    silver: GoldOrSilver;
  }
  export interface Crystal {
    back_default: string;
    back_shiny: string;
    back_shiny_transparent: string;
    back_transparent: string;
    front_default: string;
    front_shiny: string;
    front_shiny_transparent: string;
    front_transparent: string;
  }
  export interface GoldOrSilver {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
    front_transparent: string;
  }
  export interface Generation_iii {
    emerald: Emerald;
    firered_leafgreen: Firered_leafgreenOrRuby_sapphire;
    ruby_sapphire: Firered_leafgreenOrRuby_sapphire;
  }
  export interface Emerald {
    front_default: string;
    front_shiny: string;
  }
  export interface Firered_leafgreenOrRuby_sapphire {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
  }
  export interface Generation_iv {
    diamond_pearl: Diamond_pearlOrHeartgold_soulsilverOrPlatinumOrAnimated;
    heartgold_soulsilver: Diamond_pearlOrHeartgold_soulsilverOrPlatinumOrAnimated;
    platinum: Diamond_pearlOrHeartgold_soulsilverOrPlatinumOrAnimated;
  }
  export interface Diamond_pearlOrHeartgold_soulsilverOrPlatinumOrAnimated {
    back_default: string;
    back_female?: null;
    back_shiny: string;
    back_shiny_female?: null;
    front_default: string;
    front_female?: null;
    front_shiny: string;
    front_shiny_female?: null;
  }
  export interface Generation_v {
    black_white: Black_white;
  }
  export interface Black_white {
    animated: Diamond_pearlOrHeartgold_soulsilverOrPlatinumOrAnimated;
    back_default: string;
    back_female?: null;
    back_shiny: string;
    back_shiny_female?: null;
    front_default: string;
    front_female?: null;
    front_shiny: string;
    front_shiny_female?: null;
  }
  export interface Generation_vi {
    omegaruby_alphasapphire: HomeOrOmegaruby_alphasapphireOrX_yOrUltra_sun_ultra_moon;
    x_y: HomeOrOmegaruby_alphasapphireOrX_yOrUltra_sun_ultra_moon;
  }
  export interface Generation_vii {
    icons: DreamWorldOrIcons;
    ultra_sun_ultra_moon: HomeOrOmegaruby_alphasapphireOrX_yOrUltra_sun_ultra_moon;
  }
  export interface Generation_viii {
    icons: DreamWorldOrIcons;
  }
  export interface StatsEntity {
    base_stat: number;
    effort: number;
    stat: AbilityOrFormsEntityOrVersionOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
  }
  export interface TypesEntity {
    slot: number;
    type: AbilityOrFormsEntityOrVersionOrMoveLearnMethodOrVersionGroupOrMoveOrStatOrTypeOrSpecies;
  }
  

// export type PokemonAbility = {
//     ability: {
//         name: string;
//         url: string
//     };
//     is_hidden: boolean;
//     slot: Number
// }

// export type PokemonForm = {
//     name: string;
//     url: string
// }

// export type PokemonGameIndex = {
//     game_index: Number;
//     version: {
//         name: string;
//         url: string
//     }
// }

// export type PokemonMove = {
//     move: {
//         name: string;
//         url: string
//     };
//     version_group_details: [PokemonVersionGroupDetail]
// }

// export type PokemonVersionGroupDetail = {
//     level_learned_at: Number;
//     move_learn_method: {
//         name: string;
//         url: string
//     };
//     version_group: {
//         name: string;
//         url: string
//     }
// }

// export type PokemonStats = {
//     base_stat: Number;
//     effort: Number;
//     stat: {
//         name: string;
//         url: string
//     }
// }

// export type PokemonType = {
//     slot: Number;
//     type: {
//         name: string;
//         url: string
//     }
// }