const truckstops = [
  { title: "Forest", location: "Colorado Springs" },
  { title: "Pavement", location: "Denver" },
  { title: "Mountain", location: "Breckenridge" },
]

const truckstopsContainer = document.querySelector('#truckstops-container')
console.log('truckstops container', truckstopsContainer)
truckstops.forEach(truckstop => {
  const truckstopCard = document.createElement('div')
  truckstopCard.classList.add('truckstop-card')
  
  const truckstopTitle = document.createElement('h2')
  truckstopTitle.classList.add('truckstop-title')
  truckstopTitle.textContent = truckstop.title
  
  const truckstopLocation = document.createElement('p')
  truckstopLocation.classList.add('truckstop-location')
  truckstopLocation.textContent = truckstop.location

  truckstopCard.append(truckstopTitle, truckstopLocation)
  truckstopsContainer.append(truckstopCard)
})