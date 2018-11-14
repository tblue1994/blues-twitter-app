import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';

export class PokemonData extends Component {
    displayName = PokemonData.name
    
    static renderPokemonTable(pokemon) {

        return (
            <Grid fluid>
                <Row>
                    <Col sm={3}>
                        <Grid fluid>
                            <Row>
                                <Col sm={3} style={{ 'textAlign': 'left' }}>
                                    <h3>#{pokemon.id}</h3>
                                </Col>
                                <Col sm={9} style={{ 'textAlign': 'right' }}>
                                    <h3>{pokemon.name}</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12} style={{ 'textAlign':'center'}}>
                                    <img src={pokemon.sprite} alt='Pokemon sprite' />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12} style={{ 'textAlign': 'center' }}>
                                    <div>
                                        <b>Type</b>
                                    </div>
                                    {pokemon.type}
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6} style={{ 'textAlign': 'left' }}>
                                    <div>
                                        <b>Height</b>
                                    </div>
                                    {pokemon.height} m
                                </Col>
                                <Col sm={6} style={{ 'textAlign': 'right' }}>
                                    <div>
                                        <b>Weight</b>
                                    </div>
                                    {pokemon.weight} kg
                                </Col>
                            </Row>
                        </Grid>
                    </Col>
                </Row>
            </Grid>
        );
    }
    getData() {
        
    }

    render() {
        let contents;

        if (this.props.showData) {
            if (this.props.loading) {
                contents = <p><em>Loading...</em></p>
            } else {
                contents = PokemonData.renderPokemonTable(this.props.pokemon);
            }
        } else {
            contents = "";
        }

        return (
            <div>
                {contents}
            </div>
        );
    }
}
