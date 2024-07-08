"use server"
import { fakeData, getAllProducts } from "@/controller/product/products";
import { createRouter } from "next-connect";
const router = createRouter();
router.get(fakeData);
export default router.handler();