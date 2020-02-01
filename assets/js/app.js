let currentDay = moment().format("dddd, MMMM Do YYYY")
let currentHour = '1 PM'//moment().format("h A")
console.log(typeof(currentHour))
const hours = [
  '9 AM', 
  '10 AM', 
  '11 AM', 
  '12 PM', 
  '1 PM', 
  '2 PM', 
  '3 PM', 
  '4 PM', 
  '5 PM'
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
          <p>${hours[i]}</p>
        </div>
        <div class="col present">
          <input type="text" name="text" id="text" class="form-control-plaintext present" placeholder=" ">
        </div>
        <div class="col-1 saveBtn ">
          <button id="submit" type="submit" class="btn mb-2"><i class="far fa-save"></i></button>
        </div>
      </div>
    </form>
  </div>
  </div>
  `)

  

$('#scheduleTable').append(timeElem)
}
}
createSchedule()
