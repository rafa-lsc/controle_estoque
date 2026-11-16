import {Router, type Request, type Response } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController.js";
import { AuthUserController } from "./controllers/user/AuthUserController.js";
import { isAuthenticated } from "./middlewares/isAuthenticated.js";
import { DetailUserService } from "./services/user/DetailUserService.js";
import { DetailuserController } from "./controllers/user/DetailUserController.js";
import { RemoveUserController } from "./controllers/user/RemoveUserController.js";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController.js";
import { EditCategoryController } from "./controllers/category/EditCategoryController.js";
import { ListCategoryController } from "./controllers/category/ListCategoryController.js";
import { RemoveCategoryController } from "./controllers/category/RemoveCategoryController.js";
import { CreateProductController } from "./controllers/product/CreateProductController.js";
import { DetailProductController } from "./controllers/product/DetailProductController.js";
import { EditProductController } from "./controllers/product/EditProductController.js";
import { ListProductByCategoryController } from "./controllers/product/ListProductByCategoryController.js";
import { ListProductsController } from "./controllers/product/ListProductsController.js";
import { RemoveProductController } from "./controllers/product/RemoveProductController.js";
import { SaleProductController } from "./controllers/sale/SaleProductController.js";
import { CreateSupplierController } from "./controllers/supplier/CreateSupplierController.js";
import { DetailSupplierController } from "./controllers/supplier/DetailSupplierController.js";
import { EditSupplierController } from "./controllers/supplier/EditSupplierController.js";
import { ListSupplierController } from "./controllers/supplier/ListSupplierController.js";
import { RemoveSupplierController } from "./controllers/supplier/RemoveSupplierController.js";
import multer from "multer";
import uploadConfig from "./config/multer.js"

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"))
router.get("/test", (request: Request, reponse: Response) => {
    return reponse.json({ok: true});
});

//User routes
router.post('/user', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', isAuthenticated, new DetailuserController().handle);
router.delete('/user/remove', new RemoveUserController().handle);

//Category routes
router.post('/category', isAuthenticated, new CreateCategoryController().handle)
router.put('/category/edit', isAuthenticated, new EditCategoryController().handle)
router.get('/category/all', isAuthenticated, new ListCategoryController().handle)
router.delete('/category/remove', isAuthenticated, new RemoveCategoryController().handle)

//Product routes
router.post('/product', isAuthenticated, upload.single("file"), new CreateProductController().handle)
router.post('/products', isAuthenticated, upload.single("file"), new CreateProductController().handle)
router.put('/product/edit', isAuthenticated, upload.single("file"), new EditProductController().handle)
router.get('/product', isAuthenticated, new ListProductByCategoryController().handle)
router.get('/products', isAuthenticated, new ListProductsController().handle)
router.get('/products/:id', isAuthenticated, new DetailProductController().handle)
router.delete('/product/remove', isAuthenticated, new RemoveProductController().handle)

//Supplier routes
router.post('/suppliers', isAuthenticated, new CreateSupplierController().handle)
router.get('/suppliers', isAuthenticated, new ListSupplierController().handle)
router.get('/suppliers/:id', isAuthenticated, new DetailSupplierController().handle)
router.put('/suppliers/:id', isAuthenticated, new EditSupplierController().handle)
router.delete('/suppliers/:id', isAuthenticated, new RemoveSupplierController().handle)

//Sale routes
router.put('/sale/product', isAuthenticated, new SaleProductController().handle)

export {router};
