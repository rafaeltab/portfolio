type ColorVariant = "gray" | "blue"

const backgroundMapping: Record<ColorVariant, string> = {
  gray: "bg-gray-bg-default",
  blue: "bg-blue-bg-default"
}

const textMapping: Record<ColorVariant, string> = {
  gray: "text-gray-primary",
  blue: "text-blue-primary"
}

const borderMapping: Record<ColorVariant, string> = {
  gray: "border-gray-border-default",
  blue: "border-blue-border-default"
}

export function Button(props: { onClick: () => void, text: string, variant: ColorVariant }) {
  const background = backgroundMapping[props.variant];
  const textColor = textMapping[props.variant];
  const borderColor = borderMapping[props.variant];

  return (
    <button className={"p-4 rounded-md border " + background + " " + textColor + " " + borderColor}>
      {props.text}
    </button>
  );
}
