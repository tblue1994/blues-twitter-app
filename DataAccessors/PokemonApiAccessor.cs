using Core.Interfaces;
using Core.Types;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace DataAccessors
{
    public class PokemonApiAccessor : IPokemonApiAccessor
    {
        public PokemonApiAccessor()
        {

        }
        
        public async Task<Pokemon> GetPokemonById(int id)
        {
            Pokemon pokemon = null;
            using (HttpClient client = new HttpClient())
            {
                HttpResponseMessage response = await client.GetAsync($"https://pokeapi.co/api/v2/pokemon/{id}/");
                if (response.IsSuccessStatusCode)
                {
                    pokemon = await response.Content.ReadAsAsync<Pokemon>();
                }
                return pokemon;
            }
        }
    }
}