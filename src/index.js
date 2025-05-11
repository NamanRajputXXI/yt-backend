import dotevn from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotevn.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`\n Server is running on port ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.log("Db connection error !!", err);
  });
