const sizes = {
  nav: "mx-8 xl:mx-48 lg:mx-32",
  body: "xl:mx-80 lg:mx-48 mx-20",
} as const;

export function Container(
  props: React.PropsWithChildren & { size: keyof typeof sizes },
) {
  return (
    <div className={`${sizes[props.size]} relative`}>{props.children}</div>
  );
}
