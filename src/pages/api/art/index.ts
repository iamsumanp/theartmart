import nc from "next-connect";
import { postArt } from "../../../../server/controllers/artController";
// import dbConnect from '../../../config/dbConnect'
// import { checkRoomBookingAvailability } from '../../../controllers/bookingControllers';

// import onError from '../../../middlewares/errors';

const handler = nc({});

// dbConnect();

handler.post(postArt);

export default handler;
