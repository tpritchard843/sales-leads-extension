let myLeads = []

const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")

inputBtn.addEventListener("click",function() {
    console.log("clicked")
    myLeads.push(inputEl.value)
    console.log(myLeads)
})
