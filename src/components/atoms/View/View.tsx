import {ThemeContext} from '@theme';
import React, {useContext} from 'react';
import {StyleProp, View, ViewProps, ViewStyle} from 'react-native';

type CustomViewProps = ViewProps & {
  style: StyleProp<ViewStyle>;
};

const CustomView = ({style, ...rest}: CustomViewProps) => {
  const {theme} = useContext(ThemeContext);
  return (
    <View
      style={[
        {
          backgroundColor: theme.backgroundColor,
        },
        style,
      ]}
      {...rest}
    />
  );
};

export default CustomView;
