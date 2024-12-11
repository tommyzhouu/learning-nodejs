import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello!</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1><p>My name is Tom</p>")
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact</h1><p>My contact number is 01617988628</p>")
});

app.get("/login", (req, res) => {
    res.send(`<body><form action="/login" method="POST">
    <label for="email">Email</label>
    <input type="text" name="email" required>
    <label for="password">Password</label>
    <input type="password" name="password" required>
    <input type="submit" value="Submit">
</form></body>`);
});

app.post("/register", (req, res) => {
    res.sendStatus(201);
});

app.put("/user/tom", (req, res) => {
    res.sendStatus(200);
});

app.patch("/user/tom", (req, res) => {
    res.sendStatus(200);
});

app.delete("/user/tom", (req, res) => {
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});

