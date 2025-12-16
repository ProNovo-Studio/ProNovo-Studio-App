import { Outlet, createRootRoute, Link } from "@tanstack/react-router";
import { Header } from "./-NavBar";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
