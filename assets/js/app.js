let currentDay = moment().format("dddd, MMMM Do YYYY")
let currentHour = moment().hour()
const hours = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM']

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
          <input type="text" class="form-control-plaintext present" placeholder="State">
        </div>
        <div class="col-1 saveBtn ">
          <button type="submit" class="btn mb-2"><i class="far fa-save"></i></button>
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
