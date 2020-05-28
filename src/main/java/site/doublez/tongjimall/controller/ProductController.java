package site.doublez.tongjimall.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

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
}
