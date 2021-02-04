async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)

  // 🔥 start here: write code to loop through the rides

  let renderRide = function(ride)
  {
    let passenger1Name=(ride.passengerDetails.first+'  '+ride.passengerDetails.last)
    let passenger1Phone=ride.passengerDetails.phoneNumber
    let passenger1NumberOfPassengers=ride.numberOfPassengers
    let passenger1PickupAddressLine1=ride.pickupLocation.address
    let passenger1PickupAddressLine2=ride.pickupLocation.city+', '+ride.pickupLocation.state+', '+ride.pickupLocation.zip
    let passenger1DropoffAddressLine1=ride.dropoffLocation.address
    let passenger1DropoffAddressLine2=ride.dropoffLocation.city+', '+ride.pickupLocation.state+', '+ride.pickupLocation.zip

    return `
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
    <i class="fas fa-car-side"></i>
    <span>${levelOfService}</span>
  </h1>
  
  <div class="border-4 border-gray-900 p-4 my-4 text-left">
    <div class="flex">
      <div class="w-1/2">
        <h2 class="text-2xl py-1">${passenger1Name}</h2>
        <p class="font-bold text-gray-600">${passenger1Phone}</p>
      </div>
      <div class="w-1/2 text-right">
        <span class="rounded-xl bg-gray-600 text-white p-2">
          ${passenger1NumberOfPassengers}
        </span>
      </div>
    </div>
    <div class="mt-4 flex">
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">PICKUP</div>
        <p>${passenger1PickupAddressLine1}</p>
        <p>${passenger1PickupAddressLine2}</p>
      </div>
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">DROPOFF</div>
        <p>${passenger1DropoffAddressLine1}</p>
        <p>${passenger1DropoffAddressLine2}</p>
      </div>
    </div>
  </div>  
  
  `}

  for (let i = 0; i<json.length; i++)
  { 
    
    let rides = json[i]
    
    let levelOfService
    if(rides.length>1)
    {
      levelOfService='Noober Pool'
    }
    else if (rides[0].purpleRequested == true) 
    {
      levelOfService = 'Noober Purple'
    } 
    else if (rides[0].numberOfPassengers>3) 
    {
      levelOfService='Noober XL'
    } 
    else 
    {
      levelOfService='Noober X' 
    }
    for (let j = 0; i<rides.length; j++)
    {
      let ride = rides[j]
      let outputElement = document.querySelector(`.rides`)
    }

    outputElement.insertAdjacentHTML('beforeend',renderRide(ride))

  }
}


window.addEventListener('DOMContentLoaded',pageLoaded)