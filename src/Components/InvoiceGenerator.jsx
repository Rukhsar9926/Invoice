import React, { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const InvoiceGenerator = () => {
  const [clientName, setClientName] = useState('');
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [invoiceItems, setInvoiceItems] = useState([]);

  const handleAddItem = () => {
    if (itemName && quantity > 0 && price > 0) {
      const newItem = {
        itemName,
        quantity,
        price,
      };

      setInvoiceItems([...invoiceItems, newItem]);
      setItemName('');
      setQuantity(0);
      setPrice(0);
    } else {
      alert('Please enter valid item details.');
    }
  };

  const calculateTotalPrice = () => {
    return invoiceItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleGenerateInvoice = () => {
    const totalInvoicePrice = calculateTotalPrice();

    const pdf = new jsPDF();

    // Add content to PDF
    pdf.text(`Client Name: ${clientName}`, 10, 10);
    pdf.text('Invoice Items:', 10, 20);

    invoiceItems.forEach((item, index) => {
      const yPos = 30 + index * 10;
      pdf.text(`${item.itemName} - Quantity: ${item.quantity}, Price: $${item.price}`, 10, yPos);
    });

    pdf.text(`Total Invoice Price: $${totalInvoicePrice}`, 10, 30 + invoiceItems.length * 10);

    
    pdf.save('invoice.pdf');
  };

  return (
    <>
      <div>
        <h2>Invoice Generator</h2>
        <div>
          <label>Client Name:</label>
          <input
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />
        </div>
        <div>
          <label>Item Name:</label>
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
          />
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
          />
          <button onClick={handleAddItem}>Add Item</button>
        </div>
        <div>
          <h3>Invoice Items:</h3>
          <ul>
            {invoiceItems.map((item, index) => (
              <li key={index}>
                {item.itemName} - Quantity: {item.quantity}, Price: ${item.price}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p>Total Invoice Price: ${calculateTotalPrice()}</p>
          <button onClick={handleGenerateInvoice}>Generate Invoice</button>
        </div>
      </div>
    </>
  );
};

export default InvoiceGenerator;