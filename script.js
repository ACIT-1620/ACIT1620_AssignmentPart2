const contactsDiv = document.querySelector('.main')

let contactList = [
    {
      name: "Roberta Dobbs",
      phone: "778-555-1234",
      address: "101 Main St, Anytown, USA",
      email: "subgenius@slack.example.com",
    }, 
    {
      name: "Bugs Bunny",
      phone: "123-867-5309",
      address: "Warner Brothers Animation Lot",
      email: "whatsup@doc.example.com",
    },
  ]

function cleanUpIndex() {

    while (contactsDiv.firstChild) {
        contactsDiv.firstChild.remove()
    }
}

function createSingleIndex(obj) {
    var link = document.createElement('a')
    var indexCardDiv = document.createElement('div')
    indexCardDiv.classList.add('contact')
    var paragraph = document.createElement('p')
    
    paragraph.innerHTML = obj.name
    indexCardDiv.appendChild(paragraph)
    link.appendChild(indexCardDiv)
    link.href = 'page3.html'

    return link
}

function renderIndex(array) {
    for (let i = 0; i < array.length; i++) {
        contactsDiv.appendChild(createSingleIndex(contactList[i]))
    }
}

