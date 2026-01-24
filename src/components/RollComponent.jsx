import { useTranslation } from 'react-i18next';

const RollComponent = ({ rollInput, setRollInput, handleRoll }) => {
  const { t } = useTranslation();

  return (
    <div id='roll' className='p-2'>
      <div id='rollHeader'>
        <h3 className='text-lg font-bold text-slate-800 flex items-center gap-2'>
          <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='#1f1f1f'>
            <path d='M300-240q25 0 42.5-17.5T360-300q0-25-17.5-42.5T300-360q-25 0-42.5 17.5T240-300q0 25 17.5 42.5T300-240Zm0-360q25 0 42.5-17.5T360-660q0-25-17.5-42.5T300-720q-25 0-42.5 17.5T240-660q0 25 17.5 42.5T300-600Zm180 180q25 0 42.5-17.5T540-480q0-25-17.5-42.5T480-540q-25 0-42.5 17.5T420-480q0 25 17.5 42.5T480-420Zm180 180q25 0 42.5-17.5T720-300q0-25-17.5-42.5T660-360q-25 0-42.5 17.5T600-300q0 25 17.5 42.5T660-240Zm0-360q25 0 42.5-17.5T720-660q0-25-17.5-42.5T660-720q-25 0-42.5 17.5T600-660q0 25 17.5 42.5T660-600ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z' />
          </svg>
          {t('roll.title')}
        </h3>
        <a
          href='https://dice-roller.github.io/documentation/guide/notation/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-xs text-blue-600 hover:underline'
        >
          {t('roll.documentation')}
        </a>
      </div>

      <div id='rollDetails' className='p-4 flex justify-center items-center space-x-4'>
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
          placeholder={t('roll.inputPlaceholder')}
        />
        <button
          onClick={() => handleRoll()}
          className='m-1 mr-3 w-8 px-1 border border-gray-400 bg-amber-300 rounded-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition'
        >
          <svg xmlns='http://www.w3.org/2000/svg' height='20px' viewBox='0 -960 960 960' width='20px' fill='#1f1f1f'>
            <path d='M312-252q25 0 42.5-17.5T372-312q0-25-17.5-42.5T312-372q-25 0-42.5 17.5T252-312q0 25 17.5 42.5T312-252Zm0-336q25 0 42.5-17.5T372-648q0-25-17.5-42.5T312-708q-25 0-42.5 17.5T252-648q0 25 17.5 42.5T312-588Zm168 168q25 0 42.5-17.5T540-480q0-25-17.5-42.5T480-540q-25 0-42.5 17.5T420-480q0 25 17.5 42.5T480-420Zm168 168q25 0 42.5-17.5T708-312q0-25-17.5-42.5T648-372q-25 0-42.5 17.5T588-312q0 25 17.5 42.5T648-252Zm0-336q25 0 42.5-17.5T708-648q0-25-17.5-42.5T648-708q-25 0-42.5 17.5T588-648q0 25 17.5 42.5T648-588ZM216-144q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h528q29.7 0 50.85 21.15Q816-773.7 816-744v528q0 29.7-21.15 50.85Q773.7-144 744-144H216Zm0-72h528v-528H216v528Zm0-528v528-528Z' />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default RollComponent;
