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
  
  //loops through child elements while the first child exists and removes the first child
  //first child changes after each time one is deleted, therefore looping through all of them
  while (bodyDiv.firstChild) {
      bodyDiv.firstChild.remove()
  }

}

function createSingleIndex(obj) {
    const link = document.createElement('a') //creates a link element
    const indexCardDiv = document.createElement('div') //creates a div element for the contact card
    indexCardDiv.classList.add('contact') //adds 'contact' class to the div with the contact cards
    const paragraph = document.createElement('p') //creates a paragraph element
    
    paragraph.innerHTML = obj.name //sets the innerHTML (words) of the paragraph to the name of the contact object
    indexCardDiv.appendChild(paragraph) //places the paragraph element inside the contact card div
    link.appendChild(indexCardDiv) //places the contact card div inside the link element
    link.href = 'page3.html' //sets the link elements reference to the existing contact page

    return link //returns the link element with all the child elements placed in it (returns a single contact card)
}

function renderIndex(array) {
    const bodyDiv = document.querySelector('.main') //selects the main container with the contact cards in it
  
    //loops through the array of contact objects and creates a contact card for each one, then adds it to the main container div
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

  //contacts name
  const contactName = document.createElement('div')
  contactName.classList.add('contactname')
  contactName.innerHTML = obj.name 
  contactInfoDiv.appendChild(contactName)

  //contacts profile picture
  const profilePic = document.createElement('img')
  profilePic.classList.add('profilepic')
  profilePic.src = "./img/profile.jpg"
  profilePic.alt = "Profile picture"
  contactName.appendChild(profilePic)

  //contacts email
  const contactEmail = document.createElement('div')
  contactEmail.classList.add('contactemail')
  contactEmail.innerHTML = `email: ${obj.email}` 
  contactInfoDiv.appendChild(contactEmail)

  //contacts phone
  const contactPhone = document.createElement('div')
  contactPhone.classList.add('contactphone')
  contactPhone.innerHTML = `cell: ${obj.phone}` 
  contactInfoDiv.appendChild(contactPhone)

  //contacts address
  const contactAddress = document.createElement('div')
  contactAddress.classList.add('contactaddress')
  contactAddress.innerHTML = `address: ${obj.address}` 
  contactInfoDiv.appendChild(contactAddress)

  //close and edit buttons in a container at the bottom
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
  
  //add contact image
  const contactImgDiv = document.createElement('div')
  contactImgDiv.classList.add('contactimg')
  contactEditDiv.appendChild(contactImgDiv)

  const profilePic = document.createElement('img')
  profilePic.classList.add('profilepic')
  profilePic.src = './img/profile.jpg'
  profilePic.alt = 'Profile Picture'
  contactImgDiv.appendChild(profilePic)

  //form div properties and form itself
  const formDiv = document.createElement('div')
  formDiv.classList.add('form') 
  contactEditDiv.appendChild(formDiv)

  const form = document.createElement('form')
  formDiv.appendChild(form)

  //add contact name
  const inputNameDiv = document.createElement('div')
  inputNameDiv.classList.add('inputcontainer')
  form.appendChild(inputNameDiv)

  const inputName = document.createElement('input')
  inputName.setAttribute('id', 'contactname') //another way to set the attributes of an element
  inputName.type = 'text'
  inputName.name = 'contactname'
  inputName.placeholder = 'Contact Name'
  inputNameDiv.appendChild(inputName)

  const addNameButton = document.createElement('button')
  addNameButton.setAttribute('id', 'extranamefield')
  addNameButton.classList.add('extrafield')
  addNameButton.name = 'extranamefield'
  addNameButton.innerHTML = '+'
  inputNameDiv.appendChild(addNameButton)

  //add contact phone number
  const inputPhoneDiv = document.createElement('div')
  inputPhoneDiv.classList.add('inputcontainer')
  form.appendChild(inputPhoneDiv)

  const inputPhone = document.createElement('input')
  inputPhone.setAttribute('id', 'contactphone') 
  inputPhone.type = 'tel'
  inputPhone.name = 'contactphone'
  inputPhone.placeholder = 'Contact Phone'
  inputPhoneDiv.appendChild(inputPhone)

  const addPhoneButton = document.createElement('button')
  addPhoneButton.setAttribute('id', 'extraphonefield')
  addPhoneButton.classList.add('extrafield')
  addPhoneButton.name = 'extraphonefield'
  addPhoneButton.innerHTML = '+'
  inputPhoneDiv.appendChild(addPhoneButton)


  //add contact address
  const inputAddressDiv = document.createElement('div')
  inputAddressDiv.classList.add('inputcontainer')
  form.appendChild(inputAddressDiv)

  const inputAddress = document.createElement('input')
  inputAddress.setAttribute('id', 'contactaddress') 
  inputAddress.type = 'text'
  inputAddress.name = 'contactaddress'
  inputAddress.placeholder = 'Contact Address'
  inputAddressDiv.appendChild(inputAddress)

  const addAddressButton = document.createElement('button')
  addAddressButton.setAttribute('id', 'extraaddressfield')
  addAddressButton.classList.add('extrafield')
  addAddressButton.name = 'extraaddressfield'
  addAddressButton.innerHTML = '+'
  inputAddressDiv.appendChild(addAddressButton)


  //add contact email
  const inputEmailDiv = document.createElement('div')
  inputEmailDiv.classList.add('inputcontainer')
  form.appendChild(inputEmailDiv)

  const inputEmail = document.createElement('input')
  inputEmail.setAttribute('id', 'contactemail') 
  inputEmail.type = 'email'
  inputEmail.name = 'contactemail'
  inputEmail.placeholder = 'Contact Email'
  inputEmailDiv.appendChild(inputEmail)

  const addEmailButton = document.createElement('button')
  addEmailButton.setAttribute('id', 'extraemailfield')
  addEmailButton.classList.add('extrafield')
  addEmailButton.name = 'extraemailfield'
  addEmailButton.innerHTML = '+'
  inputEmailDiv.appendChild(addEmailButton)


  //submit and reset buttons
  const buttonContainer = document.createElement('div')
  buttonContainer.classList.add('buttons')
  form.appendChild(buttonContainer)

  const submitButton = document.createElement('button')
  submitButton.setAttribute('id', 'savecontact')
  submitButton.classList.add('save', 'button')
  submitButton.type = 'submit'
  submitButton.name = 'savecontact'
  submitButton.innerHTML = 'Save Contact'
  buttonContainer.appendChild(submitButton)

  const resetButton = document.createElement('button')
  resetButton.setAttribute('id', 'cancel')
  resetButton.classList.add('cancel', 'button')
  resetButton.type = 'reset'
  resetButton.name = 'cancel'
  resetButton.innerHTML = 'Cancel'
  buttonContainer.appendChild(resetButton)

}