import Input from "../Input/Input";

const Filter = ({ searchValue, updateSearchValue }) => {
    const handleSeachChange = (e) => {
        updateSearchValue(e.target.value);
    }

    return (
        <div>
            filter shown with <Input
                value={searchValue}
                onChange={handleSeachChange}
                type={"text"}
            />
        </div>
    );
}

export default Filter;