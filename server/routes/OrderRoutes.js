import express from "express";
const router = express.Router();
import {list,show,create,update,remove} from "../controllers/OrderController";


router.get("/orders", list);
router.get("/orders/:id", show);
router.post("/orders", create);
router.delete("/orders/:id", remove);
router.put("/orders/:id", update);

export default router;
