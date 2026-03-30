import { Link, useMatches } from "react-router";

export default function Breadcrumbs() {
  const matches = useMatches();

  const crumbs = matches
    .filter((match: any) => match.handle?.breadcrumb)
    .map((match: any) => {
      const breadcrumb = match.handle!.breadcrumb;

      return {
        label:
          typeof breadcrumb === "function"
            ? breadcrumb({ params: match.params })
            : breadcrumb,
        path: match.pathname,
      };
    });

  return (
    <nav aria-label="breadcrumb">
      {crumbs.map((crumb, index) => (
        <span key={crumb.path}>
          <Link to={crumb.path}>{crumb.label}</Link>
          {index < crumbs.length - 1 && " / "}
        </span>
      ))}
    </nav>
  );
}
