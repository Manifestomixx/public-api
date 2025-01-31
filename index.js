const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// API Endpoint
app.get("/", (req, res) => {
    res.status(200).json({
        email: "Manifestomixx@gmail.com",
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/Manifestomixx/profile-card.git",
        backlink: "https://hng.tech/hire/nodejs-developers"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})