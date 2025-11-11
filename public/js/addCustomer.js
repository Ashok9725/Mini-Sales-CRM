const form = document.getElementById("addCustomerForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    status: document.getElementById("status").value
  };

  const res = await fetch("http://localhost:5000/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  if (res.ok) {
    alert("Customer added successfully!");
    form.reset();
  } else {
    alert("Error adding customer!");
  }
});
