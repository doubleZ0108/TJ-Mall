package site.doublez.tongjimall.controller;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import site.doublez.tongjimall.entity.Product;
import site.doublez.tongjimall.service.ProductService;

import javax.annotation.Resource;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

/**
 * @program: TJ-Mall
 * @description:
 * @author: 1754060 Zhe Zhang
 * @create: 2020/05/28
 **/
@Controller
@ComponentScan({"site.doublez.tongjimall.service"})
@MapperScan("site.doublez.tongjimall.dao")
public class ProductController {

    @Resource
    private ProductService productService;

    @RequestMapping(value = "product", method = RequestMethod.GET)
    public String product(){
        return "product";
    }

    @RequestMapping(value = "product.html", method = RequestMethod.GET)
    public String productpage(){
        return "product";
    }

    @PostMapping("/add-to-shopping-cart")
    @ResponseBody
    public Map<String, Object> AddToShoppingCart(@RequestBody Map<String,Object> map){
        String username = map.get("username").toString();
        String producttype = map.get("type").toString();
        String productindex = map.get("index").toString();
        String title = map.get("title").toString();
        String imgsrc = map.get("imgsrc").toString();
        String price = map.get("price").toString();
        String amount = map.get("amount").toString();

        Map<String, Object> result_map = new HashMap<>();

        Product product = new Product(username, producttype, Integer.parseInt(productindex), title, imgsrc,
                                        Double.parseDouble(price), Integer.parseInt(amount));
        try {
            productService.insert_product(product);
            result_map.put("state", "true");
        } catch (Exception e){
            e.printStackTrace();
            result_map.put("state", "false");
            result_map.put("msg", "数据库错误");
        }

        return result_map;
    }

    @PostMapping("/init-shopping-cart")
    @ResponseBody
    public Map<String, Object> InitShoppingCart(@RequestBody Map<String,Object> map){
        String username = map.get("username").toString();

        Map<String, Object> result_map = new HashMap<>();

        try {
            ArrayList<Product> productArrayList = productService.select_shoppingcart_by_username(username);
            result_map.put("shoppingcart-products", productArrayList);
            result_map.put("state", "true");
        } catch (Exception e){
            e.printStackTrace();
            result_map.put("state", "false");
            result_map.put("msg", "数据库错误");
        }

        return result_map;
    }
}
