import { Suspense } from "react";
import { createBrowserRouter } from "react-router";
import Loading from "../components/common/Loading";
import ProtectedRoute from "./ProtectedRoute";
import { routesConfig } from "./routesConfig";

const wrapElement = (route: any) => {
  let element = route.element;

  if (route.protected) {
    element = (
      <ProtectedRoute roles={route.roles}>
        {element}
      </ProtectedRoute>
    );
  }

  return (
    <Suspense fallback={<Loading />}>
      {element}
    </Suspense>
  );
};

const buildRoutes = (routes: any) =>
  routes.map((route: any) => ({
    ...route,
    element: route.element && wrapElement(route),
    children: route.children ? buildRoutes(route.children) : undefined,
  }));

const router = createBrowserRouter(buildRoutes(routesConfig));

export default router;
