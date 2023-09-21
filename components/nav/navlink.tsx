import { usePathname } from "next/navigation";

export function NavLink(props: {
	href: string,
	title: string
}) {
	const pathname = usePathname();

	if (pathname.startsWith(props.href)) {
		return (<a href={props.href} className="text-blue-500">{props.title}</a>);
	} else {
		return (<a href={props.href}>{props.title}</a>);
	}
}