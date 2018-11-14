using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Types
{
    public class Sprites
    {
        [JsonProperty("front_default")]
        public string FrontDefaultURL { get; set; }
    }
}
