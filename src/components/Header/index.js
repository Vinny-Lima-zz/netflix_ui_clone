import React from 'react';
import './style.css';

export default ({black}) => {
  return(
    <header className={black ? 'black' : ''}>
      <div className='header--logo'>
        <a href='/'>
          <img src='https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg' alt='Netflix' />
        </a>
      </div>
      <div className='header--user'>
        <a href='#'>
          <img src='https://occ-0-1315-185.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABRGTK96GBeqNw5zzYXnoa8oVjSjhuk7SuseuKTmgEKwpcCB59994UWb6wd7d1WONZOuzJwbLNpzG5Okfo4rSDLg.png?r=ee6' alt='Usuário' />
        </a>
      </div>

    </header>

  );
}