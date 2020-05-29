package site.doublez.tongjimall;

import org.junit.jupiter.api.Test;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.test.context.SpringBootTest;
import site.doublez.tongjimall.service.ProductService;
import site.doublez.tongjimall.service.UserService;

@SpringBootTest
@MapperScan("site.doublez.tongjimall.dao")
class TongjiMallApplicationTests {

    @Test
    void contextLoads() {
    }

    public static void main(String[] args) {
//        ProductService productService = new ProductService();
//        productService.find_by_username("zz");

        UserService userService = new UserService();
        userService.is_user_exist("zz");
    }
}
