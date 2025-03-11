import { GraphqlModel } from "../../utils/graphql/exts";
import { queryAll, queryOne, mutationCreate } from "../../utils/graphql";

interface WebUser {
  id: number;
  createdAt: Date;
}

interface Pokemon {
  id: number;
  name: string;
  favorite: Boolean;
  createdAt: Date;
  webuser: WebUser;
}

const testTing = async () => {
  const pokeFields = {
    id: Number,
    name: String,
    favorite: Boolean,
    createdAt: Date,
    webuser: {
      id: Number,
      createdAt: Date,
    },
  };

  const where = {
    _and: [
      {
        webuser: {
          emailAddress: { eq: "a@a.com" },
        },
      },
    ],
  };

  const sort: Sort = {
    field: "name",
    order: "ASC",
  };

  const newPokemonData = { name: "Panda 0", weight: 150 };
  const newPokemonsData = [
    { name: "Panda 1", weight: 150 },
    { name: "Panda 2", weight: 150 },
  ];

  // const dataOne = await queryOne<Pokemon>("Pokemon", { fields: pokeFields, queryArguments: { where: where } });
  // const { totalCount, data: dataAll } = await queryAll<Pokemon>("Pokemon", {
  //   fields: pokeFields,
  //   queryArguments: {
  //     where: where,
  //     take: 10,
  //     skip: 5,
  //     sort: sort,
  //     totalCount: true,
  //   },
  // });
  const newPokemon = await mutationCreate("Pokemon", newPokemonData);

  throw new Error(JSON.stringify(newPokemon));

  // const count = await modelCount("Pokemon", where);

  // const newPokemon = await mutationCreate("Pokemon", newPokemonData);
  // const createPokemons = await mutationCreateMany("Pokemon", newPokemonsData);
  // const deletePokemon = await mutationDelete("Pokemon", 133);
  // const deletePokemons = await mutationDeleteMany(
  //   "Pokemon",
  //   [134, 135, 136, 137, 138],
  // );
  // const updatePokemon = await mutationUpdate("Pokemon", 139, {
  //   name: "Panda!!!",
  // });
  // const updatePokemons = await mutationUpdateMany(
  //   "Pokemon",
  //   { name: "Panda SAME2!!!" },
  //   { id: { in: [139, 140] } },
  // );
  //
  // const upsertPokemon = await mutationUpsert(
  //   "Pokemon",
  //   {
  //     pokemonId: "unique:999",
  //     name: "Panda UP!!!",
  //     weight: 150,
  //   },
  //   ["pokemonId"],
  // );
  // const upsertPokemons = await mutationUpsertMany("Pokemon", [
  //   {
  //     id: "999",
  //     name: "Panda UP!!!",
  //     weight: 150,
  //   },
  //   {
  //     id: "1000",
  //     name: "Panda UP2!!!",
  //     weight: 150,
  //   },
  // ]);

  // const pokemonModel = new GraphqlModel("Pokemon");

  // // const pokemonAmount = await pokemonModel.modelCount();
  // const fetchAllPokemons = await pokemonModel.queryAll<Pokemon>(pokeFields);

  // throw new Error(JSON.stringify(fetchAllPokemons));
};

export default testTing;
