const SearchBar = () => {
  return (
    <div className="w-3/4 max-w-2xl mx-auto my-4">
      <form className="flex flex-col gap-4  p-4 rounded-lg shadow-md">
        <input
          type="text"
          name="location"
          placeholder="City Location"
          className="w-full p-4 text-lg border border-gray-200 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
        />
        <div className="flex gap-4">
          <input
            type="number"
            name="minPrice"
            min={0}
            max={1000000}
            placeholder="Min Price"
            className="w-full p-4 text-lg border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
          />

          <input
            type="number"
            name="maxPrice"
            min={0}
            max={1000000}
            placeholder="Max Price"
            className="w-full p-4 text-lg border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 text-white font-bold text-lg bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition duration-900 ease-in"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
