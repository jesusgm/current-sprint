
import './App.css';

function App() {

  function getWeekNumber(d) {
      // Copy date so don't modify original
      d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
      // Set to nearest Thursday: current date + 4 - current day number
      // Make Sunday's day number 7
      d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
      // Get first day of year
      var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
      // Calculate full weeks to nearest Thursday
      var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
      // Return array of year and week number
      return [`${d.getFullYear()}`.slice(2), weekNo];
  }

  var result = getWeekNumber(new Date());
  
  const sprint = `${result[0]}_${result[1]%2===0 ? result[1]: result[1]+1}`;

  return (
    <div className="App">
     <h1>{sprint}</h1>
    </div>
  );
}

export default App;
