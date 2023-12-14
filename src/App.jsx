import { useState } from "react";
import stationList from "./StationList.json";

const App = () => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  let station = stationList.stations;

  async function getData(start, end) {
    const url = `https://us-central1-delhimetroapi.cloudfunctions.net/route-get?from=${start}&to=${end}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  }

  getData(start, end);

  const handleClick = () => {
    console.log("starting");
  };

  const handleChange = (val) => {
    console.log(val);
    setStart(val);
  };
  const handleChange2 = (val) => {
    console.log(val);
    setEnd(val);
  };

  return (
    <div>
      <header className="text-3xl font-bold bg-slate-400 p-5">Metro App</header>
      <div className="flex justify-center mt-5">
        <div className="main-content flex flex-wrap gap-36">
          <div className="from">
            <h2 className="text-3xl mb-2">journey start station</h2>
            <select
              className="border-2 border-gray-700 p-1 rounded-lg"
              onChange={(e) => handleChange(e.target.value)}
            >
              {station.map((ele, i) => {
                if (i === 0)
                  return (
                    <option key={i} value={ele} hidden>
                      {ele}
                    </option>
                  );
                return (
                  <option key={i} value={ele}>
                    {ele}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="to">
            <h2 className="text-3xl mb-2">journey end station</h2>
            <select
              onChange={(e) => handleChange2(e.target.value)}
              className="border-2 border-gray-700 p-1 rounded-lg"
            >
              {station.map((ele, i) => {
                if (i === 0)
                  return (
                    <option key={i} value={ele} hidden>
                      {ele}
                    </option>
                  );
                return (
                  <option key={i} value={ele}>
                    {ele}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <button
          onClick={handleClick}
          className="bg-orange-600 text-white rounded-lg p-2"
        >
          search for route
        </button>
      </div>
      <div className="result">
        {/* { data.map( (item,index) ) => {
          return <div></div>
        } } */}
      </div>
    </div>
  );
};

export default App;
