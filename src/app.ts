import express from "express";
import morgan from "morgan";
import cors from "cors";
import userRoutes from "./routers/user.router";

const app = express();
app.use(morgan("dev")); //Consola aparecen las peticiones
app.use(cors()); //Comunicacion externa
app.use(express.json()); //Para poder entender el json

app.use(userRoutes);

export default app;
