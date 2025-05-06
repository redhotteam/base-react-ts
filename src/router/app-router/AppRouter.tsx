import React from "react";
import { ROUTES } from "@/constants";
import { MainLayout } from "@/layouts";
import { Error404Page, HelloPage } from "@/pages";
import { Navigate, useRoutes } from "react-router-dom";

export const AppRouter: React.FC = (): React.ReactElement | null => {
  const routes = [
    {
      path: ROUTES.HOME,
      element: <MainLayout />,
      children: [
        {
          path: ROUTES.HOME,
          element: <HelloPage />,
        },
      ],
    },
    { path: "404", element: <Error404Page /> },
    {
      path: "*",
      element: <Navigate to={ROUTES.ERROR404} replace />,
    },
  ];

  return useRoutes(routes);
};
