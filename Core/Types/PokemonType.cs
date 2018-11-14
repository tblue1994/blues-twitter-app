using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Types
{
    public class PokemonType
    {
        [JsonProperty("slot")]
        public TypeSlot Slot { get; set; }

        [JsonProperty("type")]
        public TypeData Data { get; set; }
    }

    public class TypeData
    {
        [JsonProperty("name")]
        public string Name { get; set; }
    }

    public enum TypeSlot
    {
        Primary = 1,
        Secondary = 2
    }
}
