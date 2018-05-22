import React from 'react';
import {
    Table,
    TableBody,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import { isFav } from '../services/FavPokeom';
import { connect } from 'react-redux';

// add user component
const PokemonList = ({ pokemonData, itemClick, fav , dispatch }) =>  {
    console.log('fav list', fav);
    return (
                <Table selectable={false}>
                    <TableBody displayRowCheckbox={false}>
                        {pokemonData.list.map((pokemone, index) =>
                <TableRow displayBorder={false} key={index}>
                    <TableRowColumn onClick={e => itemClick(pokemone, index)}>{pokemone.name}</TableRowColumn>
                    <TableRowColumn onClick={e => itemClick(pokemone, index)}>
                                    {pokemonData.detail[pokemone.name] ?
                            <img onClick={e => itemClick(pokemone, index)} src={pokemonData.detail[pokemone.name].sprites.back_default} alt={pokemone.name} />
                                        : null}
                                </TableRowColumn>
                    <TableRowColumn >
                        <FlatButton
                            label="Detail"
                            primary={true}
                            keyboardFocused={true}
                            onClick={e => itemClick(pokemone, pokemonData)}
                        />
                    </TableRowColumn>
                    <TableRowColumn >
                        <FontIcon className='fa fa-star'
                            color={fav.indexOf(pokemone.name) < 0? 'rgba(0,0,0,0.3)' : 'red'}
                            onClick={e => dispatch({type:'fav', payload : pokemone.name })}
                        />
                    </TableRowColumn>
                    
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
        );
    };


export default connect(state => ({ fav: state.fav}))(PokemonList);