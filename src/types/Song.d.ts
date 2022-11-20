interface Song {
  id: number;
  title: string;
  artistNames: string;
  songArtImageThumbnailUrl: string;
  lyrics?: string;
  artistId: number;
}

export default Song;
