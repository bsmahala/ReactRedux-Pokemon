
import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';


const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 500,
        overflowY: 'auto',
    },
};


/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const PokemonGird = ({ pokemonData, itemClick, fav, dispatch }) => (
    <div style={styles.root}>
        <GridList
            cellHeight={180}
            style={styles.gridList}
            cols={2.2}
        >
            {pokemonData.list.map((pokemone, index) => (
                <GridTile
                    key={index}
                    title={pokemone.name}
                    
                    actionIcon={
                        <FontIcon className='fa fa-star'
                            color={fav.indexOf(pokemone.name) < 0 ? 'rgba(0,0,0,0.3)' : 'red'}
                            onClick={e => dispatch({ type: 'fav', payload: pokemone.name })}
                        />
                    }
                    >
                    {pokemonData.detail[pokemone.name] ?
                        <img onClick={e => itemClick(pokemone, pokemonData)} src={pokemonData.detail[pokemone.name].sprites.back_default} alt={pokemone.name} />
                        : null}
                </GridTile>
            ))}
        </GridList>
    </div>
);


export default connect(state => ({ fav: state.fav }))(PokemonGird);