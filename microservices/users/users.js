const express = require('express');
const axios = require("axios");

const app = express();

app.get('/getSubscriptions', (req, res) => {
  res.status(200)
  res.json({"working": true})
});

app.get('/getPaymentHistory', (req, res) => {
  res.status(200)
  res.json({"working": true})
});

app.post('/getOrderHistory', (req, res) => {
  res.status(200)
  res.json({"working": true})
});

app.post('/getDashboard', async (req, res) => {
	var config = {
	  method: 'get',
	  url: 'http://localhost:4004/getSubscriptions',
	  headers: { }
	};

	var subscriptions = [];
	var orders = [];

	try {
		subscriptions = await axios({  method: 'get', url: 'http://localhost:4003/getSubscriptions', headers: { } } )
		subscriptions = subscriptions.data
	} catch(err){
		res.status(400)
	    res.json({ "working": false, "msg":"Unable to get subscriptions" })
	    return;
	}

	try {
		orders = await axios({  method: 'get', url: 'http://localhost:4002/getOrders', headers: { } } )
		orders = orders.data
	} catch(err){
		res.status(400)
	    res.json({ "working": false, "msg":"Unable to get orders" })
	    return;
	}

	res.status(200)
	res.json( {"dashboard": { "subscriptions": subscriptions, "orders":orders } } )

});

const port = 4004;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

