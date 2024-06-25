import { MemoryRouter, Outlet, Route, Routes } from "react-router-dom";

function RenderRouteWithOutletContext({ context, children }) {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Outlet context={context} />}>
          <Route index element={children}></Route>
        </Route>
      </Routes>
    </MemoryRouter>
  );
}

export default RenderRouteWithOutletContext;
