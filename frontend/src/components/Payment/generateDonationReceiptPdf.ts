import jsPDF from 'jspdf';

interface DonationReceiptData {
  panDetails: string;
  // date: string;
  // receiptno: string;
  name: string;
  amount: number;
  payment_id: string;
  // payment_method: string;
  mobileNumber: string;
  email: string;
  // org_add: string;
  // reg_no: string;
}

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();

const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day
  .toString()
  .padStart(2, '0')}`;

export const generateDonationReceiptPDF = ({
  panDetails,
  // date: string;
  // receiptno: string;
  name,
  amount,
  payment_id,
  // payment_method,
  mobileNumber,
  email,
}: DonationReceiptData): void => {
  const pdf = new jsPDF('landscape');

  // pdf.addImage(img1, 'PNG', 15, 10, 20 * 2.41, 20);
  // pdf.addImage(img2, 'PNG', 160, 7, 25, 25);

  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(14);
  pdf.text('DONATION RECEIPT', 105, 20, { align: 'center' });

  pdf.setFont('helvetica');
  pdf.setFontSize(10);
  pdf.text('NASHIK, MAHARASHTRA', 105, 30, { align: 'center' });
  pdf.text(`Reg. no - '0000000000'`, 105, 35, { align: 'center' });

  pdf.rect(10, 50, 185, 60);

  // pdf.setFontSize(12);
  // pdf.textWithLink('Receipt', 20, 60, { url: '' });
  // pdf.textWithLink(':', 60, 60, { url: '' });
  // pdf.text(payment_id, 70, 60);

  pdf.textWithLink('Date', 20, 70, { url: '' });
  pdf.textWithLink(':', 60, 70, { url: '' });
  pdf.text(formattedDate, 70, 70);

  pdf.textWithLink('Donor Name', 20, 80, { url: '' });
  pdf.textWithLink(':', 60, 80, { url: '' });
  pdf.setFont('helvetica', 'bold');
  pdf.text(name, 70, 80);
  pdf.setFont('helvetica');

  // pdf.textWithLink('Address', 20, 90, { url: '' });
  // pdf.textWithLink(':', 60, 90, { url: '' });
  // pdf.text(data.donor_add, 70, 90);

  pdf.textWithLink('Mobile', 20, 100, { url: '' });
  pdf.textWithLink(':', 60, 100, { url: '' });
  pdf.text(`+${mobileNumber}`, 70, 100);

  pdf.textWithLink('Email ID', 20, 110, { url: '' });
  pdf.textWithLink(':', 60, 110, { url: '' });
  pdf.text(email, 70, 110);

  pdf.textWithLink('PAN', 20, 120, { url: '' });
  pdf.textWithLink(':', 60, 120, { url: '' });
  pdf.setFont('helvetica', 'bold');
  pdf.text(panDetails, 70, 120);
  pdf.setFont('helvetica');

  pdf.textWithLink('Amount', 20, 130, { url: '' });
  pdf.textWithLink(':', 60, 130, { url: '' });
  pdf.text(`Rs.${amount}`, 70, 130);

  pdf.textWithLink('Transaction ID', 20, 140, { url: '' });
  pdf.textWithLink(':', 60, 140, { url: '' });
  pdf.text(payment_id, 70, 140);

  pdf.textWithLink('Payment Method', 20, 150, { url: '' });
  pdf.textWithLink(':', 60, 150, { url: '' });
  pdf.text('Online', 70, 150);

  pdf.text(' ', 20, 160);

  pdf.text('[ ^_^ Thank you for your generous support ]', 105, 160, {
    align: 'center',
  });

  const fileName = `donation_receipt.pdf`;
  pdf.save(fileName);
};
