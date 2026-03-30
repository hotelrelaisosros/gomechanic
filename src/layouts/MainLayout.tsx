import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <>
      {/*<header>Header</header>*/}

      {/*<Breadcrumbs />*/}

      <main>
        <Outlet />
      </main>

      {/*<footer>Footer</footer>*/}
    </>
  );
}
