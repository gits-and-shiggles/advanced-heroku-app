import express from "express";
const router = express.Router();
import {list,show,create,update,remove} from "../controllers/ProductController";


router.get("/products", list);
router.get("/products/:id", show);
router.post("/products", create);
router.delete("/products/:id", remove);
router.put("/products/:id", update);

export default router;
