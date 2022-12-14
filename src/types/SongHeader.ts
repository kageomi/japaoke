import { is, omit, object, string, assign, Infer } from 'superstruct';
import { SongRuntimeType } from './Song';

const SongHeaderRuntimeType = assign(
  omit(SongRuntimeType, ['lyrics', 'artistId']),
  object({ path: string() })
);
type SongHeader = Infer<typeof SongHeaderRuntimeType>;

const isSongHeader = (object: unknown): object is SongHeader => {
  return is(object, SongHeaderRuntimeType);
};

export { SongHeaderRuntimeType, isSongHeader };
export default SongHeader;
