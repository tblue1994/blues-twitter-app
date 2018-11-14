using Core.Interfaces;
using Core.Types;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;

namespace Managers
{
    public class PokemonManager : IPokemonManager
    {
        private IPokemonApiAccessor _pokemonApiAccessor;
        private const int total_number_of_pokemon = 807;

        public PokemonManager(IPokemonApiAccessor pokemonApiAccessor)
        {
            _pokemonApiAccessor = pokemonApiAccessor;
        }

        public async Task<PokemonDTO> GetRandomPokemon()
        {
            //get random number
            int id = GetRandomNumber();
            //make api call
            Pokemon randomPokemon = await _pokemonApiAccessor.GetPokemonById(id);
            //process the data
            var randPokemonDTO = new PokemonDTO()
            {
                Id = randomPokemon.Id,
                Name = GetTitleCase(randomPokemon.Name),
                //this api aparently stores their heights and weight in weird measurements. need to divide by 10 to get value in kg and m
                Weight = Convert.ToDouble(randomPokemon.Weight) / 10,
                Height = Convert.ToDouble(randomPokemon.Height) / 10,
                Sprite = new Uri(randomPokemon.Sprites.FrontDefaultURL)
            };
            //return data
            return randPokemonDTO;
        }

        private int GetRandomNumber()
        {
            Random rnd = new Random();
            return rnd.Next(1, total_number_of_pokemon);
        }

        private string GetTitleCase(string lowerCaseName)
        {
            TextInfo textInfo = new CultureInfo("en-US", false).TextInfo;
            return textInfo.ToTitleCase(lowerCaseName);
        }
    }
}
