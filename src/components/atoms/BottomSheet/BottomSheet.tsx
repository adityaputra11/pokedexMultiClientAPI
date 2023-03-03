import BottomSheet, {BottomSheetProps} from '@gorhom/bottom-sheet';
import React, {forwardRef, useImperativeHandle, useRef} from 'react';
import {StyleProp, ViewStyle} from 'react-native/types';
import styles from './styles';

type BottomSheetAtomProps = BottomSheetProps & {
  children?: React.ReactNode;
  contentStyle?: StyleProp<ViewStyle>;
};

export interface BottomSheetRef {
  expand: (index: number) => void;
}

const BottomSheetAtom = forwardRef<BottomSheetRef, BottomSheetAtomProps>(
  ({children, contentStyle, ...rest}, ref) => {
    const bottomSheetRef = useRef<BottomSheet>(null);

    useImperativeHandle(ref, () => ({
      expand: () => {
        bottomSheetRef.current?.expand();
      },
    }));

    return (
      <BottomSheet
        index={-1}
        ref={bottomSheetRef}
        {...rest}
        containerStyle={[styles.contentContainer, contentStyle]}>
        {children}
      </BottomSheet>
    );
  },
);

export default BottomSheetAtom;
