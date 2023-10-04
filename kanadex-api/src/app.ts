import express, { Express } from 'express'

import attachment_routes from './attachments/routes';

const port = 5050;

const app: Express = express();


app.get('/hello', (req, res) => {
    res.send('Hello world!')
});

app.use(attachment_routes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});