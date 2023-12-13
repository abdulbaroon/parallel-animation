const App = () => {
  async function getData(start, end) {
    const url = `https://us-central1-delhimetroapi.cloudfunctions.net/route-get?from=${start}&to=${end}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  }

  getData();

  return (
    <div>
      <header className="text-3xl font-bold bg-slate-400 p-5">Metro App</header>
      <div className="flex justify-center mt-5">
        <div className="main-content flex flex-wrap gap-36">
          <div className="from">
            <h2 className="text-3xl mb-2">journey start station</h2>
            <select>
              <option value="1">1</option>
            </select>
          </div>
          <div className="to">
            <h2 className="text-3xl mb-2">journey end station</h2>
            <select>
              <option value="1">1</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <button
          // onClick={handleClick}
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
