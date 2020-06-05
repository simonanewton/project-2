const db = require("../models");

module.exports = (app) => {
    app.get("/api/signup", async (req, res) => {
        // create an array of all users in the database
        const users = await db.newUser.findAll({});

        // send the array of users to the response
        res.json(users);
    });

    app.post("/api/signup", async (req, res) => {
        // create an array of all users in the database
        const user = await db.newUser.create({
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        });

        // redirect to post /api/login
        res.redirect(307, "/api/login");
    });

    app.post("/api/login", async (req, res) => {
        res.json(req.body);
    });

    app.get("/api/posts", async (req, res) => {
        // create an array of all posts in the database
        const posts = await db.Post.findAll({});

        // send the array of posts to the response
        res.json(posts);
    });

    app.post("/api/posts", async (req, res) => {
        // create a new post with the new-post model
        const post = await db.Post.create({
            title: req.body.title,
            body: req.body.body
        });

        // send the post to the response in a JSON format
        res.json(post);
    });
}
