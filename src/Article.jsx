const albums = [
  {
    id: 1,
    title: 'Kid A',
    artist: 'Radiohead',
    genre: 'Rock',
    year: 2000,
    rating: 4.5
  },
  {
    id: 2,
    title: 'To Pimp a Butterfly',
    artist: 'Kendrick Lamar',
    genre: 'Hip Hop',
    year: 2015,
    rating: 5
  },
  {
    id: 3,
    title: 'Abbey Road',
    artist: 'The Beatles',
    genre: 'Rock',
    year: 1969,
    rating: 4.8,
  }
];

export default function Article() {

  const listRock = albums.filter(album => album.genre === 'Rock');
  const listAlbums = listRock.map(album => 
  <li>
    Titre: {album.title}
    <li>Artiste: {album.artist}</li>
  </li>
  );
}