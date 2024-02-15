import {
  ReactNode,
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";
import { Icon } from "@iconify/react";
import { cn } from "../../utils";
import { useConfig } from "../../Provider";
import { useNinjaId } from "../../hooks/useNinjaId";
import { BasePlaceload } from "../base/BasePlaceload";

type BaseInputProps = {
  /**
   * Callback function called when the value of the input changes.
   *
   * @param {string | number} value - The new value of the input.
   * @returns {void}
   */
  onChange?: (value: string | number) => void;

  /**
   * The value of the input.
   */
  value?: string | number;

  /**
   * Used internaly to allow .number, .trim
   * and .lazy v-model modifiers.
   */
  stateModifiers?: {
    number?: boolean;
    trim?: boolean;
    lazy?: boolean;
  };

  /**
   * The form input identifier.
   */
  id?: string;

  /**
   * The type of input.
   */
  type?: string;

  /**
   * The radius of the input.
   *
   */
  rounded?: "none" | "sm" | "md" | "lg" | "full";

  /**
   * The size of the input.
   *
   */
  size?: "sm" | "md" | "lg";

  /**
   * The contrast of the input.
   *
   * @default 'default'
   */
  contrast?: "default" | "default-contrast" | "muted" | "muted-contrast";

  /**
   * The label to display for the input.
   */
  label?: string;

  /**
   * If the label should be floating.
   */
  labelFloat?: boolean;

  /**
   * The icon to display for the input.
   */
  icon?: string;

  /**
   * The placeholder to display for the input.
   */
  placeholder?: string;

  /**
   * An error message or boolean value indicating whether the input is in an error state.
   */
  error?: string | boolean;

  /**
   * Whether the color of the input should change when it is focused.
   */
  colorFocus?: boolean;

  /**
   * Whether the input is in a loading state.
   */
  loading?: boolean;

  /**
   * Optional CSS classes to apply to the wrapper, label, input, addon, error, and icon elements.
   */
  classes?: {
    /**
     * CSS classes to apply to the wrapper element.
     */
    wrapper?: string | string[];

    /**
     * CSS classes to apply to the outer element.
     */
    outer?: string | string[];

    /**
     * CSS classes to apply to the label element.
     */
    label?: string | string[];

    /**
     * CSS classes to apply to the input element.
     */
    input?: string | string[];

    /**
     * CSS classes to apply to the addon element.
     */
    addon?: string | string[];

    /**
     * CSS classes to apply to the error element.
     */
    error?: string | string[];

    /**
     * CSS classes to apply to the icon element.
     */
    icon?: string | string[];
  };

  action?: ReactNode;
};

const radiuses = {
  none: "",
  sm: "nui-input-rounded",
  md: "nui-input-smooth",
  lg: "nui-input-curved",
  full: "nui-input-full",
};

const sizes = {
  sm: "nui-input-sm",
  md: "nui-input-md",
  lg: "nui-input-lg",
};

const contrasts = {
  default: "nui-input-default",
  "default-contrast": "nui-input-default-contrast",
  muted: "nui-input-muted",
  "muted-contrast": "nui-input-muted-contrast",
};

export type BaseInputRef = {
  /**
   * The underlying HTMLInputElement element.
   */
  el: HTMLInputElement | null;

  /**
   * The internal id of the input.
   */
  id: string;
};

export const BaseInput = forwardRef<BaseInputRef, BaseInputProps>(
  function BaseInput(
    { stateModifiers, type = "text", error = false, ...props },
    ref,
  ) {
    const inputRef = useRef<HTMLInputElement>(null);

    const config = useConfig();

    const id = useNinjaId(() => props.id);

    const rounded = props.rounded ?? config.BaseInput?.rounded;

    const size = props.size ?? config.BaseInput?.size;

    const contrast = props.contrast ?? config.BaseInput?.contrast;

    const placeholder = useMemo(() => {
      if (props.loading) {
        return undefined;
      }

      if (props.labelFloat) {
        return props.label;
      }

      return props.placeholder ?? "";
    }, [props.label, props.labelFloat, props.loading, props.placeholder]);

    function looseToNumber(val: string) {
      const n = Number.parseFloat(val);

      return Number.isNaN(n) ? val : n;
    }

    function handleUpdate(value: string) {
      if (stateModifiers?.trim) {
        props.onChange?.(value.trim());
      } else if (stateModifiers?.number) {
        props.onChange?.(looseToNumber(value));
      } else {
        props.onChange?.(value);
      }
    }

    useImperativeHandle(
      ref,
      () => ({
        get el() {
          return inputRef.current;
        },
        id,
      }),
      [id],
    );

    return (
      <div
        className={cn(
          "nui-input-wrapper",
          contrast && contrasts[contrast],
          size && sizes[size],
          rounded && radiuses[rounded],
          error && !props.loading && "nui-input-error",
          props.loading && "nui-input-loading",
          props.labelFloat && "nui-input-label-float",
          props.icon && "nui-has-icon",
          props.colorFocus && "nui-input-focus",
          props.classes?.wrapper,
        )}
      >
        {props.label && !props.labelFloat && (
          <label
            className={cn("nui-input-label", props.classes?.label)}
            htmlFor={id}
          >
            {props.label}
          </label>
        )}
        <div className={cn("nui-input-outer", props.classes?.outer)}>
          <div>
            {stateModifiers?.lazy ? (
              <input
                id={id}
                ref={inputRef}
                type={type}
                className={cn("nui-input", props.classes?.input)}
                placeholder={placeholder}
                onChange={(e) => handleUpdate(e.target.value)}
                value={props.value}
              />
            ) : (
              <input
                id={id}
                ref={inputRef}
                type={type}
                className={cn("nui-input", props.classes?.input)}
                placeholder={placeholder}
                onInput={(e) => handleUpdate(e.currentTarget.value)}
                value={props.value}
              />
            )}
            {props.label && props.labelFloat && (
              <label
                htmlFor={id}
                className={cn("nui-label-float", props.classes?.label)}
              >
                {props.label}
              </label>
            )}
            {props.loading && (
              <div className="nui-input-placeload">
                <BasePlaceload className="nui-placeload" />
              </div>
            )}
            {props.icon && (
              <div className={cn("nui-input-icon", props.classes?.icon)}>
                <Icon icon={props.icon} className="nui-input-icon-inner" />
              </div>
            )}

            {props.action && props.action}
          </div>
          {error && typeof error === "string" && (
            <span className={cn("nui-input-error-text", props.classes?.error)}>
              {error}
            </span>
          )}
        </div>
      </div>
    );
  },
);
