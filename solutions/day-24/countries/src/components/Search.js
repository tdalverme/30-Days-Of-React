import chartIcon from '../assets/chart-icon.png'
import '../styles/Search.css'

const Search = ({content, setContent}) => {
    const handleChange = (e) => {
        console.log(e.target.value)
        const filteredContent = content.filter((value) => {
            return value.name.common.toLowerCase().includes(e.target.value)
        })
        
        setContent(filteredContent)
    }

    return (
        <div className='search'>
            <input className='search__bar' type='text' onChange={handleChange} placeholder='Search countries by name, city and languages'/>
            <a href='https://google.com'>
                <img  className='search__chartIcon' src={ chartIcon } alt='chart icon' />
            </a>
        </div>
    )
}

export default Search