import { faker } from '@faker-js/faker';
import SongHeader from 'types/SongHeader';

const createRandomSongHeader = (): SongHeader => {
  return {
    id: parseInt(faker.random.numeric(5)),
    title: faker.music.songName(),
    artistNames: faker.name.fullName(),
    songArtImageThumbnailUrl: faker.image.avatar(),
    artistId: parseInt(faker.random.numeric(5)),
  };
};

export { createRandomSongHeader };
