package site.doublez.tongjimall.controller;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import site.doublez.tongjimall.entity.Order;
import site.doublez.tongjimall.entity.Product;
import site.doublez.tongjimall.service.OrderService;
import site.doublez.tongjimall.service.ProductService;

import javax.annotation.Resource;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
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
public class OrderController {

    @Resource
    private ProductService productService;

    @Resource
    private OrderService orderService;

    @RequestMapping(value = "order", method = RequestMethod.GET)
    public String order(){
        return "order";
    }

    @RequestMapping(value = "order.html", method = RequestMethod.GET)
    public String orderpage(){
        return "order";
    }

    @PostMapping("/settle")
    @ResponseBody
    public Map<String, Object> Settle(@RequestBody Map<String,Object> map) throws ParseException {
        String username = map.get("username").toString();

        Map<String, Object> result_map = new HashMap<>();

        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date date=new Date();
        Date ordettime = simpleDateFormat.parse(simpleDateFormat.format(date));

        try {
            //(1) 查询购物车
            ArrayList<Product> productArrayList = productService.select_shoppingcart_by_username(username);

            // (2) 将订单加入历史订单
            productArrayList.forEach(product -> {
                Order order = new Order(username, ordettime, product.getTitle(), product.getImgsrc(), product.getAmount());
                orderService.insert_order(order);
            });

            // (3) 清空购物车
            productService.delete_by_username(username);

            result_map.put("state", "true");
        } catch (Exception e){
            e.printStackTrace();
            result_map.put("state", "false");
            result_map.put("msg", "数据库错误");
        }

        return result_map;
    }
}
