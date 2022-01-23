import React, {useState, useEffect} from 'react';
import './App.css';
import Dropdown from './components/Dropdown'
import TableComponent from './components/TableComponent'
import apiRequest from './services/breweries.service'

function App() {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;


  const [value, setValue] = useState('alabama');
  var us_state_capitals = require('./us_state_capitals.json');
  const [tableData, setTableData] =  useState({
     columns: ['name', 'website_url', 'street', 'state', 'city', 'brewery_type'],
      rows:[]
  });
  const list_state_capitals = Object.values(us_state_capitals)
  const options = [];
  const stateToListDataMap = {};

  list_state_capitals.forEach((ele)=>{
    options.push({
      label:ele.name,
      value:ele.name.toLowerCase()
    })
    stateToListDataMap[ele.name.toLowerCase()] = {capital:ele.capital, lat:ele.lat, long:ele.long}
  })
    const initialStateData =  stateToListDataMap[value]
    const [stateToDataMap, setStateToDataMap] = useState({capital:initialStateData.capital, lat:initialStateData.lat, long:initialStateData.long});


  const handleChange = (event) => {
      const val = event.target.value;
    setValue(val);
    const {capital, lat, long} = stateToListDataMap[val]
    setStateToDataMap({capital, lat, long})
  };

  useEffect(()=>{
    async function fetchData() {
    const url = `${backendUrl}?state=${value}&city=${stateToDataMap.capital}&lat=${stateToDataMap.lat}&long=${stateToDataMap.long}`
     const response = await apiRequest(url)
        setTableData((prevState)=>({
          ...prevState,
              rows:response.data
        }));
  }
  fetchData();

  },[backendUrl,  value, stateToDataMap])

  return (
    <div className="App">
      <header className="App-header">
        <Dropdown
        label="Select States"
        options={options}
        value={value}
        onChange={handleChange}
      />

      <p>Selected State is {value}!</p>
        <TableComponent data = {tableData} />
      </header>
    </div>
  );
}

export default App;
