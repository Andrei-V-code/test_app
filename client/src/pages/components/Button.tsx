import React, { memo, useCallback, WheelEventHandler } from 'react';
import Button from '@mui/material/Button';
import { ButtonProps } from '../../types';

interface KonvaTextEventTarget extends HTMLButtonElement {
	value: string
}

interface KonvaMouseEvent extends React.MouseEvent<HTMLElement> {
	target: KonvaTextEventTarget
}

const ButtonComponent: React.FC<ButtonProps> = ({ onClick, id, disabled, children }) => {
	const handleClick = useCallback((value: any) => {
		onClick(value);
	}, []);

	return (
		<Button onClick={(event: any) => handleClick(event.target.value)} value={id} disabled={disabled}>{children}</Button>
	)
}

export default memo(ButtonComponent);
