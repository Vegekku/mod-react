import React from 'react'

const SAMPLE_DETAILS = {
  id: 1,
  homepage: 'http://www.dbmovie-20th.com/',
  original_title: 'ドラゴンボール超スーパー ブロリー',
  overview: 'La Tierra vive en paz después de que concluyó el Torneo de Fuerza. Luego de darse cuenta que los Universos aún tienen muchos guerreros poderosos, Gokú pasa todos los días entrenando para alcanzar un nivel de pelea mayor.  Un día Gokú y Vegeta enfrentan a un nuevo saiyajin llamado “Broly”, a quien nunca antes han visto. Supuestamente, los saiyajin fueron arrasados durante la destrucción del planeta Vegeta; entonces ¿qué hace uno de ellos en la Tierra?  Este encuentro entre tres saiyajin, que han tenido destinos diferentes, se convierte en una batalla estupenda, con Freezer (que ha vuelto del infierno) atrapado en medio de ellos.',
  poster_path: '/4urPfAgAWyimfKghVWRvVwD88Cz.jpg',
  backdrop_path: '/6OTRuxpwUUGbmCX3MKP25dOmo59.jpg',
  release_date: '2018-12-14',
  budget: 8500000,
  revenue: 89617139,
  runtime: 100,
  title: 'Dragon Ball Super: Broly',
  vote_average: 7.4,
  tagline: ''
}

export default props =>
  <div className='detail'>
    <img className='detail__poster' src={`https://image.tmdb.org/t/p/w300${SAMPLE_DETAILS.poster_path}`} alt={SAMPLE_DETAILS.title}></img>
    <h1 className='detail__title'>{SAMPLE_DETAILS.title}</h1>
    {
      SAMPLE_DETAILS.tagline !== '' &&
      <h2 className='detail__tagline'>{SAMPLE_DETAILS.tagline}</h2>
    }
    <h2 className='detail__original_title'>{SAMPLE_DETAILS.original_title}</h2>
    <p>{SAMPLE_DETAILS.release_date}</p>
    <p>{SAMPLE_DETAILS.overview}</p>
    <a href={SAMPLE_DETAILS.homepage}>{SAMPLE_DETAILS.homepage}</a>
  </div>