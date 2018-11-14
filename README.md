# simple-pokemon-stats
react/.net app that interacts with the free pokemon api

Ever since I discovered there was a Pokemon API (found here: https://pokeapi.co/), I've thought about creating a little side project that integrates with it. 
I finally had a reason to, so I thought I would give it a try

This app has a button that generates a random ID (from 1 to 807) and grabs the pokemon with that ID from the Pokemon API. Then it displays the pokemons's id, name, height, weight, types and sprite, like a mini pokedex.

To build, simply clone the repository and follow the build patterns for any .NET core app. 
If you use visual studio, you only need to open the generated .csproj file, and run the app as normal from there.
The build process restores npm dependencies on the first run, which can take several minutes. Subsequent builds are much faster.

To create thsi app, I used a template found here: https://docs.microsoft.com/en-us/aspnet/core/client-side/spa/react?view=aspnetcore-2.1&tabs=visual-studio
