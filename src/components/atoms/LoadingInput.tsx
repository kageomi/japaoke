import { ReactElement } from 'react';
import {
  Spinner,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  InputGroupProps,
  InputProps,
} from '@chakra-ui/react';

type Props = {
  isLoading: boolean;
  leftItem?: ReactElement;
  inputProps?: InputProps;
};

const gradient = {
  background:
    'linear-gradient(45deg, rgba(255,255,255,1), rgba(237,220,255,1), rgba(255,158,206,1)) fixed;',
  bgSize: '800%',
  animation: 'GradietionAnimation 9s ease infinite',
};

const gradietionAnimation = `
  @keyframes GradietionAnimation {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
  }
`;

const LoadingInput = ({
  leftItem,
  isLoading,
  inputProps,
  ...props
}: Props & InputGroupProps): ReactElement => (
  <InputGroup {...props}>
    <style>{gradietionAnimation}</style>
    {leftItem && (
      <InputLeftElement pointerEvents="none">{leftItem}</InputLeftElement>
    )}
    <Input
      type="text"
      focusBorderColor="rgba(237,220,255,1)"
      {...(isLoading ? gradient : {})}
      {...inputProps}
    />
    {!!isLoading && (
      <InputRightElement>
        <Spinner color="#FF0080" opacity="0.5" />
      </InputRightElement>
    )}
  </InputGroup>
);

export { LoadingInput };
