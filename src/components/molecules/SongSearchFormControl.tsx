import { ReactElement } from 'react';
import { InputProps } from '@chakra-ui/react';
import IconCard from 'components/atoms/IconCard';
import type Song from 'types/Song';
import { ListingSearchFormControl } from './ListingSearchFormControl';

type Props = {
  inputProps?: InputProps;
  songList: Song[];
  isLoading: boolean;
  isListVisible: boolean;
  onClickSongItem: (songId: number, index: number) => void;
};

const SongSearchFormControl = ({
  songList,
  inputProps,
  onClickSongItem,
  ...props
}: Props): ReactElement => {
  const itemList = songList.map(
    ({ id, title, artistNames, songArtImageThumbnailUrl }, index) => (
      <IconCard
        key={id}
        title={title}
        subTitle={artistNames}
        imageUrl={songArtImageThumbnailUrl}
        onClick={() => onClickSongItem(id, index)}
        cursor="pointer"
        _hover={{ bg: 'gray.50' }}
      />
    )
  );

  return (
    <ListingSearchFormControl
      itemList={itemList}
      inputProps={inputProps}
      {...props}
    />
  );
};

export { SongSearchFormControl };
