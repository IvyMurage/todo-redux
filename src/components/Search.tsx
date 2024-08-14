import { faFilter } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Search({ handleFilter, value, handleSearch }: { value: string, handleFilter: () => void, handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void }) {
    return (
        <form className="flex mb-8 relative justify-end items-center " >
            <input
                value={value}
                type='text'
                placeholder='feed cat...'
                name='search-todo'
                onChange={handleSearch}
                className="px-2 py-2 outline-none bg-transparent border-b-1 border-b-frame "
            />
            <FontAwesomeIcon onClick={handleFilter} icon={faFilter} className="absolute cursor-pointer " />
        </form>
    )
}

export default Search