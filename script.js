const contactsDiv = document.querySelector('.main')

let contactList = [
    {
      name: "Barry Allen",
      phone: "+1 555 555-555",
      address: " 123 front st, Unit #1, Dakota City",
      email: "rocket@gmail.com",
    }, 
    {
      name: "Beverly Crusher",
      phone: "+1 555 555-555",
      address: " 123 front st, Unit #1, Dakota City",
      email: "rocket@gmail.com",
    },
    {
      name: "Diana Prince",
      phone: "+1 555 555-555",
      address: " 123 front st, Unit #1, Dakota City",
      email: "rocket@gmail.com",
    }
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

