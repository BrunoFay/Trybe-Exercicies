import { Router } from 'express'
import { ProductController } from '../controllers/productController'
import { validateProductsInfos } from '../middlewares/validateProductsInfos'
const route = Router()
const productController = new ProductController()

route.get('/?', productController.getProductByQuery)
route.get('/:id', productController.getProductById)
route.get('/', productController.getAllProduct)
route.post('/', validateProductsInfos, productController.creatProduct)
route.put('/:id', validateProductsInfos, productController.updateProductById)
route.delete('/:id', productController.removeProductById)


export default route