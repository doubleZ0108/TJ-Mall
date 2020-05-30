package site.doublez.tongjimall.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

/**
 * @program: TJ-Mall
 * @description: 主界面controller
 * @author: 1754060 Zhe Zhang
 * @create: 2020/05/22
 **/
@Controller
public class IndexController {
    @RequestMapping(method = RequestMethod.GET)
    public String home(){
        return "index";
    }

    @RequestMapping(value = "index", method = RequestMethod.GET)
    public String index(){
        return "index";
    }

    @RequestMapping(value = "index.html", method = RequestMethod.GET)
    public String indexpage(){
        return "index";
    }


}
