const apiUrl = ("http: //localhost:3000");

let drugs = []

function getDrugDetails(){
fetch("https://api.fda.gov/drug/label.json?count=openfda.brand_name.exact&limit=1000")
  .then(res => res.json())
  .then(data => {
    document.getElementById("drug-term").innerText = data.term
    document.getElementById("drug-count").innerText = data.term
  })
}

document.addEventListener("DOMContentLoaded", () => {
  getDrugs();
  getDrugDetails(1);
//submit inquiry
  document.getElementById("submit-form").addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("inquiry-list").innerHTML += `<li>
    ${document.getElementById("inquiry").value}
    </li>`;
  });
})