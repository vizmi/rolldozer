import { useState, useEffect } from 'react';
import { DiceRoller } from '@dice-roller/rpg-dice-roller';
import { useTranslation } from 'react-i18next';
import RollComponent from './components/RollComponent';
import HistoryComponent from './components/HistoryComponent';
import FavoritesComponent from './components/FavoritesComponent';

export default function App() {
  const roller = new DiceRoller();
  const { t } = useTranslation();

  // State variables
  const [rollInput, setRollInput] = useState('');
  const [error, setError] = useState('');
  const [history, setHistory] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? new Map(JSON.parse(storedFavorites)) : new Map();
  });

  const setAndRoll = newInput => {
    setRollInput(newInput);
    handleRoll(newInput);
  };

  const handleRoll = (i = rollInput) => {
    try {
      const roll = roller.roll(i);
      const r = roll.output;
      addRollToHistory(i, r);
      setError('');
    } catch (error) {
      setError(`Invalid roll expression ${i}: ${error.message}`);
    }
  };

  const addRollToHistory = (input, output) => {
    setHistory(prev => [{ input, output }, ...prev.slice(0, 9)]);
  };

  const addRollToFavorites = input => {
    const name = window.prompt(`Name your favorite ${input} roll:`);
    console.log('adding favorite', name, input);
    setFavorites(prev => new Map([...prev, [name, input]]));
  };

  const removeFromFavorites = key => {
    setFavorites(prev => {
      const newFavs = new Map(prev);
      newFavs.delete(key);
      return newFavs;
    });
  };

  // Persist favorites to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('favorites', JSON.stringify(Array.from(favorites.entries())));
    } catch (e) {
      console.error('Failed to save favorites to localStorage', e);
    }
  }, [favorites]);

  // Listen for `storage` events so favorites stay in sync across tabs/windows
  useEffect(() => {
    const handleStorage = event => {
      if (event.key !== 'favorites') return;
      try {
        if (event.newValue) {
          const parsed = JSON.parse(event.newValue);
          setFavorites(new Map(parsed));
        }
      } catch (err) {
        console.error('Failed to parse favorites from storage event', err);
      }
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  return (
    <>
      <div
        id='header'
        className='p-4 text-center text-slate-800 bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400'
      >
        <h1 className='p-1 text-4xl font-black  tracking-wider text-shadow-lg'>{t('header.title')}</h1>
        <p className='text-md font-bold'>{t('header.tagline')}</p>
      </div>
      <div id='main' className='bg-yellow-100 text-slate-800 flex flex-col justify-center items-center'>
        <div id='grid' className='w-full grid grid-cols-1 md:grid-cols-2'>
          <div id='roll' className='col-span-2'>
            <RollComponent rollInput={rollInput} setRollInput={setRollInput} handleRoll={handleRoll} />
          </div>
          <div id='favorites' className='col-span-1'>
            <HistoryComponent history={history} setAndRoll={setAndRoll} addRollToFavorites={addRollToFavorites} />
          </div>
          <div id='history' className='col-span-1'>
            <FavoritesComponent
              favorites={favorites}
              setAndRoll={setAndRoll}
              removeFromFavorites={removeFromFavorites}
            />
          </div>
        </div>
      </div>
      {error && (
        <div className='fixed bottom-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-red-100 border border-red-400 text-red-700 font-bold rounded shadow-lg min-w-[200px] max-w-md text-center'>
          {error}
        </div>
      )}
    </>
  );
}
