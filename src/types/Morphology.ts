type Morpheme = {
  surface: string;
  furigana: string;
  roman: string;
};
type Clause = Morpheme[];
type Sentence = Clause[];

export type { Morpheme, Clause, Sentence };
