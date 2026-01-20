const FavoritesComponent = ({ favorites, setAndRoll, removeFromFavorites }) => {
  return (
    <div id='favorites' className='p-2'>
      <div>
        <h3 className='text-lg font-semibold text-slate-800'>Favorites</h3>
        <p className='text-sm text-slate-600'>Saved rolls for quick access — click to re-run a favorite.</p>
      </div>

      <ul className='space-y-1 pb-2'>
        {Array.from(favorites, ([k, v]) => (
          <li
            key={k}
            className={'flex items-center justify-between border border-slate-300 shadow m-1 p-1 px-2 rounded'}
          >
            <span>
              <strong>{v}</strong> ({k})
            </span>
            <span>
              <button
                onClick={() => {
                  removeFromFavorites(k);
                }}
                className='m-1 w-16 px-1 border border-gray-400 bg-amber-300 font-bold rounded-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition'
              >
                Delete
              </button>
              <button
                onClick={() => {
                  setAndRoll(v);
                }}
                className='m-1 w-16 px-1 border border-gray-400 bg-amber-300 font-bold rounded-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition'
              >
                Roll
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FavoritesComponent;
