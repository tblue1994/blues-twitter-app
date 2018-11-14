import React, { Component } from 'react';
import { PokemonData } from './PokemonData';
import { Button, ButtonToolbar } from 'react-bootstrap';

export class PokeWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = { pokemon: {}, showData: false, loading: false };
        this.paddingTopStyle = {
            paddingTop: '25px'
        };
    }

    fireEvent() {
        fetch(`api/Pokemon/`)
            .then(response => response.json())
            .then(data => {
                this.setState({ pokemon: data, showData: true, loading: false });
            });
        this.setState({ pokemon: {}, showData: true, loading: true });
    }

    

    render() {
        return (
            <div>
                <div style={this.paddingTopStyle}>
                    <ButtonToolbar>
                        <Button bsStyle="primary" onClick={this.fireEvent.bind(this)} >Get Random Pokemon</Button>
                    </ButtonToolbar>
                </div>
                <div style={this.paddingTopStyle}>
                    <PokemonData showData={this.state.showData} pokemon={this.state.pokemon} loading={this.state.loading} ></PokemonData>
                </div>
            </div>
        );
    }
}