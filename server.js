const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Serve static files from public directory

// Mock lead data (in-memory for simplicity)
let leads = [
  { id: 1, name: 'Ashok Patel', phone: '123-456-7890', email: 'ap@gmail.com', status: 'Open' },
  { id: 2, name: 'Rudra kumar', phone: '987-654-3210', email: 'rd@gmail.com', status: 'Open' },
  { id: 3, name: 'Anup singh', phone: '555-123-4567', email: 'pj@gmail.com', status: 'Open' }
];

// API Routes
app.get('/api/leads', (req, res) => {
  res.json(leads);
});

app.put('/api/leads/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { status } = req.body;
  const lead = leads.find(l => l.id === id);
  if (lead) {
    lead.status = status;
    res.json(lead);
  } else {
    res.status(404).json({ error: 'Lead not found' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});