const express = require('express');

const app = express();

app.get('/getOrders', (req, res) => {
	res.status(200);
	res.json([
		{
			"order_num":0,
			"product_id":1,
			"price":1.25,
			"product_desc":"A very useful item"
		},
		{
			"order_num":1,
			"product_id":2,
			"price":50.00,
			"product_desc":"A very popular item"
		},
		{
			"order_num":2,
			"product_id":3,
			"price":2000,
			"product_desc":"A very expensive item"
		}
	]);
	return true;
});

app.get('/getOrder', (req, res) => {
	res.status(200);
	res.json({
			"order_num":0,
			"product_id":1,
			"price":1.25,
			"product_desc":"A very useful item"
		});
});

app.post('/placeOrder', (req, res) => {
	res.status(200);
	res.json({ "order_placed": true });
});


const port = 4002;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

