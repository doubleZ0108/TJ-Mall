package site.doublez.tongjimall.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

/**
 * @program: TJ-Mall
 * @description:
 * @author: 1754060 Zhe Zhang
 * @create: 2020/05/22
 **/
@Controller
@ResponseBody
public class MainController {
    @RequestMapping(method = RequestMethod.GET)
    public String index(){
        return "nihao";
    }

    @PostMapping("/say")
    @ResponseBody
    public Map<String, Object> MetadataLayerConstruct(@RequestBody Map<String,Object> map){

        Map<String, Object> result_map = new HashMap<>();
        result_map.put("flag", "true");

        return result_map;
    }
}
