import express from "express";
import { bookingadd } from "../../controllers/booking.js";

const booking = express.Router();
booking.get("/", bookingadd);
export default booking;
