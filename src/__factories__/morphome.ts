import { faker } from '@faker-js/faker';
import { Morpheme } from 'types/Morphology';

const createRandomMorpheme = (): Morpheme => {
  const morpheme = faker.random.word();

  return {
    surface: morpheme.toUpperCase(),
    furigana: morpheme,
    roman: morpheme,
  };
};

export { createRandomMorpheme };
