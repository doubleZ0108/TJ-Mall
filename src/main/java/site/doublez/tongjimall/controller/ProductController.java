package site.doublez.tongjimall.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

/**
 * @program: TJ-Mall
 * @description:
 * @author: 1754060 Zhe Zhang
 * @create: 2020/05/28
 **/
@Controller
public class ProductController {
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
        String type = map.get("type").toString();
        String index = map.get("index").toString();
        String title = map.get("title").toString();
        String price = map.get("price").toString();
        String amount = map.get("amount").toString();

        System.out.println(type + index + title + price + amount);

        Map<String, Object> result_map = new HashMap<>();
        result_map.put("state", "true");

        return result_map;
    }
}
