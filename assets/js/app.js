let currentDay = moment().format("dddd, MMMM Do YYYY")
let currentHour = '10 AM' //moment().format("h A")
console.log(typeof(currentHour))
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
console.log(typeof(hours[1]))

$('#currentDay').html(currentDay)


const scheduleTable = $('#scheduleTable')

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
        <div id="text-input"class="col past">
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
    console.log(hours)
    // console.log(document.getElementById(`text${i}`).value)
    // console.log(event.target.id)
  })
  }
}

createSchedule()
