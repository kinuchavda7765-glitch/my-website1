document.getElementById("confessionForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const stream = document.getElementById("stream").value;
  const year = document.getElementById("year").value;
  const confession = document.getElementById("confession").value;

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
    <h3>Thank you for your confession!</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Stream:</strong> ${stream}</p>
    <p><strong>Year:</strong> ${year}</p>
    <p><strong>Confession:</strong> ${confession}</p>
  `;
  resultDiv.style.display = "block";

  // Optionally reset the form
  this.reset();
});
