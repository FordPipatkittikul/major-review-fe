import './SearchBar.scss'

function SearchBar({item ,setItem}){
    return (
        <div className='searchBar'>
          <div className="top">
            <div className="item">
                <input 
                  type="text" 
                  id="item" 
                  name='item' 
                  placeholder='ex. accounting'
                  onChange={(event) => setItem(event.target.value)}
                />
            </div>
            
          </div>
          <h1>Searching for <b>{item}</b></h1>
        </div>
    )
}

export default SearchBar;