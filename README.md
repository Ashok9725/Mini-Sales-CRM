# Mini-Sales-CRM

A simple, web-based Customer Relationship Management (CRM) application focused on sales lead management. This mini CRM allows users to fetch lead data from an API, view lead details, initiate calls or emails, and update lead statuses (e.g., mark as sold or not sold). It's built for demonstration purposes and can be extended for real-world use.

## Features
- **Fetch Lead Data**: Retrieves leads from a backend API and displays them dynamically.
- **Lead Management**: View lead details including name, phone, email, and status.
- **Contact Actions**: Click-to-call (using `tel:` links) and click-to-email (using `mailto:` links) for each lead.
- **Status Updates**: Mark leads as "Sold" or "Not Sold" with real-time API updates.
- **Responsive Design**: Uses Bootstrap for mobile-friendly UI.
- **Backend API**: Simple Node.js server with in-memory data (easily replaceable with a database).

## Prerequisites
- Node.js (version 14 or higher) installed on your system.
- A web browser (e.g., Chrome, Firefox).
- Optional: Postman or curl for testing API endpoints.

## Installation
1. Clone the repository:
   git clone https://github.com/your-username/mini-sales-crm.git
   cd mini-sales-crm
2. install dependency
      npm install
3. Start the server:
    npm start
   
4. Open your browser and navigate to `http://localhost:3000` to access the CRM.

