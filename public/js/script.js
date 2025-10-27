document.addEventListener('DOMContentLoaded', () => {
  const leadsContainer = document.getElementById('leads-container');
  const apiUrl = 'http://localhost:3000/api/leads';

  // Fetch and display leads
  async function fetchLeads() {
    try {
      const response = await fetch(apiUrl);
      const leads = await response.json();
      displayLeads(leads);
    } catch (error) {
      console.error('Error fetching leads:', error);
    }
  }

  // Display leads in cards
  function displayLeads(leads) {
    leadsContainer.innerHTML = '';
    leads.forEach(lead => {
      const leadCard = document.createElement('div');
      leadCard.className = 'col-md-4 lead-card';
      leadCard.innerHTML = `
        <h5>${lead.name}</h5>
        <p><strong>Phone:</strong> ${lead.phone}</p>
        <p><strong>Email:</strong> ${lead.email}</p>
        <p><strong>Status:</strong> <span class="status-${lead.status.toLowerCase().replace(' ', '-')}">${lead.status}</span></p>
        <div class="actions">
          <a href="tel:${lead.phone}" class="btn btn-success">Call</a>
          <a href="mailto:${lead.email}" class="btn btn-info">Email</a>
          <button class="btn btn-primary" onclick="updateStatus(${lead.id}, 'Sold')">Mark as Sold</button>
          <button class="btn btn-danger" onclick="updateStatus(${lead.id}, 'Not Sold')">Mark as Not Sold</button>
        </div>
      `;
      leadsContainer.appendChild(leadCard);
    });
  }

  // Update lead status
  window.updateStatus = async (id, status) => {
    try {
      const response = await fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status })
      });
      if (response.ok) {
        fetchLeads(); // Refresh the list
      } else {
        alert('Error updating status');
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  // Initial load
  fetchLeads();
});