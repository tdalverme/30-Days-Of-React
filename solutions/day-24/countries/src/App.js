import {useEffect, useState} from 'react';
import Countries from './components/Countries';
import Header from './components/Header';
import Search from './components/Search';
import axios from 'axios'
import './styles/App.css';
import Chart from './components/Chart';

function App() {
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  
  useEffect(() => {
    const getCountriesInfo = async () => {
      const url = 'https://restcountries.com/v3.1/all'
  
      try {
        const { data } = await axios.get(url)
        setCountries(data)
      } catch (error) {
        console.log(error)
      }
    }

    getCountriesInfo()
  }, [])

  const formatChartData = (countries) => {
    countries.sort((a, b) => (b.population - a.population))
    const formattedData = countries.map((value) => ({label: value.name.common, value: value.population}))
    return formattedData.slice(0, 10)
  }

  return (
    <div className="App">
      <Header numberOfCountries={countries.length}/>
      <Search content={countries} setContent={setFilteredCountries}/>
      <Countries countries={filteredCountries}/>
      <Chart data={formatChartData(countries)}/>
    </div>
  );
}

export default App