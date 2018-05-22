import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import PokemonGrid from './PokemonGrid';
import PokemonList from './PokemonList';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { toFavAddRemove } from '../services/FavPokeom';


export default class PokemonView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            listgrid: false,
            open:false,
            pokemone : {},
            pokemonData: { detail: {}}
        };
    }

    handleClose = () => {
        this.setState({ open: false });
    };
    handleOpen = (pokemone, pokemonData) => {
        this.setState({ open: true, pokemone, pokemonData});
    };

    fav = (obj) => {
        toFavAddRemove(obj);
        this.forceUpdate();
    }

    render() {
        const { pokemonData } = this.props;
        const pkdetail = this.state.pokemonData.detail[this.state.pokemone.name] || { sprites : {}};
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />
        ];
        return (
            <div>
            <Toolbar>
                <ToolbarGroup>
                    <ToolbarTitle text="View Mode" />
                    <ToolbarSeparator />
                    <FontIcon className={this.state.listgrid ? 'fa fa-th-large' : 'fa fa-list'}
                        onClick={e => this.setState({ listgrid: !this.state.listgrid})}
                     />
                </ToolbarGroup>
            </Toolbar>
                {this.state.listgrid ? <PokemonGrid fav={this.fav} pokemonData={pokemonData} itemClick={this.handleOpen}/>
                    : <PokemonList fav={this.fav} pokemonData={pokemonData} itemClick={this.handleOpen}/> }

                <Dialog
                    title={'Pokemon : ' +this.state.pokemone.name}
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}
                >
                    <table>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td> {this.state.pokemone.name} </td>
                            </tr>
                            <tr>
                                <td>Sprite Default</td>
                                <td> <img src={pkdetail.sprites.back_default} /></td>
                            </tr>
                            <tr>
                                <td>Sprite back shiny</td>
                                <td> <img src={pkdetail.sprites.back_shiny} /></td>
                            </tr>
                            <tr>
                                <td>Sprite front default</td>
                                <td> <img src={pkdetail.sprites.front_default} /></td>
                            </tr>
                            <tr>
                                <td>Sprite frontmshiny</td>
                                <td> <img src={pkdetail.sprites.front_shiny} /></td>
                            </tr>
                        </tbody>
                    </table>
                </Dialog>
            </div>
        );
    }
}