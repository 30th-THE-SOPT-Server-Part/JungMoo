import express, { Router } from "express";
import fs from "fs";

const routerConfigPath = "./src/router/routerConfig.json";
const rawConfigString = fs.readFileSync(routerConfigPath).toString();
const config = JSON.parse(rawConfigString);
const apiSrcDir = config.apiSrcDir;

const router: Router = express.Router();

for (let route of config.api) {
  router.use(route.path, require(apiSrcDir + route.target));
}

module.exports = router;
