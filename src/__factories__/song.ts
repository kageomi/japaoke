import { faker } from '@faker-js/faker';
import Song from 'types/Song';

const createRandomSong = (): Song => {
  return {
    id: parseInt(faker.random.numeric(5)),
    title: faker.music.songName(),
    artistNames: faker.name.fullName(),
    songArtImageThumbnailUrl: faker.image.avatar(),
    lyrics: faker.lorem.lines(30),
    artistId: parseInt(faker.random.numeric(5)),
  };
};

export { createRandomSong };
