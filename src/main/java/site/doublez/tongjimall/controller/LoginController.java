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

    @RequestMapping(value = "login.html", method = RequestMethod.GET)
    public String loginpage(){
        return "login";
    }

//    @PostMapping("/test-connecting-back-end")
//    @ResponseBody
//    public Map<String, Object> TestConnectingBackEnd(@RequestBody Map<String,Object> map){
//        String data = map.get("username").toString();
//        System.out.println(map);
//
//        Map<String, Object> result_map = new HashMap<>();
//        result_map.put("flag", "true");
//
//        return result_map;
//    }

    @PostMapping("/sign-up")
    @ResponseBody
    public Map<String, Object> SignUp(@RequestBody Map<String,Object> map){
        String data = map.get("username").toString();
        String password = map.get("password").toString();

        Map<String, Object> result_map = new HashMap<>();
        result_map.put("state", "true");

        return result_map;
    }

    @PostMapping("/sign-in")
    @ResponseBody
    public Map<String, Object> SignIn(@RequestBody Map<String,Object> map){
        String username = map.get("username").toString();
        String password = map.get("password").toString();

        Map<String, Object> result_map = new HashMap<>();
        result_map.put("state", "true");

        return result_map;
    }
}
