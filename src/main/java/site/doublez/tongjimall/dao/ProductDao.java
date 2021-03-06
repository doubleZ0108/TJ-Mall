package site.doublez.tongjimall.dao;

import org.apache.ibatis.annotations.Mapper;
import site.doublez.tongjimall.entity.Product;

import java.util.ArrayList;

/**
 * @program: TJ-Mall
 * @description: 商品 访问数据库接口
 * @author: 1754060 Zhe Zhang
 * @create: 2020/05/29
 **/
@Mapper
public interface ProductDao {
    void insert_product(Product product);

    ArrayList<Product> select_shoppingcart_by_username(String username);

    void delete_by_username(String username);
}
