const express = require('express');
const router = express.Router();
const Order = require('../models/order');
const auth = require('../middleware/auth');

router.post('/', auth, async (req, res) => {
  try {
    const { items, total } = req.body;
    const order = new Order({
      user: req.user.id,
      items,
      total
    });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error creating order' });
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders' });
  }
});

module.exports = router;