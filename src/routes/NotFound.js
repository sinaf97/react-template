// Layout
import AuthLayout from "layouts/Auth";

// Pages
import { NotFound } from "pages/errors";

const NOT_FOUND = {
  path: "*",
  element: <AuthLayout />,
  children: [
    {
      path: "*",
      element: <NotFound />,
    },
  ],
};

export default NOT_FOUND;
