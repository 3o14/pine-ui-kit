import { useState, useCallback } from "react";

export function useTabValue(
	value: string | undefined,
	initialValue: string | null
) {
	const [internalValue, setInternalValue] = useState<string | null>(initialValue);
	const currentValue = value ?? internalValue;

	const handleValueChange = useCallback(
		(newValue: string | null, onChange?: (value: string) => void) => {
			if (value === undefined) {
				setInternalValue(newValue);
			}
			onChange?.(newValue as string);
		},
		[value]
	);

	return { currentValue, handleValueChange };
}
