import express from "express";
import {
  hoteladd,
  hoteldelete,
  hotelread,
  hotelupdate,
} from "../../controllers/Hoteltable.js";

const Hoteltable = express.Router();

Hoteltable.post("/add", hoteladd);
Hoteltable.get("/", hotelread);
Hoteltable.put("/update/:id", hotelupdate);
Hoteltable.delete("/delete/:id", hoteldelete);
export default Hoteltable;
