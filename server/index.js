const express = require("express");
const bodyParser = require("body-parser");
var request = require("request");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api/items", (req, res) => {
  const query = req.query.q;
  if (!query) {
    res.status(500);
    res.send({
      Error:
        "No se mostrara ningun resultado sino se ingresa algun criterio de búsqueda"
    });
  }
  request.get(
    { url: "https://api.mercadolibre.com/sites/MLA/search?q=" + query },
    function(error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(JSON.parse(body).results);
      }
    }
  );
});

app.get("/api/item/:id", (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(500);
    res.send({ Error: "No se enviando el id de producto" });
  }
  request.get({ url: "https://api.mercadolibre.com/items/" + id }, function(
    error,
    response,
    body
  ) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(body).results);
      console.log(body);
    }
  });
});

app.listen(3001, () =>
  console.log("Express server is running on localhost:3001")
);

app.use(function(req, res, next) {
  res.status(404).send("Sorry cant find that!");
});
