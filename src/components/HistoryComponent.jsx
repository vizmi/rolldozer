import { useTranslation } from 'react-i18next';

const HistoryComponent = ({ history, setAndRoll, addRollToFavorites }) => {
  const { t } = useTranslation();

  return (
    <div id='history' className='p-2'>
      <div>
        <h3 className='text-lg font-bold text-slate-800 flex items-center  gap-2'>
          <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='#1f1f1f'>
            <path d='M480-120q-138 0-240.5-91.5T122-440h82q14 104 92.5 172T480-200q117 0 198.5-81.5T760-480q0-117-81.5-198.5T480-760q-69 0-129 32t-101 88h110v80H120v-240h80v94q51-64 124.5-99T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z' />
          </svg>
          {t('history.title')}
        </h3>
      </div>

      {history.length === 0 && <p className='text-sm text-slate-600'>{t('history.empty')}</p>}
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
                className='m-1 w-8 px-1 border border-gray-400 bg-amber-300 font-bold rounded-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='20px'
                  viewBox='0 -960 960 960'
                  width='20px'
                  fill='#1f1f1f'
                >
                  <path d='M240-144v-600q0-30.11 21-51.56Q282-817 312-816h216v72H312v493l168-67 168 67v-277h72v384l-240-96-240 96Zm72-600h216-216Zm372 132v-72h-72v-72h72v-72h72v72h72v72h-72v72h-72Z' />
                </svg>
              </button>
              <button
                onClick={() => {
                  setAndRoll(roll.input);
                }}
                className='m-1 w-8 px-1 border border-gray-400 bg-amber-300 font-bold rounded-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='20px'
                  viewBox='0 -960 960 960'
                  width='20px'
                  fill='#1f1f1f'
                >
                  <path d='M312-252q25 0 42.5-17.5T372-312q0-25-17.5-42.5T312-372q-25 0-42.5 17.5T252-312q0 25 17.5 42.5T312-252Zm0-336q25 0 42.5-17.5T372-648q0-25-17.5-42.5T312-708q-25 0-42.5 17.5T252-648q0 25 17.5 42.5T312-588Zm168 168q25 0 42.5-17.5T540-480q0-25-17.5-42.5T480-540q-25 0-42.5 17.5T420-480q0 25 17.5 42.5T480-420Zm168 168q25 0 42.5-17.5T708-312q0-25-17.5-42.5T648-372q-25 0-42.5 17.5T588-312q0 25 17.5 42.5T648-252Zm0-336q25 0 42.5-17.5T708-648q0-25-17.5-42.5T648-708q-25 0-42.5 17.5T588-648q0 25 17.5 42.5T648-588ZM216-144q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h528q29.7 0 50.85 21.15Q816-773.7 816-744v528q0 29.7-21.15 50.85Q773.7-144 744-144H216Zm0-72h528v-528H216v528Zm0-528v528-528Z' />
                </svg>
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryComponent;
