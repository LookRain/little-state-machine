import * as React from 'react';
import { STORE_DEFAULT_NAME } from './constants';

export default function DevToolStorage({ setLoadPanel }) {
  return (
    <div
      style={{
        color: 'white',
        position: 'absolute',
        top: 30,
        right: 0,
        width: 450,
        margin: 0,
        padding: 10,
        background: '#0a1c2c',
        fontSize: 12,
        boxSizing: 'border-box',
        height: '100vh',
        zIndex: 99999999,
      }}
    >
      <ul
        style={{
          padding: 0,
          margin: 0,
          listStyle: 'none',
          fontSize: 14,
          lineHeight: 1.5,
        }}
      >
        {Object.entries(window.localStorage)
          .reverse()
          .map(([key, value]) => (
            <li>
              <button
                style={{
                  padding: 10,
                  margin: '0 0 20px',
                  width: '100%',
                  textAlign: 'left',
                  background: 'none',
                  color: 'white',
                  border: '1px solid #335c7d',
                }}
                onClick={() => {
                  if (confirm('Are you sure to load state?')) {
                    window.sessionStorage.setItem(STORE_DEFAULT_NAME, value);
                  }
                }}
              >
                {key}
              </button>
            </li>
          ))}
      </ul>
      <button
        style={{
          margin: 0,
        }}
        onClick={() => setLoadPanel(false)}
      >
        Go Back
      </button>
    </div>
  );
}