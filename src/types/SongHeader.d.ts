import Song from './Song';

type SongHeader = Omit<Song, 'lyrics'>;

export default SongHeader;
