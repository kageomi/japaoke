import { Morpheme, Sentence } from 'types/Morphology';

const getLyricsInSentences = (morphemes: Morpheme[]): Sentence[] => {
  return morphemes.reduce<Sentence[]>(
    (sentences, morpheme) => {
      const lastSentence = sentences.slice(-1)[0];
      const lastClause = lastSentence.slice(-1)[0];
      const { surface } = morpheme;
      if (/^\n+$/.test(surface)) return [...sentences, [[]]];
      if (/^\s+$/.test(surface))
        return [...sentences.slice(0, -1), [...lastSentence, []]];

      return [
        ...sentences.slice(0, -1),
        [...lastSentence.slice(0, -1), [...lastClause, morpheme]],
      ];
    },
    [[[]]]
  );
};

type MorphemeForDisplay = Morpheme & {
  isClauseEnd: boolean;
};

type SentenceForDisplay = MorphemeForDisplay[];

const getSentencesForDisplay = (
  morphemes: Morpheme[]
): SentenceForDisplay[] => {
  const sentences = getLyricsInSentences(morphemes);

  return sentences.reduce<SentenceForDisplay[]>((rows, sentence) => {
    return [
      ...rows,
      sentence.reduce<MorphemeForDisplay[]>((morphemes, clause) => {
        return [
          ...morphemes,
          ...clause.map((morpheme, index) => {
            return {
              ...morpheme,
              isClauseEnd: clause.length - 1 === index,
            };
          }),
        ];
      }, []),
    ];
  }, []);
};

export { getSentencesForDisplay };
