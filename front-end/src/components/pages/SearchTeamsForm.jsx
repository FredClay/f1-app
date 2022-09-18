import { useState } from "react"

const SearchTeamsFrom = () => {

    const [searchInput, setSearchInput] = useState('');
    
    return (
        <div>
            <form>
                <label htmlFor="teamsSearchInput">Team Name: </label>
                <input type="text" id="teamsSearchInput" onChange={(e) => setSearchInput(e.target.value)} />
            </form>
        </div>
    )

};

export default SearchTeamsFrom;