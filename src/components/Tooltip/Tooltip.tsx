import React from "react";
import clsx from "clsx";
import { Tooltip as BaseUITooltip } from "@base-ui/react/tooltip";
import * as styles from "./Tooltip.css";
import { lightTheme, type ColorIntent } from "@/tokens";
import { useTheme } from "@/providers";

export type TooltipSide = "top" | "right" | "bottom" | "left";
export type TooltipAlign = "start" | "center" | "end";
export type TooltipIntent = ColorIntent;

export interface TooltipProps {
	/**
	 * The element that triggers the tooltip
	 */
	children: React.ReactElement;
	/**
	 * The content to display in the tooltip
	 */
	content: React.ReactNode;
	/**
	 * The side of the trigger where the tooltip should appear
	 * @default "top"
	 */
	side?: TooltipSide;
	/**
	 * The alignment of the tooltip relative to the trigger
	 * @default "center"
	 */
	align?: TooltipAlign;
	/**
	 * The color intent of the tooltip
	 * @default "neutral"
	 */
	intent?: TooltipIntent;
	/**
	 * The distance in pixels from the trigger
	 * @default 8
	 */
	sideOffset?: number;
	/**
	 * The alignment offset in pixels
	 * @default 0
	 */
	alignOffset?: number;
	/**
	 * Whether to show an arrow pointing to the trigger
	 * @default true
	 */
	showArrow?: boolean;
	/**
	 * Whether the tooltip is disabled
	 * @default false
	 */
	disabled?: boolean;
	/**
	 * Custom class name for the tooltip popup
	 */
	className?: string;
}

/**
 * Tooltip component built on Base UI
 * 
 * @example
 * ```tsx
 * <Tooltip content="Click to edit">
 *   <Button>Edit</Button>
 * </Tooltip>
 * ```
 */
export const Tooltip = ({
	children,
	content,
	side = "top",
	align = "center",
	intent = "neutral",
	sideOffset = 8,
	alignOffset = 0,
	showArrow = true,
	disabled = false,
	className,
}: TooltipProps) => {
	const themeContext = useTheme();
	const themeClass = themeContext?.themeClass ?? lightTheme;

	if (disabled) {
		return children;
	}

	return (
		<BaseUITooltip.Provider>
			<BaseUITooltip.Root disabled={disabled}>
				{children}
				<BaseUITooltip.Portal>
					<BaseUITooltip.Positioner
						side={side}
						align={align}
						sideOffset={sideOffset}
						alignOffset={alignOffset}
					>
						<BaseUITooltip.Popup
							className={clsx(
								themeClass,
								styles.popup({ intent }),
								className
							)}
						>
							{showArrow && (
								<BaseUITooltip.Arrow className={styles.arrow({ intent })}>
									<svg width="12" height="6" viewBox="0 0 12 6" fill="none">
										<path
											d="M0 6L6 0L12 6"
											fill="currentColor"
										/>
									</svg>
								</BaseUITooltip.Arrow>
							)}
							{content}
						</BaseUITooltip.Popup>
					</BaseUITooltip.Positioner>
				</BaseUITooltip.Portal>
			</BaseUITooltip.Root>
		</BaseUITooltip.Provider>
	);
};

