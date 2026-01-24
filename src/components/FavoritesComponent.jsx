import { useTranslation } from 'react-i18next';

const FavoritesComponent = ({ favorites, setAndRoll, removeFromFavorites }) => {
  const { t } = useTranslation();
  
  return (
    <div id='favorites' className='p-2'>
      <div>
        <h3 className='text-lg font-semibold text-slate-800'>{t('favorites.title')}</h3>
      </div>

      {favorites.size === 0 && (
        <p className='text-sm text-slate-600'>{t('favorites.empty')}</p>
      )}
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
                {t('favorites.remove')}
              </button>
              <button
                onClick={() => {
                  setAndRoll(v);
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
export default FavoritesComponent;
