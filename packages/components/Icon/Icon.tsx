import React from "react";
import * as styles from "./Icon.css";
import type { ColorIntent } from "../../tokens";

export type IconSize = "xs" | "sm" | "md" | "lg" | "xl";
export type IconIntent = ColorIntent | "current";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
	/** Icon size */
	size?: IconSize;
	/** Icon color intent */
	intent?: IconIntent;
	/** Icon children (SVG content) or lucide-react icon component */
	children?: React.ReactNode;
	/** Additional class name */
	className?: string;
}

/**
 * Icon component for rendering SVG icons with consistent sizing and colors.
 * 
 * @example
 * ```tsx
 * // With custom SVG
 * <Icon size="md" intent="primary">
 *   <circle cx="12" cy="12" r="10" />
 *   <path d="M12 6v6l4 2" />
 * </Icon>
 * 
 * // With lucide-react (optional dependency)
 * import { Heart } from 'lucide-react';
 * <Icon size="lg" intent="danger">
 *   <Heart />
 * </Icon>
 * ```
 */
export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
	({ size = "md", intent = "current", children, className, ...props }, ref) => {
		const baseClassName = styles.icon({ size, intent });
		const combinedClassName = className
			? `${baseClassName} ${className}`
			: baseClassName;

		// If children is a complete SVG element (like lucide-react icons), clone it with our props
		if (
			React.isValidElement(children) &&
			typeof children.type === "string" &&
			children.type === "svg"
		) {
			return React.cloneElement(
				children as React.ReactElement,
				{
					className: combinedClassName,
				...props,
				} as React.SVGProps<SVGSVGElement>
			);
		}

		// Otherwise render as SVG wrapper (for path, circle, etc.)
		return (
			<svg
				ref={ref}
				className={combinedClassName}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				{children}
			</svg>
		);
	}
);

Icon.displayName = "Icon";
