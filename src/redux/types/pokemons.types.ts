// constants enumerable'a çevrildi, atamada "=" kalktı, ":" yerine "=" kondu.
export enum POKEMONS_ACTION_TYPES {
    ACTION_TYPE_SET_POKEMONS = "ACTION_TYPE_SET_POKEMONS",
    ACTION_TYPE_GET_POKEMONS = "ACTION_TYPE_GET_POKEMONS",
    ACTION_TYPE_SET_POKEMON_DETAIL = "ACTION_TYPE_SET_POKEMON_DETAIL",
    ACTION_TYPE_GET_POKEMON_DETAIL = "ACTION_TYPE_GET_POKEMON_DETAIL",
    ACTION_TYPE_CLEAR_POKEMON_DETAIL = "ACTION_TYPE_CLEAR_POKEMON_DETAIL"
}

export type GetResult = {
    count: string;
    next: string;
    previous?: string;
    results: [Pokemon]
}

export type Pokemon = {
    name: string;
    url: string
}

export type PickedPokemon = {
    index: Number
}

export type PokemonDetail = {
    abilities: [PokemonAbility];
    base_experience: Number;
    forms: [PokemonForm];
    game_indices: [PokemonGameIndex];
    height: Number;
    held_items?: [];
    id: Number;
    is_default: boolean;
    location_area_encounter: string;
    moves: [PokemonMove];
    name: string;
    order: Number;
    past_types?: [];
    species: {
        name: string;
        url: string
    };
    sprites: {
        back_default?: string | null;
        back_female?: string | null;
        back_shiny?: string | null;
        back_shiny_female?: string | null;
        front_default?: string | null;
        front_female?: string | null;
        front_shiny?: string | null;
        front_shiny_female?: string | null;
        other: {
            dream_world: {
                front_default?: string | null;
                front_female?: string | null;
            };
            home: {
                front_default?: string | null;
                front_female?: string | null;
                front_shiny?: string | null;
                front_shiny_female?: string | null 
            };
            official_artwork: {
                front_default?: string | null
            }
        };
        versions: {
            generation_i?: {
                red_blue?: {
                    back_default?: string | null;
                    back_gray?: string | null;
                    back_transparent?: string | null;
                    front_default?: string | null;
                    front_gray?: string | null;
                    front_transparent?: string | null
                };
                yellow?: {
                    back_default?: string | null;
                    back_gray?: string | null;
                    back_transparent?: string | null;
                    front_default?: string | null;
                    front_gray?: string | null;
                    front_transparent?: string | null
                };
            };
            generation_ii?: {
                crystal?: {
                    back_default?: string | null;
                    back_shiny?: string | null;
                    back_shiny_transparent?: string | null;
                    back_transparent?: string | null;
                    front_default?: string | null;
                    front_shiny?: string | null;
                    front_shiny_transparent?: string | null;
                    front_transparent?: string | null
                };
                gold?: {
                    back_default?: string | null;
                    back_shiny?: string | null;
                    front_default?: string | null;
                    front_shiny?: string | null;
                    front_transparent?: string | null
                };
                silver: {
                    back_default?: string | null;
                    back_shiny?: string | null;
                    front_default?: string | null;
                    front_shiny?: string | null;
                    front_transparent?: string | null
                }
            };
            generation_iii?:{
                emerald?: {
                    front_default?: string | null;
                    front_shiny?: string | null
                };
                filtered_leafgreen?: {
                    back_default?: string | null;
                    back_shiny?: string | null;
                    front_default?: string | null;
                    front_shiny?: string | null;
                };
                ruby_sapphire?: {
                    back_default?: string | null;
                    back_shiny?: string | null;
                    front_default?: string | null;
                    front_shiny?: string | null;
                }
            };
            generation_iv?: {
                diamond_pearl?: {
                    back_default?: string | null;
                    back_female?: string | null;
                    back_shiny?: string | null;
                    back_shiny_female?: string | null;
                    front_default?: string | null;
                    front_female?: string | null;
                    front_shiny?: string | null;
                    front_shiny_female?: string | null;
                };
                hearthgold_soulsilver?: {
                    back_default?: string | null;
                    back_female?: string | null;
                    back_shiny?: string | null;
                    back_shiny_female?: string | null;
                    front_default?: string | null;
                    front_female?: string | null;
                    front_shiny?: string | null;
                    front_shiny_female?: string | null;
                };
                platinum?: {
                    back_default?: string | null;
                    back_female?: string | null;
                    back_shiny?: string | null;
                    back_shiny_female?: string | null;
                    front_default?: string | null;
                    front_female?: string | null;
                    front_shiny?: string | null;
                    front_shiny_female?: string | null;
                }
            };
            generation_v?:{
                black_white?: {
                    animated?: {
                        back_default?: string | null;
                        back_female?: string | null;
                        back_shiny?: string | null;
                        back_shiny_female?: string | null;
                        front_default?: string | null;
                        front_female?: string | null;
                        front_shiny?: string | null;
                        front_shiny_female?: string | null;
                    };
                    back_default?: string | null;
                    back_female?: string | null;
                    back_shiny?: string | null;
                    back_shiny_female?: string | null;
                    front_default?: string | null;
                    front_female?: string | null;
                    front_shiny?: string | null;
                    front_shiny_female?: string | null;
                }
            };
            generation_vi?: {
                omegaruby_alphasapphire?: {
                    front_default?: string | null;
                    front_female?: string | null;
                    front_shiny?: string | null;
                    front_shiny_female?: string | null;
                };
                x_y?: {
                    front_default?: string | null;
                    front_female?: string | null;
                    front_shiny?: string | null;
                    front_shiny_female?: string | null;
                }
            };
            generation_vii?: {
                icons: {
                    front_default?: string | null;
                    front_female?: string | null;  
                };
                ultra_sun_ultra_moon?: {
                    front_default?: string | null;
                    front_female?: string | null;
                    front_shiny?: string | null;
                    front_shiny_female?: string | null;
                }
            };
            generations_viii?: {
                icons: {
                    front_default?: string | null;
                    front_female?: string | null;
                }
            }
        }
    };
    stats: [PokemonStats];
    type: [PokemonType];
    weight: Number;
}

export type PokemonAbility = {
    ability: {
        name: string;
        url: string
    };
    is_hidden: boolean;
    slot: Number
}

export type PokemonForm = {
    name: string;
    url: string
}

export type PokemonGameIndex = {
    game_index: Number;
    version: {
        name: string;
        url: string
    }
}

export type PokemonMove = {
    move: {
        name: string;
        url: string
    };
    version_group_details: [PokemonVersionGroupDetail]
}

export type PokemonVersionGroupDetail = {
    level_learned_at: Number;
    move_learn_method: {
        name: string;
        url: string
    };
    version_group: {
        name: string;
        url: string
    }
}

export type PokemonStats = {
    base_stat: Number;
    effort: Number;
    stat: {
        name: string;
        url: string
    }
}

export type PokemonType = {
    slot: Number;
    type: {
        name: string;
        url: string
    }
}