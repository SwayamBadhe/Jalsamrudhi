import Razorpay from 'razorpay';
import crypto from 'crypto';
import { Request, Response } from 'express';

const razorpay = new Razorpay({
  key_id: 'rzp_test_a6p988jDCASdbT',
  key_secret: 'O6KOqMfPuiIfFrUcmMOcQ9Ne',
});

const order = async (req: Request, res: Response) => {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID || '',
      key_secret: process.env.RAZORPAY_SECRET || '',
    });

    const options = req.body;
    const order = await razorpay.orders.create(options);

    if (!order) {
      return res.status(500).send('Error');
    }

    res.json(order);
  } catch (err) {
    console.log(err);
    res.status(500).send('Error');
  }
};

const validateOrder = async (req: Request, res: Response) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const sha = crypto.createHmac('sha256', process.env.RAZORPAY_SECRET || '');
  sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
  const digest = sha.digest('hex');
  if (digest !== razorpay_signature) {
    return res.status(400).json({ msg: 'Transaction is not legit!' });
  }

  res.json({
    msg: 'success',
    orderId: razorpay_order_id,
    paymentId: razorpay_payment_id,
  });
};

export { order, validateOrder };
