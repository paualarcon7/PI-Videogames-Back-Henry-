const services = require("../services/services");

const allVideogames = async (req, res) => {
  const { name } = req.query;
  const videogames = await services.allVideogames();

  if (name) {
    const filter = await services.filterByName(name);
    if (filter.length === 0) res.status(404).send("No coincidences were found");

    res.status(200).send(filter);
  } else {
    res.status(200).send(videogames);
  }
};

const createVideogame = async (req, res) => {
  const { name, description, platforms, genres, released, rating, image } = req.body;
  if (!name || !description || !platforms || !genres || !released || !rating || !image) {
    res.status(400).send("Mandatory info missing");
  } else {
    await services.createVideogame(name, description, platforms, genres, released, rating, image);
    return res.status(200).send("Videogame created successfully!");
  }
};

const getGenres = async (req, res) => {
  const genres = await services.getGenres();
  res.status(200).send(genres);
};

const videogamesById = async (req, res) => {
  const { id } = req.params;
  const byId = await services.filterById(id);
  if (!id) res.status(400).send("The specified videogame was not found");

  res.status(200).send(byId);
};

module.exports = { allVideogames, createVideogame, getGenres, videogamesById };
