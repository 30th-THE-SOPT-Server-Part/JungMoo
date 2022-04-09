import express, { Request, Response, NextFunction } from "express";

const app = express();

app.use(express.json());

app.use("/api", require("./api"));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World!");
}); // get -> http method

const port: number = 8000;

app.listen(port, () => {
  console.log(`
    ###################################
      SERVER LISTENING ON PORT : ${port}
    ###################################`);
});
