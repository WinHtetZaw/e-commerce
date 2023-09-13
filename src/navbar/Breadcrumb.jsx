import { Link, Navigate, useLocation } from "react-router-dom";
import useReactRouterBreadcrumbs from "use-react-router-breadcrumbs";

const Breadcrumb = () => {
  // * hooks
  const breadcrumbs = useReactRouterBreadcrumbs();
  const location = useLocation();

  const lists = breadcrumbs?.map((el) => el.breadcrumb.props.children);

  if (location.pathname === "/") {
    return <></>;
  }

  return (
    <>
      <section className=" flex  text-sm text-[#eee] bg-teal-900 p-1">
      {/* <section className=" flex shadow p-3"> */}
        {breadcrumbs.map((el, index) => {
          const breadcrumb = el.breadcrumb.props.children;
          const link = el.key;
          return (
            <Link to={`${link}`} className=" breadcrumb flex font-semibold" key={index}>
              <div className="font-thin italic">{breadcrumb}</div>
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default Breadcrumb;
