import { Morpheme, Sentence } from 'types/Morphology';

const getLyricsInSentences = (morphenes: Morpheme[]): Sentence[] => {
  return morphenes.reduce<Sentence[]>(
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
  id: string;
  isClauseEnd: boolean;
};

type SentenceForDisplay = MorphemeForDisplay[];

const getSentencesForDisplay = (
  morphenes: Morpheme[]
): SentenceForDisplay[] => {
  const sentences = getLyricsInSentences(morphenes);

  return sentences.reduce<SentenceForDisplay[]>((rows, sentence) => {
    return [
      ...rows,
      sentence.reduce<MorphemeForDisplay[]>((morphemes, clause, rowIndex) => {
        return [
          ...morphemes,
          ...clause.map((morpheme, index) => {
            return {
              ...morpheme,
              id: `${morpheme.surface}-${index}-${rowIndex}`,
              isClauseEnd: clause.length - 1 === index,
            };
          }),
        ];
      }, []),
    ];
  }, []);
};

export { getSentencesForDisplay };
