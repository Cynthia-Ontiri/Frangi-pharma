const drugCardTemplate = document.querySelector("[data-drug-template]")
const drugCardContainer = document.querySelector(["data-drug-cards-container"])
const searchInput = document.querySelector("[data-search]")

let drugs = []
console.log(searchInput)
searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  drugs.forEach(drug => {
    const isVisible = drug.name.toLowerCase().includes(value) || 
    drug.count.toLowerCase().includes(value)
    drug.element.classList.toggle("hide", !isVisible)
  })
})
fetch("https://api.fda.gov/drug/label.json?count=openfda.brand_name.exact&limit=1000")
  .then(res => res.json())
  .then(drug => {
    drugs = drug.map(drug => {
      const card = drugCardTemplate.cloneNode(true).children[0]
      const header = card.querySelector("[data-header]")
      const body = card.querySelector("[data-body]")
      header.textContent = drug.term
      body.textContent = drug.count
      drugCardContainer.append(card)
      return { term: drug.term, count: drug.count}
    })
  })
    
 