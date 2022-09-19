import { useState } from "react"

const SearchTeamsForm = () => {

    const [searchInput, setSearchInput] = useState('');
    
    return (
        <div>
            <form>
                <label htmlFor="teamsSearchInput">Team Name: </label>
                <input type="text" id="teamsSearchInput" onChange={(e) => setSearchInput(e.target.value)} value={searchInput}/>
            </form>
        </div>
    )

};

export default SearchTeamsForm;