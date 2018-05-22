const favPokemon = [];

export const toFavAddRemove = ({ name }) => {
    if (favPokemon.indexOf(name) >=0) {
        favPokemon.splice(favPokemon.indexOf(name), 1);
    } else {
        favPokemon.push(name);
    }
};

export const isFav = ({ name }) => {
    return favPokemon.indexOf(name) >= 0;
};