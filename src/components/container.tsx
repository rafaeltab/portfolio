export function Container(props: React.PropsWithChildren) {
  return (
    <div className={`mx-auto max-w-[1000] px-2 relative`}>{props.children}</div>
  );
}
