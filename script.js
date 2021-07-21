//getScheduleText to show on textarea after you save
let getScheduleText = function (hour) {
  let schedule = JSON.parse(window.localStorage.getItem("schedule"));
  for (let i = 0; i < schedule.length; i++) {
    if (schedule[i].hour == hour) {
      return schedule[i].text;
    }
  }
  return "";
};

//create scheduler dynamically and show colors with past, present, and future
let getColor = function (hour) {
  let currentHour = moment().format("ha");
  if (currentHour.includes("pm") && hour.includes("am")) {
    return "past";
  }
  if (hour == currentHour) {
    return "present";
  } else if (parseInt(hour) > parseInt(currentHour)) {
    return "future";
  } else {
    return "past";
  }
};

//show calendar
let calendar = document.getElementById("calendar");
for (let i = 0; i <= 15; i++) {
  let hour = i + 6 > 12 ? i + 6 - 12 + "pm" : i + 6 + "am";
  calendar.innerHTML += `<div class="row">
    <div class="col-2 hour">${hour == "12am" ? "12pm" : hour}</div>
    <textarea id="textArea${hour}"
    class="col-8 ${getColor(hour)} description">${getScheduleText(
    hour
  )}</textarea>
    <button class="col-2 saveBtn" onclick="saveEvent('${hour}')">
    <i class="fas fa-save" aria-hidden="true"></i>
    </button>
  </div>`;
}
document.getElementById("currentDay").innerHTML = moment().format(
  "dddd, MMMM Do YYYY, h:mm a"
);

// saveEvent on window.localStorage
let saveEvent = function (hour) {
  let schedule = JSON.parse(window.localStorage.getItem("schedule"));
  let textAreaEl = document.getElementById("textArea" + hour).value;
  let isUpdate = false;
  // if schedule is null, then update
  if (schedule == null) {
    schedule = [];
  } else {
    for (let i = 0; i < schedule.length; i++) {
      if (hour == schedule[i].hour) {
        schedule[i].text = textAreaEl;
        isUpdate = true;
        break;
      }
    }
  }
  // if isUpdate is false, then push
  if (!isUpdate) {
    schedule.push({
      hour: hour,
      text: textAreaEl,
    });
  }
  //JSON convert from object to string
  window.localStorage.setItem("schedule", JSON.stringify(schedule));
};
//JSON convert from string to object
console.log(JSON.parse(window.localStorage.getItem("schedule")));

let car = "honda";
let list = [];
list.push(car);
list.push("Text");
list.push(true);
list.push(true);
let dictionary = {
  word: "bug",
  page: 1,
};

list[0];

list.push(dictionary);
list = ["honda", "Text", true, true, { word: "bug", page: 1 }];
list[4].word;
dictionary.page;
