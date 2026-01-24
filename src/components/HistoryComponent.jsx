import { useTranslation } from 'react-i18next';

const HistoryComponent = ({ history, setAndRoll, addRollToFavorites }) => {
  const { t } = useTranslation();
  
  return (
    <div id='history' className='p-2'>
      <div>
        <h3 className='text-lg font-semibold text-slate-800'>{t('history.title')}</h3>
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
                className='m-1 w-16 px-1 border border-gray-400 bg-amber-300 font-bold rounded-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition'
              >
                {t('history.save')}
              </button>
              <button
                onClick={() => {
                  setAndRoll(roll.input);
                }}
                className='m-1 w-16 px-1 border border-gray-400 bg-amber-300 font-bold rounded-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition'
              >
                {t('rollButton')}
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryComponent;
