let currentDay = moment().format("dddd, MMMM Do YYYY")
//subtract 9 because the day starts at 9 AM, 
let currentHour = 5 //parseInt(moment().format("H"))-9

let hours = [
  {
    time:'9 AM',
    data: ''
  },
  {
    time: '10 AM',
    data: ''
  },
  {
    time: '11 AM',
    data: ''
  },
  {
    time: '12 PM',
    data: ''
  },
  {
    time: '1 PM',
    data: 'Burrito'
  },
  {
    time: '2 PM',
    data: ''
  },
  {
    time: '3 PM',
    data: ''
  },
  {
    time: '4 PM',
    data: ''
  },
  {
    time: '5 PM',
    data: ''
  }
]

localStorage.setItem('arr', JSON.stringify(hours))

// let hours_serialized = JSON.stringify(hours)
// localStorage.setItem("hours", hours_serialized)




$('#currentDay').html(currentDay)


const scheduleTable = $('#scheduleTable')
const rowColor = function(hour) {
  if( hour <  currentHour){
    return 'past'
  } else if (hour > currentHour) {
    return 'future'
  }
  return 'present'
}

function createSchedule() {
  for (let i = 0; i < hours.length; i++) {
  let timeElem = $(`
  <div class="container">
  <div>
    <form>
      <div class="form-row align-items-center row">
        <div class="col-2 bg-light hour">
          <p>${hours[i].time}</p>
        </div>
        <div id="text-input"class="col ${rowColor(i)}">
          <input type="text" name="text${i}" id="text${i}" class="form-control-plaintext" placeholder="${hours[i].data}">
        </div>
        <div class="col-1 saveBtn ">
          <button id="submit${i}" type="submit" class="btn mb-2">SAVE</i></button>
        </div>
      </div>
    </form>
  </div>
  </div>
  <hr>
  `)

  $('#scheduleTable').append(timeElem)  

  document.getElementById(`submit${i}`).addEventListener('click', function (event) {
    event.preventDefault()
    hours[i].data = document.getElementById(`text${i}`).value
    localStorage.setItem('arr', JSON.stringify(hours))
    hours = JSON.parse(localStorage.getItem('hours')) || []
    console.log(hours)
    // console.log(document.getElementById(`text${i}`).value)
    // console.log(event.target.id)
  })
  
  }

}

createSchedule()
