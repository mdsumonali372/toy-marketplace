const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("toy server rnning");
});

const {
  MongoClient,
  ServerApiVersion,
  ObjectId,
  MongoAWSError,
} = require("mongodb");
const { text } = require("express");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.a9mbcuv.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    client.connect();

    const productCollection = client
      .db("animalToysDB")
      .collection("toyCollection");

    // const indexKeys = { toyName: 1, category: 1 };
    // const indexOptions = { name: "toyNameCategory" };

    // const result = await productCollection.createIndex(indexKeys, indexOptions);

    // add toy
    app.post("/alltoys", async (req, res) => {
      const product = req.body;
      // console.log("new product", product);
      const result = await productCollection.insertOne(product);
      res.send(result);
    });

    // search text
    app.get("/toySearch/:text", async (req, res) => {
      const searchText = req.params.text;
      const result = await productCollection
        .find({
          $or: [
            { toyName: { $regex: searchText, $options: "i" } },
            { category: { $regex: searchText, $options: "i" } },
          ],
        })
        .toArray();
      res.send(result);
    });
    // get toy
    app.get("/alltoys", async (req, res) => {
      try {
        const result = await productCollection
          .find()
          .sort({ _id: -1 })
          .toArray();
        res.send(result);
      } catch (error) {
        res.status(500).json({ error: "Internal server error" });
      }
    });

    app.get("/alltoys/:category", async (req, res) => {
      // console.log(req.params.category);
      if (
        req.params.category === "teddy bear" ||
        req.params.category === "horse" ||
        req.params.category === "dogs"
      ) {
        const result = await productCollection
          .find({ category: req.params.category })
          .toArray();
        res.send(result);
      }
    });

    // get toy email
    app.get("/mytoys/:email", async (req, res) => {
      try {
        const { email } = req.params;
        const { sort } = req.query;

        const result = await productCollection
          .find({ sellerEmail: email })
          .toArray();

        // Convert the price field to an integer
        const products = result.map((product) => ({
          ...product,
          price: parseInt(product.price),
        }));

        // Sort the products based on the price
        if (sort === "asc") {
          products.sort((a, b) => a.price - b.price); // Ascending order
        } else if (sort === "desc") {
          products.sort((a, b) => b.price - a.price); // Descending order
        }

        res.send(products);
      } catch (error) {
        res.status(500).json({ error: "Internal server error" });
      }
    });

    // view details
    app.get("/viewdetails/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await productCollection.findOne(query);
      res.send(result);
    });

    // update toy
    app.put("/toyupdated/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedToy = req.body;
      const toys = {
        $set: {
          toyName: updatedToy.toyName,
          toyImg: updatedToy.toyImg,
          category: updatedToy.category,
          price: updatedToy.price,
          quantity: updatedToy.quantity,
          rating: updatedToy.rating,
          description: updatedToy.description,
        },
      };
      const result = await productCollection.updateOne(filter, toys, options);
      res.send(result);
    });

    // delete one
    app.delete("/mytoys/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const result = await productCollection.deleteOne(filter);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`server is running this port: ${port}`);
});
