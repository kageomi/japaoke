import { Morpheme } from '../../types/Morphology';
import {
  getLyricsInSentences,
  getSentencesForDisplay,
} from '../../util/lyrics';

describe('getLyricsInSentences', () => {
  test('should return 3 dimensional empty array', () => {
    const input: Morpheme[] = [];
    const result = [[[]]];
    expect(getLyricsInSentences(input)).toEqual(result);
  });

  test('should return only one morpheme in three dimensional array', () => {
    const input = [{ surface: 'これは', furigana: 'これは', roman: 'koreha' }];
    const result = [
      [[{ surface: 'これは', furigana: 'これは', roman: 'koreha' }]],
    ];
    expect(getLyricsInSentences(input)).toEqual(result);
  });

  test('should return two clauses', () => {
    const input = [
      { surface: 'これは', furigana: 'これは', roman: 'koreha' },
      { surface: ' ', furigana: ' ', roman: ' ' },
      { surface: 'ユニット', furigana: 'ゆにっと', roman: 'unit' },
      { surface: 'テスト', furigana: 'てすと', roman: 'tesuto' },
      { surface: 'です。', furigana: 'です。', roman: 'desu.' },
    ];
    const result = [
      [
        [{ surface: 'これは', furigana: 'これは', roman: 'koreha' }],
        [
          { surface: 'ユニット', furigana: 'ゆにっと', roman: 'unit' },
          { surface: 'テスト', furigana: 'てすと', roman: 'tesuto' },
          { surface: 'です。', furigana: 'です。', roman: 'desu.' },
        ],
      ],
    ];
    expect(getLyricsInSentences(input)).toEqual(result);
  });

  test('should return three clauses', () => {
    const input = [
      { surface: 'これは', furigana: 'これは', roman: 'koreha' },
      { surface: ' ', furigana: ' ', roman: ' ' },
      { surface: 'ユニット', furigana: 'ゆにっと', roman: 'unit' },
      { surface: 'テスト', furigana: 'てすと', roman: 'tesuto' },
      { surface: ' ', furigana: ' ', roman: ' ' },
      { surface: 'です。', furigana: 'です。', roman: 'desu.' },
    ];
    const result = [
      [
        [{ surface: 'これは', furigana: 'これは', roman: 'koreha' }],
        [
          { surface: 'ユニット', furigana: 'ゆにっと', roman: 'unit' },
          { surface: 'テスト', furigana: 'てすと', roman: 'tesuto' },
        ],
        [{ surface: 'です。', furigana: 'です。', roman: 'desu.' }],
      ],
    ];
    expect(getLyricsInSentences(input)).toEqual(result);
  });

  test('should return two sentences', () => {
    const input = [
      { surface: 'これは', furigana: 'これは', roman: 'koreha' },
      { surface: 'ユニット', furigana: 'ゆにっと', roman: 'unit' },
      { surface: 'テスト', furigana: 'てすと', roman: 'tesuto' },
      { surface: 'です。', furigana: 'です。', roman: 'desu.' },
      { surface: '\n', furigana: '\n', roman: '\n' },
      { surface: 'これは', furigana: 'これは', roman: 'koreha' },
      { surface: 'ユニット', furigana: 'ゆにっと', roman: 'unit' },
      { surface: 'テスト', furigana: 'てすと', roman: 'tesuto' },
      { surface: 'です。', furigana: 'です。', roman: 'desu.' },
    ];
    const result = [
      [
        [
          { surface: 'これは', furigana: 'これは', roman: 'koreha' },
          { surface: 'ユニット', furigana: 'ゆにっと', roman: 'unit' },
          { surface: 'テスト', furigana: 'てすと', roman: 'tesuto' },
          { surface: 'です。', furigana: 'です。', roman: 'desu.' },
        ],
      ],
      [
        [
          { surface: 'これは', furigana: 'これは', roman: 'koreha' },
          { surface: 'ユニット', furigana: 'ゆにっと', roman: 'unit' },
          { surface: 'テスト', furigana: 'てすと', roman: 'tesuto' },
          { surface: 'です。', furigana: 'です。', roman: 'desu.' },
        ],
      ],
    ];
    expect(getLyricsInSentences(input)).toEqual(result);
  });

  test('should return two sentences consisting of two clauses for each', () => {
    const input = [
      { surface: 'これは', furigana: 'これは', roman: 'koreha' },
      { surface: 'ユニット', furigana: 'ゆにっと', roman: 'unit' },
      { surface: ' ', furigana: ' ', roman: ' ' },
      { surface: 'テスト', furigana: 'てすと', roman: 'tesuto' },
      { surface: 'です。', furigana: 'です。', roman: 'desu.' },
      { surface: '\n', furigana: '\n', roman: '\n' },
      { surface: 'これは', furigana: 'これは', roman: 'koreha' },
      { surface: ' ', furigana: ' ', roman: ' ' },
      { surface: 'ユニット', furigana: 'ゆにっと', roman: 'unit' },
      { surface: 'テスト', furigana: 'てすと', roman: 'tesuto' },
      { surface: 'です。', furigana: 'です。', roman: 'desu.' },
    ];
    const result = [
      [
        [
          { surface: 'これは', furigana: 'これは', roman: 'koreha' },
          { surface: 'ユニット', furigana: 'ゆにっと', roman: 'unit' },
        ],
        [
          { surface: 'テスト', furigana: 'てすと', roman: 'tesuto' },
          { surface: 'です。', furigana: 'です。', roman: 'desu.' },
        ],
      ],
      [
        [{ surface: 'これは', furigana: 'これは', roman: 'koreha' }],
        [
          { surface: 'ユニット', furigana: 'ゆにっと', roman: 'unit' },
          { surface: 'テスト', furigana: 'てすと', roman: 'tesuto' },
          { surface: 'です。', furigana: 'です。', roman: 'desu.' },
        ],
      ],
    ];
    expect(getLyricsInSentences(input)).toEqual(result);
  });
});

