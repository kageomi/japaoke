import { FC } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from '@chakra-ui/react';
import { H } from 'react-headings';

const Top: FC = () => {
  return (
    <>
      <H>Welcome to JAPAOKE</H>
      <p>
        This wep page is for singing Japanese songs.
        <br />
        Japanese has three writing systems.
        <br />
        And it's difficult to read and sing a song if you get only lyrics in
        Kanji.
        <br />
        So you can check Romaji lyrics of Japanese songs here.
      </p>
      <FormControl>
        <FormLabel>keyword for searching songs</FormLabel>
        <Input placeholder="title or artist" type="text" />
        <FormHelperText></FormHelperText>
      </FormControl>
    </>
  );
};

export default Top;
