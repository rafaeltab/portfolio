"use client";

import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComputer,
  faLightbulb,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";

const themes = {
  dark: <FontAwesomeIcon icon={faMoon} />,
  light: <FontAwesomeIcon icon={faLightbulb} />,
  system: <FontAwesomeIcon icon={faComputer} />,
} as const;

export const ThemeSwitch = dynamic(() => Promise.resolve(ThemeSwitchContent), {
  ssr: false,
});

function ThemeSwitchContent() {
  const { theme } = useTheme();

  if (theme !== undefined && theme in themes) {
    const selectedTheme = theme as keyof typeof themes;

    return (
      <ThemeButton theme={selectedTheme}>{themes[selectedTheme]}</ThemeButton>
    );
  }
  return <ThemeButton theme="dark">{themes.dark}</ThemeButton>;
}

function ThemeButton(
  props: { theme: keyof typeof themes } & React.PropsWithChildren,
) {
  const { setTheme } = useTheme();
  const themeKeys = Object.keys(themes) as (keyof typeof themes)[];
  return (
    <button
      onClick={() => {
        setTheme(
          themeKeys[(themeKeys.indexOf(props.theme) + 1) % themeKeys.length],
        );
      }}
      className="dark:text-neutral-500 text-neutral-900"
    >
      {props.children}
    </button>
  );
}
