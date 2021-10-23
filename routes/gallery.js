const express = require("express");
const galleryController = require("../controllers/gallery");
const isEmpty = require("lodash/isEmpty");

const router = express.Router();

router.get("/get/:id", (req, res) => {
  try {
    const art_id = req.params.id;
    const art = galleryController.getArtById({ art_id });
    if (isEmpty(art)) {
      return res.status(404).send({
        error_type: "NOT_FOUND",
        error_description: "Couldn't find art, the given art_d doesn't exist",
      });
    }

    return res.status(200).send(art);
  } catch (error) {
    console.log("There was an error on get art request");
    console.log(error);
    return res.status(500).send({
      error_type: "INTERNAL_ERROR",
      error_description: "There was an error on get art request",
    });
  }
});

router.get("/getall", (req, res) => {
  try {
    const arts = galleryController.getAllArts();
    return res.status(200).send(arts);
  } catch (error) {
    console.log("There was an error on get all arts request");
    console.log(error);
    return res.status(500).send({
      error_type: "INTERNAL_ERROR",
      error_description: "There was an error on get all arts request",
    });
  }
});

module.exports = router;
