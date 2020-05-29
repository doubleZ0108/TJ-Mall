package site.doublez.tongjimall.dao;

import org.apache.ibatis.annotations.Mapper;
import site.doublez.tongjimall.entity.Product;

/**
 * @program: TJ-Mall
 * @description:
 * @author: 1754060 Zhe Zhang
 * @create: 2020/05/29
 **/
@Mapper
public interface ProductDao {
    void insert_product(Product product);

    Product find_by_username(String username);
}
