import Navigation from "../Navigation";
import NavigationDisclaimer from "../NavigationDisclaimer";
import * as S from './styles';

const Header = () => {
  return (
    <S.Header>
      <NavigationDisclaimer />
      <Navigation />
    </S.Header>
  );
};

export default Header;
