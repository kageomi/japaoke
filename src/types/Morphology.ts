import {
  is,
  object,
  string,
  array,
  assign,
  optional,
  Infer,
} from 'superstruct';

const MorphemeBaseRuntimeType = object({
  surface: string(),
  furigana: optional(string()),
  roman: optional(string()),
});
const MorphemeRuntimeType = assign(
  MorphemeBaseRuntimeType,
  object({
    subword: optional(array(MorphemeBaseRuntimeType)),
  })
);
const ClauseRuntimeType = array(MorphemeRuntimeType);
const SentenceRuntimeType = array(ClauseRuntimeType);

type Morpheme = Infer<typeof MorphemeRuntimeType>;
type Clause = Infer<typeof ClauseRuntimeType>;
type Sentence = Infer<typeof SentenceRuntimeType>;

const isMorpheme = (object: unknown): object is Morpheme => {
  return is(object, MorphemeRuntimeType);
};
const isClause = (object: unknown): object is Clause => {
  return is(object, ClauseRuntimeType);
};
const isSentence = (object: unknown): object is Sentence => {
  return is(object, SentenceRuntimeType);
};

export type { Morpheme, Clause, Sentence };
export {
  MorphemeRuntimeType,
  isMorpheme,
  ClauseRuntimeType,
  isClause,
  SentenceRuntimeType,
  isSentence,
};
