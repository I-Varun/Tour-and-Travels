import express from "express";
<<<<<<< HEAD
import { hotelbookingadd, hotelbookingread, hotelcancelbooking } from "../../controllers/hotelbooking.js";

=======
import {
  hotelbookingadd,
  hotelbookingread,
  hotelcancelbooking,
} from "../../controllers/hotelbooking.js";
>>>>>>> 30f49ec9c978da9de5646cbb0894756c0f5fc082

const hotelbooking = express.Router();
hotelbooking.get("/:id", hotelbookingread);
hotelbooking.post("/add", hotelbookingadd);
hotelbooking.put("/cancel/:id", hotelcancelbooking);
export default hotelbooking;
