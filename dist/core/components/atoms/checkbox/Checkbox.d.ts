import * as React from 'react';
export declare type Size = 'regular' | 'tiny';
export interface CheckboxProps {
    size?: Size;
    checked?: boolean;
    indeterminate?: boolean;
    disabled?: boolean;
    label?: string;
    name?: string;
    value?: string;
    onChange?: (checked: boolean) => void;
}
export declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
export default Checkbox;
