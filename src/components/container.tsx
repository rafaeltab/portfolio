export function Container(props: React.PropsWithChildren) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
      {props.children}
    </div>
  );
}
