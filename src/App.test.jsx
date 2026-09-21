import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

const { roll } = vi.hoisted(() => ({ roll: vi.fn() }));

vi.mock('@dice-roller/rpg-dice-roller', () => ({
  DiceRoller: vi.fn(function DiceRoller() {
    return { roll };
  }),
}));

import App from './App';
import i18n from './i18n';

const rollButton = () => screen.getByRole('button', { name: 'Roll dice' });
const rollInput = () => screen.getByRole('textbox');

async function makeRoll(user, expression) {
  await user.clear(rollInput());
  await user.type(rollInput(), expression);
  await user.click(rollButton());
}

describe('Rolldozer', () => {
  beforeEach(async () => {
    window.localStorage.clear();
    await i18n.changeLanguage('en');
    roll.mockReset();
    roll.mockImplementation(expression => ({ output: `Result: ${expression}` }));
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('adds a valid roll to history', async () => {
    const user = userEvent.setup();
    render(<App />);

    await makeRoll(user, 'd20');

    expect(screen.getByText('Result: d20')).toBeInTheDocument();
  });

  it('shows a localized error without adding an invalid roll to history', async () => {
    const user = userEvent.setup();
    roll.mockImplementation(() => {
      throw new Error('syntax error');
    });
    render(<App />);

    await makeRoll(user, 'not dice');

    expect(screen.getByText('Invalid roll expression not dice: syntax error')).toBeInTheDocument();
    expect(screen.getByText('Here you can see your previous rolls.')).toBeInTheDocument();
  });

  it('saves a named favorite and can reroll it', async () => {
    const user = userEvent.setup();
    vi.spyOn(window, 'prompt').mockReturnValue('Attack');
    render(<App />);

    await makeRoll(user, 'd20');
    await user.click(screen.getByRole('button', { name: 'Add to favorites' }));

    expect(screen.getByText('Attack')).toBeInTheDocument();
    expect(screen.getByText('[d20]')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Roll favorite Attack' }));

    expect(roll).toHaveBeenCalledTimes(2);
  });

  it('does not save a favorite when its name is cancelled or blank', async () => {
    const user = userEvent.setup();
    const prompt = vi.spyOn(window, 'prompt');
    render(<App />);

    await makeRoll(user, 'd20');
    prompt.mockReturnValueOnce(null);
    await user.click(screen.getByRole('button', { name: 'Add to favorites' }));
    prompt.mockReturnValueOnce('   ');
    await user.click(screen.getByRole('button', { name: 'Add to favorites' }));

    expect(screen.getByText('You can save your favorite rolls here.')).toBeInTheDocument();
  });

  it('removes a saved favorite', async () => {
    const user = userEvent.setup();
    vi.spyOn(window, 'prompt').mockReturnValue('Attack');
    render(<App />);

    await makeRoll(user, 'd20');
    await user.click(screen.getByRole('button', { name: 'Add to favorites' }));
    await user.click(screen.getByRole('button', { name: 'Remove from favorites' }));

    expect(screen.getByText('You can save your favorite rolls here.')).toBeInTheDocument();
  });

  it('keeps only the ten most recent rolls', async () => {
    const user = userEvent.setup();
    render(<App />);

    for (let number = 1; number <= 11; number += 1) {
      await makeRoll(user, `d${number}`);
    }

    expect(screen.queryByText('Result: d1')).not.toBeInTheDocument();
    expect(screen.getByText('Result: d2')).toBeInTheDocument();
    expect(screen.getByText('Result: d11')).toBeInTheDocument();
  });

  it('restores history and favorites from local storage', () => {
    window.localStorage.setItem('history', JSON.stringify([{ input: 'd8', output: 'Result: d8' }]));
    window.localStorage.setItem('favorites', JSON.stringify([['Damage', '2d6']]));

    render(<App />);

    expect(screen.getByText('Result: d8')).toBeInTheDocument();
    expect(screen.getByText('Damage')).toBeInTheDocument();
    expect(screen.getByText('[2d6]')).toBeInTheDocument();
  });
});
