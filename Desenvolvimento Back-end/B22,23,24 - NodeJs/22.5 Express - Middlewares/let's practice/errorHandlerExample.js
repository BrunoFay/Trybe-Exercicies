/*Attention ⚠️: We should never read a file from the file system in this way. Concatenating parameters received from the user directly into the call to any method represents a massive security flaw. We're going to do that here right now for teaching purposes. Again: don't try this at home in production! */
/* errorHandlerExample.js */
const express = require('express');
const fs = require('fs/promises');

const app = express();

app.get('/:fileName', async (req, res, next) => {
    try {
        const file = await fs.readFile(`./${req.params.fileName}`);
        res.send(file.toString('utf-8'));
    } catch (e) {
        next(e);
    }
});

app.use(function (err, req, res, next) {
  res.status(500).json({ error: `Erro: ${err.message}` });
});

app.listen(3002);