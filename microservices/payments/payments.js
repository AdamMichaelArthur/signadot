const express = require('express');

const app = express();

app.get('/updateSubscription', (req, res) => {
	res.status(200);
	res.json({ "subscription_updated": true });
});

app.get('/cancelSubscription', (req, res) => {
	res.status(200);
	res.json({ "subscription_cancelled": true });
});

app.get('/getSubscriptions', (req, res) => {
	res.status(200);
	res.json({ "subscriptions": [] });
});

app.post('/startSubscription', (req, res) => {
	res.status(200);
	res.json({ "subscription_started": true });
});

const port = 4003;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
