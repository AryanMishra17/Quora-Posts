const express = require("express");
const app = express();
const port = 8080; 
const path = require("path");
const {v4: uuidv4}=require('uuid');
const methodOverride=require('method-override');

app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: uuidv4(),
        name: "John",
        content: "Hello, how are you?",
    },
    {
        id:uuidv4(),
        name: "Jane",
        content: "I am good, thanks.",
    },
    {
        id:uuidv4(),
        name: "Bob",
        content: "I am fine, thanks.",
    }
];

app.listen(port, () => {
    console.log("server is starting on port : " + port);
});

app.get('/posts', (req, res) => {
    res.render("index.ejs", { posts });
});

app.get('/posts/new', (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let newid=uuidv4();
    posts.push({id:newid, name: username, content });
    res.redirect("/posts"); 
});

app.get('/posts/:id', (req, res) => {
    let{id} = req.params;
    let postid=posts.find((p)=>id === p.id);
    res.render("show.ejs",{ post:postid});
});

app.patch('/posts/:id', (req, res) => {
    let{id} = req.params;
    let newcontent=req.body.content;
    let postid=posts.find((p)=>id === p.id); 
    postid.content=newcontent;
    res.redirect("/posts");
});

app.get('/posts/:id/edit', (req, res) => {
    let{id} = req.params;
    let postid=posts.find((p)=>id === p.id); 
    res.render("edit.ejs",{post:postid});
});

app.delete('/posts/:id', (req, res) => {
    let{id} = req.params;
    posts=posts.filter((p)=>id !== p.id);
    res.redirect("/posts");
});
