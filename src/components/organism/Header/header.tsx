import {StackHeaderProps} from '@react-navigation/stack';
import {useContext} from 'react';
import {View} from 'react-native';
import {ThemeContext} from '../../../theme/ThemeProvider';
import Text from '../../atoms/Text/Text';

const Header = (props: StackHeaderProps) => {
  const {theme} = useContext(ThemeContext);
  return (
    <View style={{backgroundColor: theme.backgroundColor, padding: 20}}>
      <Text>{props.route.name}</Text>
    </View>
  );
};

export default Header;
