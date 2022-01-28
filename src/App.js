import moment from "moment";

import "./App.css";

function App() {
  function getWeekNumber(d) {
    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    // Get first day of year
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
    // Return array of year and week number
    return [`${d.getFullYear()}`.slice(2), weekNo];
  }

  var [fullYear, weekNumber] = getWeekNumber(new Date());

  function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
  }

  const sprint = `${pad(fullYear, 2)}_${pad(
    weekNumber % 2 === 0 ? weekNumber : weekNumber + 1,
    2
  )}`;

  const dateStart = moment()
    .isoWeek(weekNumber % 2 === 0 ? weekNumber - 1 : weekNumber)
    .startOf("isoWeek");
  const dateEnd = moment()
    .isoWeek(weekNumber % 2 === 0 ? weekNumber : weekNumber + 1)
    .endOf("isoWeek")
    .day(-2);

  const dateStartStr = dateStart.format("DD/MM/YYYY");
  const dateEndStr = dateEnd.format("DD/MM/YYYY");

  const daysToEnd = dateEnd.diff(moment(), "days");

  return (
    <div className="App">
      <h1>{sprint}</h1>
      <div className="dates">
        <div className="date-start">{dateStartStr}</div>
        <div className="separator"> - </div>
        <div className="date-end">{dateEndStr}</div>
      </div>
      <div className={`days-to-end days-${daysToEnd}`}>
        Días hasta finalización del sprint: {daysToEnd}
      </div>
    </div>
  );
}

export default App;
