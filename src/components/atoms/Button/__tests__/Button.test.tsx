import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Button from '../Button';

describe('Button', () => {
  it('showing title "Press me" when title is "Press me"', () => {
    const onPress = jest.fn();
    const {getByTestId} = render(
      <Button onPress={onPress} title="Press me" testID="test-press-button" />,
    );
    const button = getByTestId('test-press-button');
    expect(button.props.children[0].props.children).toBe('Press me');
  });

  it('calls onPress when pressed', () => {
    const onPress = jest.fn();
    const {getByTestId} = render(
      <Button onPress={onPress} title="Press me" testID="test-press-button" />,
    );
    const button = getByTestId('test-press-button');
    fireEvent.press(button);
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('renders the button with custom style', () => {
    const onPress = jest.fn();
    const {getByTestId} = render(
      <Button
        testID="test-background-button"
        title="Press me"
        style={{backgroundColor: 'red'}}
        onPress={onPress}
      />,
    );
    const button = getByTestId('test-background-button');
    expect(button.props.style).toContainEqual({backgroundColor: 'red'});
  });

  it('disables the button is not called when disabled is true', () => {
    const onPress = jest.fn();
    const {getByTestId} = render(
      <Button
        title="Press me"
        onPress={onPress}
        disabled={true}
        testID="test-disable-button"
      />,
    );
    const button = getByTestId('test-disable-button');
    fireEvent.press(button);
    expect(onPress).toHaveBeenCalledTimes(0);
  });
});
