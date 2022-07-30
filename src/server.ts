import express from 'express'

const app = express();

app.get("/", (request, response) => {
    return response.json({mgs: "hello horld"});
});

app.listen(3333, () => console.log("app it is running"));