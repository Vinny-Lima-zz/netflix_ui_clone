import React from 'react';
import './style.css';

export default ({item}) => {
  //console.log(item);

  let firstDate = new Date(item.first_air_date);
  let genres = [];
  for(let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  let description = item.overview;
  if(description.length > 250) {
    description = description.substring(0, 250) + '...';
  }

  return(
    <section className='featuredMovie' style={{
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    }}>
      <div className='featuredMovie--vertical'>
        <div className='featuredMovie--horizontal'>
          <div className='featuredMovie--name'>{item.original_name}</div>
          <div className='featuredMovie--info'>
            <div className='featuredMovie--info__score'>{item.vote_average} pontos</div>
            <div className='featuredMovie--info__year'>{firstDate.getFullYear()}</div>
            <div className='featuredMovie--info__seasons'>{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
          </div>

          <div className='featuredMovie--description'>{description}</div>
          <div className='featuredMovie--buttons'>
            <a href={`/watch/${item.id}`} className='featuredMovie--buttons__watch'>▶ Assistir</a>
            <a href={`/list/add/${item.id}`} className='featuredMovie--buttons__listAdd'>+ Minha Lista</a>
          </div>
          <div className='featuredMovie--genres'><strong>Gêneros:</strong> {genres.join(', ')}</div>
        </div>
      </div>
    </section>
  )
}