const express = require(`express`);
const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb://localhost:27017');

const app = express();

    app.get('/api/locations', (req, res) => {
        client.connect((err, client) => {
            if (err) {
                console.error('error', err);
                res.send('error');
            }
            const immodb = client.db('immo');
            const locations = immodb.collection('locations');
            const cursor = locations.find();
            cursor.toArray((err, data) => {
                if (err) {
                    console.log('toArray error', err);
                    res.send('error');
                }
                res.json(data);
            });
        });
    });

    app.get(`/`, (req, res) => {
        res.send("Hello World");
    });

    app.listen(3000, () => console.log('prêt sur http://localhost:3000'));

