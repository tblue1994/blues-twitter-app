using Core.Types;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IPokemonApiAccessor
    {
        Task<Pokemon> GetPokemonById(int id);
    }
}