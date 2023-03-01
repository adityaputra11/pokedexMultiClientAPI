import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Chip from '../Chip';

describe('Chip', () => {
  const handlePress = jest.fn();
  const label = 'Test Chip';

  it('renders correctly', () => {
    const {getByTestId, getByText} = render(
      <Chip label={label} testID="test-chip-render" />,
    );
    const chip = getByTestId('test-chip-render');
    expect(chip).toBeDefined();
    expect(getByText(label)).toBeDefined();
  });

  it('calls onPress when clicked', () => {
    const {getByTestId} = render(
      <Chip label={label} onPress={handlePress} testID="test-on-press-chip" />,
    );
    const chip = getByTestId('test-on-press-chip');
    fireEvent.press(chip);
    expect(handlePress).toHaveBeenCalledTimes(1);
  });
});
