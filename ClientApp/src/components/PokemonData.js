import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';

export class PokemonData extends Component {
    displayName = PokemonData.name

    constructor(props) {
        super(props);

    }
    static renderPokemonTable(pokemon) {

        return (
            <Grid fluid>
                <Row>
                    <Col sm={2}>
                        <Grid fluid>
                            <Row>
                                <Col sm={3} style={{ 'text-align': 'left' }}>
                                    <h3>#{pokemon.id}</h3>
                                </Col>
                                <Col sm={9} style={{ 'text-align': 'right' }}>
                                    <h3>{pokemon.name}</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12} style={{ 'text-align':'center'}}>
                                    <img src={pokemon.sprite} />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={6} style={{ 'text-align': 'left' }}>
                                    <div>
                                        <b>Height</b>
                                    </div>
                                    {pokemon.height} m
                                </Col>
                                <Col sm={6} style={{ 'text-align': 'right' }}>
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



            //<table className='table'>
            //    <thead>
            //        <tr>
            //            <th>ID</th>
            //            <th>Name</th>
            //            <th>Height</th>
            //            <th>Weight</th>
            //            <th>Sprite</th>
            //        </tr>
            //    </thead>
            //    <tbody>
            //        <tr key={pokemon.id}>
            //            <td>{pokemon.id}</td>
            //            <td>{pokemon.name}</td>
            //            <td>{pokemon.height}</td>
            //            <td>{pokemon.weight}</td>
            //            <td><img src={pokemon.sprite} /></td>
            //        </tr>
            //    </tbody>
            //</table>
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
