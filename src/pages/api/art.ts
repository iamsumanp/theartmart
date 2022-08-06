import nc from "next-connect";
// import dbConnect from '../../../config/dbConnect'
import { postArt } from "../../../server/controllers/artController";
// import { checkRoomBookingAvailability } from '../../../controllers/bookingControllers';

// import onError from '../../../middlewares/errors';

const handler = nc({});

// dbConnect();

handler.post(postArt);

export default handler;
