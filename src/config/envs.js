import {DEV_BACKEND_URL,
  // PROD_BACKEND_URL
} from "@env";

const devEnvironVariables = {
  BACKEND_URL: DEV_BACKEND_URL,
};
// const prodEnvEnvironVariables = {
//   BACKEND_URL: PROD_BACKEND_URL,
// };

// export default __DEV__ ? devEnvironVariables : prodEnvEnvironVariables;
export default devEnvironVariables;
