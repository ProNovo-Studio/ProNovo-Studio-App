import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/chat/index.tsx";
import "./index.css";
import '@mesantosrai/pipeline-canvas/style.css';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen.ts";

import { PipelineCanvasProvider } from '@mesantosrai/pipeline-canvas';

const queryClient = new QueryClient();

const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
});

declare module "@tanstack/react-router" {
  interface Register {
    // This infers the type of our router and registers it across your entire project
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <PipelineCanvasProvider>
      <RouterProvider router={router} />
      </PipelineCanvasProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
