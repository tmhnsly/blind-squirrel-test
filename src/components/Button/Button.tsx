import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";

export type ButtonVariant = "solid" | "ghost" | "outline" | "underline";
export type ButtonColor = "cream" | "dark" | "honey" | "orange";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      variant = "solid",
      color = "orange",
      iconLeft,
      iconRight,
      type = "button",
      className,
      children,
      ...rest
    },
    ref,
  ) {
    return (
      <button
        ref={ref}
        type={type}
        data-variant={variant}
        data-color={color}
        className={clsx(styles.button, className)}
        {...rest}
      >
        {iconLeft && (
          <span className={styles.icon} aria-hidden>
            {iconLeft}
          </span>
        )}
        <span className={styles.label}>{children}</span>
        {iconRight && (
          <span className={styles.icon} aria-hidden>
            {iconRight}
          </span>
        )}
      </button>
    );
  },
);
