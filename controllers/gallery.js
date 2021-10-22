const find = require("lodash/find");

module.exports = {
  getAllArts: function () {
    const artGallery = [
      {
        id: "be27589d-253f-4c98-aefa-a1e1e363e15c",
        name: "Susan",
        artist_name: "Susan",
        description:
          "While living in one's body an individual has conjunction with heaven through the angels",
        image_url:
          "https://firebasestorage.googleapis.com/v0/b/art-gallery-80afa.appspot.com/o/gallery%2Fsusan.jpg?alt=media&token=7132f1ab-5e72-417a-acf7-26f77dc0021d",
      },
      {
        id: "69420241-f192-466c-b32d-84af1eb86926",
        name: "Mona Lisa",
        artist_name: "Leonardo da Vinci",
        description:
          "The model, Lisa del Giocondo, In French, the title La Joconde has the same meaning.",
        image_url:
          "https://firebasestorage.googleapis.com/v0/b/art-gallery-80afa.appspot.com/o/gallery%2Fmona-lisa.jpeg?alt=media&token=7051896e-e4e3-4244-ae4d-4ed9f9489806",
      },
      {
        id: "43459127-caf6-48a9-b589-d74e0f7aa921",
        name: "Surprised baby",
        artist_name: "Some father",
        description:
          "Over the first 5–7 days following birth, the body weight of a term neonate decreases by 3–7%",
        image_url:
          "https://firebasestorage.googleapis.com/v0/b/art-gallery-80afa.appspot.com/o/gallery%2Fbaby.jpeg?alt=media&token=a8e215d1-30c7-4c09-a7df-2bbe55d475d1",
      },
      {
        id: "91753dc5-160e-4713-8b7f-af0e34ff3a76",
        name: "Pi-tongue",
        artist_name: "A random person",
        description:
          "Dogs have more taste buds on their tongue than cats, but not nearly as many as humans.",
        image_url:
          "https://firebasestorage.googleapis.com/v0/b/art-gallery-80afa.appspot.com/o/gallery%2Fdog.jpeg?alt=media&token=adc43ffd-9a2d-4dbb-a6dd-227f5e55190f",
      },
      {
        id: "1e2a8870-f1fc-4477-8989-6f5d939d38c0",
        name: "Human?",
        artist_name: "Nature",
        description:
          "Seeing faces in trees correlates to creativity, and cognitive scientists are taking interest",
        image_url:
          "https://firebasestorage.googleapis.com/v0/b/art-gallery-80afa.appspot.com/o/gallery%2Ftree.jpeg?alt=media&token=c559fc88-9ae1-4322-9aaf-a73e8866e20a",
      },
      {
        id: "d5c3d054-749b-41f4-b9a5-c40a27b5e299",
        name: "Cutie cat",
        artist_name: "Katy",
        description:
          "Cats are common pets throughout the world, and their worldwide population as of 2007 exceeded 500 million.",
        image_url:
          "https://firebasestorage.googleapis.com/v0/b/art-gallery-80afa.appspot.com/o/gallery%2Fcat.jpeg?alt=media&token=4a380627-7bcf-43cf-a133-7939a528566f",
      },
      {
        id: "042d176b-c358-4062-84a1-e4455914a85f",
        name: "Red light, Green light",
        artist_name: `"Squid game"'s doll`,
        description:
          "If the red light appear, I will stop moving. The doll is crazy, following the rules that's all I can do so I can survive.",
        image_url:
          "https://firebasestorage.googleapis.com/v0/b/art-gallery-80afa.appspot.com/o/gallery%2Fdog-freeze.jpeg?alt=media&token=dcaa3a48-5ec0-483c-96a9-83501dd3620b",
      },
      {
        id: "70a7dac9-c417-4ccd-b8c4-59e9be2dd4d2",
        name: "Watercolor",
        artist_name: "Watercolor",
        description:
          "Wild watermelon seeds have been found in the prehistoric Libyan site of Uan Muhuggiag. There is also evidence from seeds in Pharaoh tombs of watermelon cultivation in Ancient Egypt.",
        image_url:
          "https://firebasestorage.googleapis.com/v0/b/art-gallery-80afa.appspot.com/o/gallery%2Fwatermelon.jpeg?alt=media&token=1d9da123-07d9-47b0-a11c-b4c0189c71fc",
      },
    ];
    return artGallery;
  },
  getArtById: function ({ art_id }) {
    return find(this.getAllArts(), { id: art_id });
  },
};
