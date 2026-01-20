const HistoryComponent = ({ history, setAndRoll, addRollToFavorites }) => {
  return (
    <div id='history' className='p-2'>
      <div>
        <h3 className='text-lg font-semibold text-slate-800'>History</h3>
        <p className='text-sm text-slate-600'>Recent rolls — click "Roll" to re-run or "Save" to add to favorites.</p>
      </div>

      <ul className='space-y-1 pb-2'>
        {history.map((roll, index) => (
          <li
            key={index}
            className={`flex items-center justify-between border border-slate-300 shadow m-1 p-1 px-2 rounded ${
              index === 0 ? 'font-bold' : ''
            }`}
          >
            <span>{roll.output}</span>
            <span>
              <button
                onClick={() => {
                  addRollToFavorites(roll.input);
                }}
                className='m-1 w-16 px-1 border border-gray-400 bg-amber-300 font-bold rounded-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition'
              >
                Save
              </button>
              <button
                onClick={() => {
                  setAndRoll(roll.input);
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

export default HistoryComponent;
