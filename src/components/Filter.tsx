function Filter({ value, handleFilter }: {
    value: string,
    handleFilter: (event: React.ChangeEvent<HTMLSelectElement>) => void,
}) {

    return (
        <select
            value={value}
            onChange={(event) => handleFilter!(event)} name="category" className="bg-transparent border-1 border-frame outline-none rounded-md p-1">
            <option value='all'></option>
            <option value='house'>House</option>
            <option value={'school'}>School</option>
            <option value='office'>Office</option>
        </select>
    )
}

export default Filter