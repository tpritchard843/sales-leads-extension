let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const tabBtn = document.getElementById("tab-btn")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads") )

const tabs = [
    {url: "https://www.linkedin.com/in/thomas-pritchard-a37374161/"}
]

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads) {
    let listItems = ""

    for (let i = 0; i < leads.length; i++) {
        //listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
                </a>
            </li>
        `
    }

    ulEl.innerHTML = listItems
}

inputBtn.addEventListener("click",function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        console.log(tabs)
        //since only one tab should be active and in the current window, the return variable should only have one entry
        let activeTab = tabs[0]
        let activeTabId = activeTab.id
    })

    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})
