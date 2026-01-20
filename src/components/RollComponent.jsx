const RollComponent = ({ rollInput, setRollInput, handleRoll }) => {
  return (
    <div id='roll' className='p-2'>
      <div>
        <h3 className='text-lg font-semibold text-slate-800'>Roll</h3>
        <p className='text-sm text-slate-600'>Enter a dice expression (e.g. "2d6+3") and press Roll to execute.</p>
      </div>

      <div id='roll' className='p-4 flex justify-center items-center space-x-4'>
        <input
          type='text'
          value={rollInput}
          onChange={e => setRollInput(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleRoll();
            }
          }}
          className='m-1 w-full px-1 px-2 border border-gray-400 bg-yellow-50 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 transition'
          placeholder='Type your roll...'
        />
        <button
          onClick={() => handleRoll()}
          className='m-1 mr-3 w-16 px-1 border border-gray-400 bg-amber-300 font-bold rounded-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition'
        >
          Roll
        </button>
      </div>
    </div>
  );
};

export default RollComponent;
