const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const Events = require("./models/events");
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();


const PORT = process.env.PORT || 8080;
const initData = require("./models/data.js");
const Listing = require("./models/events.js");
// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(cors());
app.use(express.json());

const initDB = async () => {
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();

app.get("/cards", async (req, res) => {
    const cards = await Events.find();
    res.json(cards);
});

app.get("/event/:id",async(req,res)=>{
    console.log(req.params.id);
    const result=await Events.findOne({_id:req.params.id}).exec();
    res.status(200).json(result);
})

// Search route
app.get("/search", async (req, res) => {
    try {
        const { query } = req.query;
        console.log(query);
        const searchRegex = new RegExp(query, "i");

        const events = await Events.find({
            $or: [
                { title: { $regex: searchRegex } },
                { location: { $regex: searchRegex } },
                { category: { $regex: searchRegex } },
            ],
        });
        console.log("Search Route");

        res.json(events);
    } catch (err) {
        res.status(500).send("Server error");
    }
});

// New Route
app.post("/cards/new", async (req, res) => {
    try {
        const newEvent = new Events(req.body);
        await newEvent.save();
        res.status(201).json({
            newEvent,
            redirectUrl: `/cards`,
        });
    } catch (error) {
        res.status(500).json({ message: "Failed to create event", error });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });