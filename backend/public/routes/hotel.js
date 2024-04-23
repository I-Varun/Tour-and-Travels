import express from "express";
import {
  hoteladd,
  hoteldelete,
  hotelread,
  hotelupdate,
  specifichotelread,
} from "../../controllers/hotel.js";

const hotel = express.Router();

hotel.post("/add", hoteladd);
hotel.get("/", hotelread);
hotel.put("/update/:id", hotelupdate);
hotel.delete("/delete/:id", hoteldelete);
<<<<<<< HEAD
hotel.get("/specificread/:id",specifichotelread);
=======
hotel.get("/specificread/:id", specifichotelread);
>>>>>>> 30f49ec9c978da9de5646cbb0894756c0f5fc082
export default hotel;
