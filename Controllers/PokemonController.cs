using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Interfaces;
using Core.Types;
using Microsoft.AspNetCore.Mvc;

namespace blues_twitter_app.Controllers
{
    [Route("api/[controller]")]
    public class PokemonController : Controller
    {
        private IPokemonManager _pokemonManager;
        public PokemonController(IPokemonManager pokemonManager)
        {
            _pokemonManager = pokemonManager;
        }

        [HttpGet()]
        public async Task<PokemonDTO> GetRandomPokemonAsync()
        {
            return  await _pokemonManager.GetRandomPokemon();
        }
    }
}
