import jsPDF from 'jspdf';

interface DonationReceiptData {
  name: string;
  amount: number;
  email: string;
  orderId: string;
  payment_id: string;
  panDetails: string;
}

export const generateDonationReceiptPdf = ({
  name,
  amount,
  email,
  orderId,
  payment_id,
  panDetails,
}: DonationReceiptData) => {
  const doc = new jsPDF();

  // Organization Information
  doc.setFontSize(14);
  doc.text('JALSAMRUDDHA NASHIK ABHIYAN', 105, 10, { align: 'center' });
  doc.setFontSize(10);
  doc.text('NASHIK', 105, 20, { align: 'center' });
  doc.text('MAHARASHTRA | 0000000000', 105, 25, { align: 'center' });

  // Empty Line
  doc.text('', 105, 30);

  // Receipt Information
  doc.setFontSize(12);
  doc.text('Receipt #', 20, 40);
  doc.text(orderId, 40, 40);
  doc.text('Payment ID:', 20, 50);
  doc.text(payment_id, 60, 50);

  // Donor Information
  doc.text('Donor Name:', 20, 60);
  doc.text(name, 80, 60);
  doc.text('Contact:', 20, 70);
  doc.text(email, 80, 70);

  // Donation Details
  doc.text('Amount:', 20, 80);
  doc.text(`Rs.${amount.toFixed(2)}`, 80, 80); // Use the provided amount
  doc.text('Donation Type:', 20, 90);
  doc.text('One-time', 80, 90);
  doc.text('Payment Method:', 20, 100);
  doc.text('Cash', 80, 100);

  // Empty Line
  doc.text('', 105, 110);

  // Thank you message
  doc.setFontSize(14);
  doc.text('Thank you for your generous support', 105, 120, {
    align: 'center',
  });

  doc.save('donation_receipt.pdf');
};
