const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/", (req, res) => {
    res.json({
        email: "Manifestomixx@gmail.com",
        current_dateTime: new Date().toISOString(),
        github_url: "https://github.com/Manifestomixx/profile-card.git"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})