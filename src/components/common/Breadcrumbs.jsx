import { Link, useLocation } from "react-router-dom";

import { capitalize } from "@/utils/stringUtils";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav aria-label="breadcrumb">
      <ul className="breadcrumb flex flex-wrap gap-2 text-white [&_li]:relative [&_li:not(:first-child)]:pl-[1.125rem] before:[&_li:not(:first-child)]:content-['\e906'] before:[&_li:not(:first-child)]:absolute before:[&_li:not(:first-child)]:top-1/2 before:[&_li:not(:first-child)]:left-0 before:[&_li:not(:first-child)]:-translate-y-1/2 before:[&_li:not(:first-child)]:font-icomoon  before:[&_li:not(:first-child)]:text-[0.75rem] [&_li_a]:text-inherit [&_li_a]:underline hover:[&_li_a]:no-underline">
        <li>
          <Link to="/">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          
          return (
            <li key={to}>
              {isLast ? (
                <span>{capitalize(value)}</span>
              ) : (
                <Link to={to}>{capitalize(value)}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
