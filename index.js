const baseURL = 'http://localhost:3000'
const truckStopsURL = `${baseURL}/truck_stops`

fetch(truckStopsURL)
  .then(response => response.json())
  .then(truckStops => {
    const truckStopsContainer = document.querySelector('#truckstops-container')
    truckStops.forEach(truckStop => {
      const truckStopCard = document.createElement('div')
      truckStopCard.classList.add('truckstop-card')
      
      const truckStopTitle = document.createElement('h2')
      truckStopTitle.classList.add('truckstop-title')
      truckStopTitle.textContent = truckStop.title
      
      const truckStopLocation = document.createElement('p')
      truckStopLocation.classList.add('truckstop-location')
      truckStopLocation.textContent = truckStop.location
    
      truckStopCard.append(truckStopTitle, truckStopLocation)
      truckStopsContainer.append(truckStopCard)
    })
  })
