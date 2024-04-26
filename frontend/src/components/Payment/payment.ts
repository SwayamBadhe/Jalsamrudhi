import axios from 'axios';

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  image: string;
  order_id: string;
  handler: (response: any) => void;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  notes: {
    address: string;
  };
  theme: {
    color: string;
  };
}

interface RazorpayInstance {
  on(event: string, callback: (response: any) => void): void;
  open(): void;
}

declare global {
  interface Window {
    Razorpay: {
      new (options: RazorpayOptions): RazorpayInstance;
    };
  }
}

interface PaymentHandler {
  (
    // e: React.MouseEvent<HTMLButtonElement>,
    amount: number,
    name: string,
    email: string,
    mobileNo: number
  ): Promise<void>;
}

export const Payment: PaymentHandler = async (
  amount,
  name,
  email,
  mobileNo
) => {
  const mobileNumber = String(mobileNo);
  const newAmount = amount * 100;
  const response = await axios.post('http://localhost:5500/order', {
    amount: newAmount,
    currency: 'INR',
    // receipt: receiptId,
  });
  const order = await response.data;
  // console.log(order);

  var options = {
    key: 'rzp_test_GkhWJfJbqiIQjD', // Enter the Key ID generated from the Dashboard
    amount: newAmount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: 'INR',
    name: 'Acme Corp', //your business name
    description: 'Test Transaction',
    image: 'https://example.com/your_logo',
    order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    handler: async function (response: any) {
      const body = {
        ...response,
      };

      const validateRes = await axios.post(
        'http://localhost:5500/order/validate',
        body,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const jsonRes = await validateRes.data;
      // console.log(jsonRes);
    },
    prefill: {
      //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
      name, //your customer's name
      email,
      contact: mobileNumber, //Provide the customer's phone number for better conversion rates
    },
    notes: {
      address: 'Razorpay Corporate Office',
    },
    theme: {
      color: '#3399cc',
    },
  };
  var rzp1 = new window.Razorpay(options);
  rzp1.on('payment.failed', function (response: any) {
    alert(response.error.code);
    alert(response.error.description);
    alert(response.error.source);
    alert(response.error.step);
    alert(response.error.reason);
    alert(response.error.metadata.order_id);
    alert(response.error.metadata.payment_id);
  });
  rzp1.open();
  // e.preventDefault();
};