describe('getSentencesForDisplay', () => {
  test('should return 2 dimensional empty array', () => {
    const input: Morpheme[] = [];
    const result = [[]];
    expect(getSentencesForDisplay(input)).toEqual(result);
  });

  test('should return sentence with clause information', () => {
    const input = [
      { surface: 'これは', furigana: 'これは', roman: 'koreha' },
      { surface: ' ', furigana: ' ', roman: ' ' },
      { surface: 'ユニット', furigana: 'ゆにっと', roman: 'unit' },
      { surface: 'テスト', furigana: 'てすと', roman: 'tesuto' },
      { surface: 'です。', furigana: 'です。', roman: 'desu.' },
    ];
    const result = [
      [
        {
          surface: 'これは',
          furigana: 'これは',
          roman: 'koreha',
          isClauseEnd: true,
        },
        {
          surface: 'ユニット',
          furigana: 'ゆにっと',
          roman: 'unit',
          isClauseEnd: false,
        },
        {
          surface: 'テスト',
          furigana: 'てすと',
          roman: 'tesuto',
          isClauseEnd: false,
        },
        {
          surface: 'です。',
          furigana: 'です。',
          roman: 'desu.',
          isClauseEnd: true,
        },
      ],
    ];
    expect(getSentencesForDisplay(input)).toEqual(result);
  });

  test('should return two sentences with clause information', () => {
    const input = [
      { surface: 'これは', furigana: 'これは', roman: 'koreha' },
      { surface: 'ユニット', furigana: 'ゆにっと', roman: 'unit' },
      { surface: ' ', furigana: ' ', roman: ' ' },
      { surface: 'テスト', furigana: 'てすと', roman: 'tesuto' },
      { surface: 'です。', furigana: 'です。', roman: 'desu.' },
      { surface: '\n', furigana: '\n', roman: '\n' },
      { surface: 'これは', furigana: 'これは', roman: 'koreha' },
      { surface: ' ', furigana: ' ', roman: ' ' },
      { surface: 'ユニット', furigana: 'ゆにっと', roman: 'unit' },
      { surface: 'テスト', furigana: 'てすと', roman: 'tesuto' },
      { surface: 'です。', furigana: 'です。', roman: 'desu.' },
    ];
    const result = [
      [
        {
          surface: 'これは',
          furigana: 'これは',
          roman: 'koreha',
          isClauseEnd: false,
        },
        {
          surface: 'ユニット',
          furigana: 'ゆにっと',
          roman: 'unit',
          isClauseEnd: true,
        },
        {
          surface: 'テスト',
          furigana: 'てすと',
          roman: 'tesuto',
          isClauseEnd: false,
        },
        {
          surface: 'です。',
          furigana: 'です。',
          roman: 'desu.',
          isClauseEnd: true,
        },
      ],
      [
        {
          surface: 'これは',
          furigana: 'これは',
          roman: 'koreha',
          isClauseEnd: true,
        },
        {
          surface: 'ユニット',
          furigana: 'ゆにっと',
          roman: 'unit',
          isClauseEnd: false,
        },
        {
          surface: 'テスト',
          furigana: 'てすと',
          roman: 'tesuto',
          isClauseEnd: false,
        },
        {
          surface: 'です。',
          furigana: 'です。',
          roman: 'desu.',
          isClauseEnd: true,
        },
      ],
    ];
    expect(getSentencesForDisplay(input)).toEqual(result);
  });
});
