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

//Functions for Index page
function cleanUpIndex() {
  const bodyDiv = document.querySelector('.main')  
  
  while (bodyDiv.firstChild) {
      bodyDiv.firstChild.remove()
  }

}

function createSingleIndex(obj) {
    const link = document.createElement('a')
    const indexCardDiv = document.createElement('div')
    indexCardDiv.classList.add('contact')
    const paragraph = document.createElement('p')
    
    paragraph.innerHTML = obj.name
    indexCardDiv.appendChild(paragraph)
    link.appendChild(indexCardDiv)
    link.href = 'page3.html'

    return link
}

function renderIndex(array) {
    const bodyDiv = document.querySelector('.main')
  
    for (let i = 0; i < array.length; i++) {
      bodyDiv.appendChild(createSingleIndex(contactList[i]))
    }
}


//Functions for View page (page with existing contact)
function cleanUpView() {
  const contactInfoDiv = document.querySelector('.contactinfo')

  while (contactInfoDiv.firstChild) {
    contactInfoDiv.firstChild.remove()
  }
}

function renderView(obj) {
  const contactInfoDiv = document.querySelector('.contactinfo')

  const contactName = document.createElement('div')
  contactName.classList.add('contactname')
  contactName.innerHTML = obj.name 
  contactInfoDiv.appendChild(contactName)

  const profilePic = document.createElement('img')
  profilePic.classList.add('profilepic')
  profilePic.src = "./img/profile.jpg"
  profilePic.alt = "Profile picture"
  contactName.appendChild(profilePic)

  const contactEmail = document.createElement('div')
  contactEmail.classList.add('contactemail')
  contactEmail.innerHTML = `email: ${obj.email}` 
  contactInfoDiv.appendChild(contactEmail)

  const contactPhone = document.createElement('div')
  contactPhone.classList.add('contactphone')
  contactPhone.innerHTML = `cell: ${obj.phone}` 
  contactInfoDiv.appendChild(contactPhone)

  const contactAddress = document.createElement('div')
  contactAddress.classList.add('contactaddress')
  contactAddress.innerHTML = `address: ${obj.address}` 
  contactInfoDiv.appendChild(contactAddress)

  const buttonContainer = document.createElement('div')
  buttonContainer.classList.add('buttons')
  contactInfoDiv.appendChild(buttonContainer)

  const editButton = document.createElement('button')
  editButton.classList.add('edit', 'button')
  editButton.innerHTML = 'Edit'
  buttonContainer.appendChild(editButton)

  const closeButton = document.createElement('button')
  closeButton.classList.add('close', 'button')
  closeButton.innerHTML = 'Close'
  buttonContainer.appendChild(closeButton)
}



//Functions for Create page (create new contact page)
function cleanUpCreate() {
  const contactEditDiv = document.querySelector('.contactedit')

  while (contactEditDiv.firstChild) {
    contactEditDiv.firstChild.remove()
  }
}

function renderCreate(obj) {
  const contactEditDiv = document.querySelector('.contactedit')
  
  const contactImgDiv = document.createElement('div')
  contactImgDiv.classList.add('contactimg')
  contactEditDiv.appendChild(contactImgDiv)

  const profilePic = document.createElement('img')
  profilePic.classList.add('profilepic')
  profilePic.src = './img/profile.jpg'
  profilePic.alt = 'Profile Picture'
  contactImgDiv.appendChild(profilePic)

  const formDiv = document.createElement('div')
  formDiv.classList.add('form') 
  contactEditDiv.appendChild(formDiv)

  const form = document.createElement('form')
  formDiv.appendChild(form)

  const inputNameDiv = document.createElement('div')
  inputNameDiv.classList.add('inputcontainer')
  form.appendChild(inputNameDiv)

  
}