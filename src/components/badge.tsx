const variants = {
  orange: {
    bg: "dark:bg-orange-950 bg-orange-200",
    border: "dark:border-orange-900 border-orange-300",
  },
  blue: {
    bg: "dark:bg-blue-950 bg-blue-200",
    border: "dark:border-blue-900 border-blue-300",
  },
  red: {
    bg: "dark:bg-red-950 bg-red-200",
    border: "dark:border-red-900 border-red-300",
  },
  green: {
    bg: "dark:bg-green-950 bg-green-200",
    border: "dark:border-green-900 border-green-300",
  },
  yellow: {
    bg: "dark:bg-yellow-950 bg-yellow-200",
    border: "dark:border-yellow-900 border-yellow-300",
  },
  purple: {
    bg: "dark:bg-purple-950 bg-purple-200",
    border: "dark:border-purple-900 border-purple-300",
  },
  teal: {
    bg: "dark:bg-teal-950 bg-teal-200",
    border: "dark:border-teal-900 border-teal-300",
  },
  lime: {
    bg: "dark:bg-lime-950 bg-lime-200",
    border: "dark:border-lime-900 border-lime-300",
  },
} as const;
type BadgeProps = {
  variant: keyof typeof variants;
  label: string;
};

export function Badge(props: BadgeProps) {
  const variant = variants[props.variant];
  return (
    <p
      className={`${variant.bg} ${variant.border} bg-opacity-90 border-solid border rounded-md px-1`}
    >
      {props.label}
    </p>
  );
}
