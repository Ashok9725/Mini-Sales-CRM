const tableBody = document.getElementById("leadTableBody");
const editForm = document.getElementById("editLeadForm");

let currentLeadId = null;

// Fetch leads
async function loadLeads() {
  const res = await fetch("http://localhost:5000/api/leads");
  const leads = await res.json();
  tableBody.innerHTML = "";

  leads.forEach((lead) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${lead.id}</td>
      <td>${lead.name}</td>
      <td><a href="mailto:${lead.email}">${lead.email}</a></td>
      <td><a href="tel:${lead.phone}">${lead.phone}</a></td>
      <td>${lead.status}</td>
      <td>
        <button class="btn btn-sm btn-primary me-2" onclick="openEdit(${lead.id})">Edit</button>
        <button class="btn btn-sm btn-danger" onclick="deleteLead(${lead.id})">Delete</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

// Open edit modal
async function openEdit(id) {
  const res = await fetch(`http://localhost:5000/api/leads/${id}`);
  const lead = await res.json();

  document.getElementById("editId").value = lead.id;
  document.getElementById("editName").value = lead.name;
  document.getElementById("editEmail").value = lead.email;
  document.getElementById("editPhone").value = lead.phone;
  document.getElementById("editStatus").value = lead.status;

  const modal = new bootstrap.Modal(document.getElementById("editModal"));
  modal.show();
}

// Submit edit form
editForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const id = document.getElementById("editId").value;
  const data = {
    name: document.getElementById("editName").value,
    email: document.getElementById("editEmail").value,
    phone: document.getElementById("editPhone").value,
    status: document.getElementById("editStatus").value
  };

  await fetch(`http://localhost:5000/api/leads/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  bootstrap.Modal.getInstance(document.getElementById("editModal")).hide();
  loadLeads();
});

// Delete
async function deleteLead(id) {
  await fetch(`http://localhost:5000/api/leads/${id}`, { method: "DELETE" });
  loadLeads();
}

loadLeads();
