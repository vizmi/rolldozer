import { useTranslation } from 'react-i18next';

const FavoritesComponent = ({ favorites, setAndRoll, removeFromFavorites }) => {
  const { t } = useTranslation();

  return (
    <div id='favorites' className='p-2'>
      <div>
        <h3 className='text-lg font-bold text-slate-800 flex items-center gap-2'>
          <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='#1f1f1f'>
            <path d='M480-240 63-467l84-46 333 182 333-182 84 46-417 227Zm0 160L63-307l84-46 333 182 333-182 84 46L480-80Zm0-320L40-640l440-240 40 22v178h327l73 40-440 240Zm0-91 200-109H440v-167L207-640l273 149Zm-40-109Z' />
          </svg>
          {t('favorites.title')}
        </h3>
      </div>

      {favorites.size === 0 && <p className='text-sm text-slate-600'>{t('favorites.empty')}</p>}
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
                className='m-1 w-8 px-1 border border-gray-400 bg-amber-300 font-bold rounded-md hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='20px'
                  viewBox='0 -960 960 960'
                  width='20px'
                  fill='#1f1f1f'
                >
                  <path d='M828-684H612v-72h216v72ZM240-144v-600q0-30.11 21-51.56Q282-817 312-816h216v72H312v493l168-67 168 67v-277h72v384l-240-96-240 96Zm72-600h216-216Z' />
                </svg>
              </button>
              <button
                onClick={() => {
                  setAndRoll(v);
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
export default FavoritesComponent;
