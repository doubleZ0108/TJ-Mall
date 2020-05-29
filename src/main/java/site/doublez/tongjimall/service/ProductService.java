package site.doublez.tongjimall.service;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;
import site.doublez.tongjimall.dao.ProductDao;
import site.doublez.tongjimall.entity.Product;

import javax.annotation.Resource;

/**
 * @program: TJ-Mall
 * @description:
 * @author: 1754060 Zhe Zhang
 * @create: 2020/05/29
 **/
@Service("productService")
@ComponentScan({"site.doublez.tongjimall.dao"})
public class ProductService {
    @Resource
    private ProductDao productDao;

    public void insert_product(Product product){
        productDao.insert_product(product);
    }

    public Product find_by_username(String username){
        return productDao.find_by_username(username);
    }
}
