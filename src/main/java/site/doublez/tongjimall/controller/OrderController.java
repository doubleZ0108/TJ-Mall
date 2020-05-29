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
public class OrderController {
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
    public Map<String, Object> Settle(@RequestBody Map<String,Object> map){
        System.out.println("order..");
        Map<String, Object> result_map = new HashMap<>();
        result_map.put("state", "true");

        return result_map;
    }
}
