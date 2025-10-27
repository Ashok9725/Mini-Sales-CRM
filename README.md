# Mini-Sales-CRM
A simple, web-based Customer Relationship Management (CRM) application focused on sales lead management. This mini CRM allows users to fetch lead data from an API, view lead details, initiate calls or emails, and update lead statuses (e.g., mark as sold or not sold). It's built for demonstration purposes and can be extended for real-world use.

Features
Fetch Lead Data: Retrieves leads from a backend API and displays them dynamically.
Lead Management: View lead details including name, phone, email, and status.
Contact Actions: Click-to-call (using tel: links) and click-to-email (using mailto: links) for each lead.
Status Updates: Mark leads as "Sold" or "Not Sold" with real-time API updates.
Responsive Design: Uses Bootstrap for mobile-friendly UI.
Backend API: Simple Node.js server with in-memory data (easily replaceable with a database).
Prerequisites
Node.js (version 14 or higher) installed on your system.
A web browser (e.g., Chrome, Firefox).
Optional: Postman or curl for testing API endpoints.
Installation
Clone the repository:


Copy code
git clone https://github.com/your-username/mini-sales-crm.git
cd mini-sales-crm
Install dependencies:


Copy code
npm install
Start the server:


Copy code
node server.js
Open your browser and navigate to http://localhost:3000 to access the CRM.

Usage
Viewing Leads: Leads are automatically fetched and displayed on page load.
Contacting Leads: Click the "Call" button to initiate a phone call or "Email" to open your default email client.
Updating Status: Use the "Mark as Sold" or "Mark as Not Sold" buttons to update a lead's status. Changes are saved via API and reflected immediately.
Testing API: Use tools like Postman to interact with endpoints (see API Endpoints below).
API Endpoints
The backend provides the following RESTful endpoints (base URL: http://localhost:3000/api):

GET /leads: Fetch all leads.
PUT /leads/:id: Update a lead's status (e.g., body: {"status": "Sold"}).
POST /leads: Add a new lead (body: {"name": "New Lead", "phone": "123-456-7890", "email": "new@example.com"}).
DELETE /leads/:id: Delete a lead by ID.
Example curl command for updating status:


Copy code
curl -X PUT http://localhost:3000/api/leads/1 -H "Content-Type: application/json" -d '{"status": "Sold"}'
Technologies Used
Frontend: HTML, CSS (with Bootstrap), JavaScript (Fetch API for requests).
Backend: Node.js with Express.js.
Other: CORS for cross-origin requests.
Project Structure

Copy code
mini-sales-crm/
├── public/
│   ├── index.html          # Main HTML page
│   ├── css/
│   │   └── styles.css      # Custom styles
│   └── js/
│       └── script.js       # Frontend logic
├── server.js               # Backend server
└── package.json            # Node.js dependencies
Contributing
Contributions are welcome! Fork the repository, make your changes, and submit a pull request. For major changes, please open an issue first to discuss.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Notes
Lead data is currently stored in-memory (resets on server restart). For persistence, integrate with a database like MongoDB.
This is a mini project for educational purposes. Enhance it with authentication, advanced filtering, or real API integrations as needed. If you encounter issues, check the console for errors or refer to the code comments.
