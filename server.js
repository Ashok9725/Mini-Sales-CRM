// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public")); // serves your frontend (index.html, etc.)

// In-memory data (temporary database)
let leads = [
  {
    id: 1,
    name: "vivek adani",
    email: "vadani@example.com",
    phone: "+91 9876543210",
    status: "Interested"
  },
  {
    id: 2,
    name: "Jani Roy",
    email: "jani@example.com",
    phone: "+91 9988776655",
    status: "Sold"
  },
  {
    id: 3,
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    phone: "+91 9123456789",
    status: "Not Sold"
  }
];

//  API ROUTES 

// GET all leads
app.get("/api/leads", (req, res) => {
  res.json(leads);
});

// GET single lead by ID
app.get("/api/leads/:id", (req, res) => {
  const lead = leads.find((l) => l.id === parseInt(req.params.id));
  if (!lead) return res.status(404).json({ message: "Lead not found" });
  res.json(lead);
});

// POST - Add a new lead
app.post("/api/leads", (req, res) => {
  const { name, email, phone, status } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newLead = {
    id: leads.length + 1,
    name,
    email,
    phone,
    status: status || "Interested"
  };

  leads.push(newLead);
  res.status(201).json(newLead);
});

// PUT - Update a lead by ID
app.put("/api/leads/:id", (req, res) => {
  const { id } = req.params;
  const { name, email, phone, status } = req.body;

  const index = leads.findIndex((l) => l.id === parseInt(id));
  if (index === -1)
    return res.status(404).json({ message: "Lead not found" });

  leads[index] = {
    ...leads[index],
    name: name || leads[index].name,
    email: email || leads[index].email,
    phone: phone || leads[index].phone,
    status: status || leads[index].status
  };

  res.json({ message: "Lead updated", lead: leads[index] });
});

// DELETE - Remove a lead
app.delete("/api/leads/:id", (req, res) => {
  const { id } = req.params;
  leads = leads.filter((l) => l.id !== parseInt(id));
  res.json({ message: "Lead deleted successfully" });
});

//  SERVER START 
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
