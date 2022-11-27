import { getFromArray } from "utils/helpers";
import HomeRoutes from "./HomeRoutes";
import NOT_FOUND from "./NotFound";

const routes = [HomeRoutes, NOT_FOUND];

const getRoute = (route) => {
  let path = [""];
  if (!!route) {
    const keyChain = route.split(".");
    path = [""];
    let c = { children: routes };
    for (const key of keyChain) {
      c = c.children;
      c = getFromArray(c, key, "name");
      if (!c) {
        path = ["#"];
        break;
      }
      path.push(c.path);
    }
  } else {
    path = ["#"];
  }
  return path.join("/");
};

export { routes as default, getRoute };
