import React from 'react';
import {
    Table,
    TableBody,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
  import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import { reduxForm, formValueSelector  } from 'redux-form';
import { Validation } from '../utility/validationUtility';
import { connect } from 'react-redux';
import { URLS } from "../constants/URL";
import PokemonView from './PokemonView';

const http = (url, callback) => {
  axios.get(url).then(callback);
};


// add user component
class Confirugation extends React.Component {
  constructor(props) {
    super(props);    
    this.state = {next:null, previous: null};
    this.queuq = [];
  }

  componentWillMount(){   
  }

  componentWillReceiveProps() { 
  }

  pokeMonDetail() {
    const { dispatch } = this.props;
    if(this.queuq.length === 0) 
    return;

    const name = this.queuq.shift();
    http(URLS.pokemanform + name, (res)=>{      
      dispatch({type: 'detail', payload: {name: name, data: res.data}});
      this.pokeMonDetail();
    });
  }

  componentDidMount(url){
    const { dispatch } = this.props;
    dispatch({type: 'init'});
    this.queuq = [];
    http(url || URLS.pokeman, (res)=>{
      this.setState({next: res.data.next, previous: res.data.previous});
      res.data.results.map((pokemon)=>this.queuq.push(pokemon.name));
      this.pokeMonDetail();
      dispatch({type: 'list', payload: res.data.results});
    });
  }

  submitForm(data) {
   
  }

  render() {

    const { pokemonData } = this.props;
    return (
        <div>
          <div className="btncontainer">
            <RaisedButton disabled={this.state.previous == null} onClick={e=>this.componentDidMount(this.state.previous)} label='previous' primary={true} />
            <RaisedButton disabled={this.state.next == null} onClick={e=>this.componentDidMount(this.state.next)} label='next' primary={true} />
            </div>
            <PokemonView pokemonData={pokemonData}/>
        </div>
    );
  }
}
// valid user field
const validate = values => {
    const errors = {};
    Validation.required(values, errors, 'searchTerm');    
    return errors;
  };


  const selector = formValueSelector('pokemon_form');
  // add user component
  Confirugation = reduxForm({
    form: 'pokemon_form',
    enableReinitialize: true,
    validate
})(Confirugation);

export default connect(state=>({ pokemonData: state.pokemonData,  formData: selector(state, 'searchTerm')}))(Confirugation);