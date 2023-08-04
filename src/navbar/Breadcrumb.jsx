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
      <section className=" flex border-b border-gray-300 p-3">
        {breadcrumbs.map((el, index) => {
          const breadcrumb = el.breadcrumb.props.children;
          const link = el.key;
          return (
            <Link to={`${link}`} className=" breadcrumb flex italic" key={index}>
              <div className="">{breadcrumb}</div>
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default Breadcrumb;
