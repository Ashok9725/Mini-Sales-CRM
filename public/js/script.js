const API_URL = "http://localhost:5000/api/leads";

// Display leads (index.html)
async function loadLeads() {
  const container = document.getElementById("leadContainer");
  if (!container) return;

  const res = await fetch(API_URL);
  const leads = await res.json();

  container.innerHTML = leads.map(
    (lead) => `
      <div class="col-md-4">
        <div class="card p-3">
          <h5>${lead.name}</h5>
          <p>Email: ${lead.email}</p>
          <p>Phone: ${lead.phone}</p>
          <p>Status: <strong>${lead.status}</strong></p>
          <a href="tel:${lead.phone}" class="btn btn-success btn-sm me-1">Call</a>
          <a href="mailto:${lead.email}" class="btn btn-info btn-sm me-1">Email</a>
          <button class="btn btn-warning btn-sm me-1" onclick="updateStatus(${lead.id}, 'Sold')">Sold</button>
          <button class="btn btn-secondary btn-sm" onclick="updateStatus(${lead.id}, 'Not Sold')">Not Sold</button>
        </div>
      </div>
    `
  ).join("");
}

// Display customers (customer_list.html)
async function loadCustomerList() {
  const tableBody = document.getElementById("customerTableBody");
  if (!tableBody) return;

  const res = await fetch(API_URL);
  const leads = await res.json();

  tableBody.innerHTML = leads.map(
    (lead) => `
      <tr>
        <td>${lead.name}</td>
        <td>${lead.email}</td>
        <td>${lead.phone}</td>
        <td>${lead.status}</td>
        <td>
          <a href="tel:${lead.phone}" class="btn btn-success btn-sm">Call</a>
          <a href="mailto:${lead.email}" class="btn btn-info btn-sm">Email</a>
          <button class="btn btn-danger btn-sm" onclick="deleteLead(${lead.id})">Delete</button>
        </td>
      </tr>
    `
  ).join("");
}

// Add new customer
const form = document.getElementById("addCustomerForm");
if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const lead = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      status: document.getElementById("status").value,
    };
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });
    alert("Customer added successfully!");
    form.reset();
  });
}

// Update status
async function updateStatus(id, status) {
  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });
  loadLeads();
  loadCustomerList();
}

// Delete lead
async function deleteLead(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  loadCustomerList();
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  loadLeads();
  loadCustomerList();
});
