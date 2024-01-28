import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";
import { ColorMode, Config } from "./types";

export const defaultConfig: Config = {
  BaseAccordion: {
    rounded: "sm",
    action: "dot",
  },
  BaseAutocomplete: {
    rounded: "sm",
    size: "md",
    contrast: "default",
  },
  BaseAutocompleteItem: {
    rounded: "sm",
  },
  BaseAvatar: {
    size: "sm",
    rounded: "full",
  },
  BaseAvatarGroup: {
    limit: 4,
    size: "sm",
  },
  BaseButton: {
    variant: "solid",
    rounded: "sm",
    color: "default",
    size: "md",
  },
  BaseButtonAction: {
    rounded: "sm",
    color: "default",
  },
  BaseButtonClose: {
    size: "sm",
    rounded: "full",
    color: "default",
  },
  BaseButtonIcon: {
    rounded: "sm",
    color: "default",
    size: "md",
  },
  BaseCard: {
    rounded: "sm",
    color: "white",
  },
  BaseCheckbox: {
    rounded: "sm",
    color: "default",
  },
  BaseCheckboxAnimated: {
    color: "primary",
  },
  BaseDropdown: {
    variant: "button",
    buttonColor: "default",
    color: "white",
    rounded: "sm",
    size: "md",
    label: "",
    fixed: false,
  },
  BaseDropdownItem: {
    rounded: "sm",
    color: "default",
  },
  BaseHeading: {
    as: "p",
    size: "xl",
    weight: "semibold",
    lead: "normal",
  },
  BaseIconBox: {
    variant: "solid",
    color: "default",
    size: "xs",
    rounded: "sm",
  },
  BaseInput: {
    rounded: "sm",
    size: "md",
    contrast: "default",
  },
  BaseInputFile: {
    rounded: "sm",
    size: "md",
    contrast: "default",
  },
  BaseInputNumber: {
    inputmode: "numeric",
    rounded: "sm",
    size: "md",
    contrast: "default",
  },
  BaseKbd: {
    rounded: "sm",
    size: "sm",
    color: "default",
  },
  BaseListbox: {
    rounded: "sm",
    size: "md",
    contrast: "default",
  },
  BaseMessage: {
    type: "success",
    rounded: "sm",
    closable: false,
  },
  BasePagination: {
    rounded: "sm",
  },
  BaseParagraph: {
    as: "p",
    size: "md",
    weight: "normal",
    lead: "normal",
  },
  BasePlaceholderPage: {
    imageSize: "xs",
  },
  BaseProgress: {
    size: "sm",
    contrast: "default",
    color: "primary",
    rounded: "full",
  },
  BaseProse: {
    rounded: "md",
  },
  BaseRadio: {
    color: "default",
  },
  BaseSelect: {
    rounded: "sm",
    size: "md",
    contrast: "default",
  },
  BaseSnack: {
    size: "md",
    color: "muted",
  },
  BaseSwitchBall: {
    color: "primary",
  },
  BaseSwitchThin: {
    color: "primary",
  },
  BaseTabs: {
    type: "tabs",
    justify: "start",
  },
  BaseTabSlider: {
    justify: "start",
    size: "md",
    rounded: "lg",
  },
  BaseTag: {
    variant: "solid",
    color: "default",
    size: "md",
    rounded: "lg",
  },
  BaseText: {
    size: "md",
    weight: "normal",
    lead: "normal",
  },
  BaseTextarea: {
    rounded: "sm",
    size: "md",
    contrast: "default",
  },
  BaseTreeSelectItem: {
    rounded: "sm",
  },
  defaultShapes: {
    accordion: "rounded",
    autocompleteItem: "rounded",
    avatar: "full",
    button: "rounded",
    buttonAction: "rounded",
    buttonIcon: "rounded",
    buttonClose: "full",
    card: "rounded",
    dropdown: "rounded",
    iconBox: "rounded",
    input: "rounded",
    message: "curved",
    pagination: "rounded",
    progress: "full",
    prose: "rounded",
    tabSlider: "rounded",
    tag: "rounded",
  },
};

const ConfigContext = createContext<Config>(defaultConfig);

export const useConfig = () => {
  const config = useContext(ConfigContext);

  return config;
};

// TODO: export const useNuiDefaultProperty = <
//   Component extends keyof Config,
//   Property extends keyof Config[Component],
// >(
//   component: Component,
//   property: Property,
// ) => {
//   const config = useContext(ConfigContext);

//   return config?.[component]?.[property];
// };

export const useTheme = () => {
  const [colorMode, setColorMode] = useState<{
    preference: ColorMode;
    value: Omit<ColorMode, "system">;
  }>({ preference: "system", value: "dark" });

  return { colorMode, setColorMode };
};

type ThemeContextType = ReturnType<typeof useTheme>;

const ThemeContext = createContext<ThemeContextType | null>(null);

export const useThemeContext = () => {
  const ctx = useContext(ThemeContext);

  if (!ctx) {
    throw new Error(
      "Ensure useThemeContext is used within <ShurikenUIProvider>",
    );
  }

  return ctx;
};

export const ShurikenUIProvider: FC<{
  children: ReactNode;
  options?: Partial<Config>;
}> = ({ children, options = {} }) => {
  const config = useMemo<Config>(
    () => ({ ...defaultConfig, ...options }),
    [options],
  );

  return (
    <ConfigContext.Provider value={config}>
      <ThemeContext.Provider value={useTheme()}>
        {children}
      </ThemeContext.Provider>
    </ConfigContext.Provider>
  );
};
