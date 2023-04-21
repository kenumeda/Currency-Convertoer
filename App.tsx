import * as React from 'react';
import './style.css';
import Currency from './CurrencyRow';

export default function App() {
  return (
    <div>
      <h1>Convereet</h1>
      <Currency />
      <div className="equals">=</div>
      <Currency />
    </div>
  );
}
