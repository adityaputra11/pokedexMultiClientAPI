import BottomSheet, {BottomSheetProps} from '@gorhom/bottom-sheet';
import React, {forwardRef, useImperativeHandle, useRef} from 'react';

type BottomSheetAtomProps = BottomSheetProps & {
  children?: React.ReactNode;
};

export interface BottomSheetRef {
  expand: (index: number) => void;
}

const BottomSheetAtom = forwardRef<BottomSheetRef, BottomSheetAtomProps>(
  ({children, ...rest}, ref) => {
    const bottomSheetRef = useRef<BottomSheet>(null);

    useImperativeHandle(ref, () => ({
      expand: () => {
        bottomSheetRef.current?.expand();
      },
    }));

    return (
      <BottomSheet index={-1} ref={bottomSheetRef} {...rest}>
        {children}
      </BottomSheet>
    );
  },
);

export default BottomSheetAtom;
