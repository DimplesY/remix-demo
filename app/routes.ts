import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"), 
  route('login','routes/login.tsx'),
  route('drop', 'routes/drag.tsx')
] satisfies RouteConfig;
