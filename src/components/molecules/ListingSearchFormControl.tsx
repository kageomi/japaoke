import { ReactElement } from 'react';
import { Search2Icon } from '@chakra-ui/icons';
import {
  Box,
  List,
  ListItem,
  FormControl,
  InputProps,
  FormControlProps,
} from '@chakra-ui/react';
import { LoadingInput } from 'components/atoms/LoadingInput';

type Props = {
  inputProps?: InputProps;
  itemList: ReactElement[];
  isLoading: boolean;
  isListVisible: boolean;
};

const ListingSearchFormControl = ({
  inputProps,
  itemList,
  isLoading,
  isListVisible,
  ...props
}: Props & FormControlProps): ReactElement => {
  return (
    <FormControl padding="2em" {...props}>
      <LoadingInput
        isLoading={isLoading}
        leftItem={<Search2Icon color="gray.200" />}
        inputProps={inputProps}
      />
      {isListVisible && !!itemList.length && (
        <Box position="relative" mt="0.2em">
          <List
            rounded="lg"
            border="1px"
            borderColor="gray.200"
            position="absolute"
            width="100%"
            maxHeight="30vh"
            overflowY="scroll"
            bg="white"
            boxShadow="sm"
          >
            {itemList.map((item, index) => (
              <ListItem
                key={index}
                borderTop={index && '1px'}
                borderColor="gray.200"
              >
                {item}
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </FormControl>
  );
};

export { ListingSearchFormControl };
