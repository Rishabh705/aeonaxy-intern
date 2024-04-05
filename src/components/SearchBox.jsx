import { FiSearch } from "react-icons/fi";

const SearchBox = ({ text, setText }) => {
    const handleChange = (evt) => {
        setText(evt.target.value);
    }

    return (
        <div className='mt-2 w-5/6 md:4/6'>
            <div className="relative flex items-center pl-3 rounded-full border border-gray-400 font-semibold  w-full">
                <FiSearch/>
                <input
                    type='text'
                    className="px-4 py-3 w-full h-full rounded-full outline-none"
                    placeholder='Search by keyword'
                    value={text}
                    onChange={handleChange}
                />
            </div>
        </div>
    )
}

export default SearchBox