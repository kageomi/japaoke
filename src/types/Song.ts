import { is, object, number, string, Infer } from 'superstruct';

const SongRuntimeType = object({
  id: number(),
  title: string(),
  artistNames: string(),
  songArtImageThumbnailUrl: string(),
  lyrics: string(),
  artistId: number(),
});

type Song = Infer<typeof SongRuntimeType>;

const isSong = (object: unknown): object is Song => {
  return is(object, SongRuntimeType);
};

export default Song;
export { SongRuntimeType, isSong };
