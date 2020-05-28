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
public class LoginController {
    @RequestMapping(value = "login", method = RequestMethod.GET)
    public String login(){
        return "login";
    }

    @PostMapping("/test-connecting-back-end")
//    @RequestParam
    @ResponseBody
    public Map<String, Object> TestConnectingBackEnd(@RequestBody Map<String,Object> map){
        String data = map.get("username").toString();
        System.out.println(map);

        Map<String, Object> result_map = new HashMap<>();
        result_map.put("flag", "true");

        return result_map;
    }
}
