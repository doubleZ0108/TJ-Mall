package site.doublez.tongjimall.controller;

import org.apache.ibatis.annotations.Param;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import site.doublez.tongjimall.entity.User;
import site.doublez.tongjimall.service.UserService;

import javax.annotation.Resource;

/**
 * @program: TJ-Mall
 * @description:
 * @author: 1754060 Zhe Zhang
 * @create: 2020/05/22
 **/
@RestController
@ComponentScan({"site.doublez.tongjimall.service"})
@MapperScan("site.doublez.tongjimall.dao")
public class UserController {

//    @Autowired
    @Resource
    private UserService userService;

    @RequestMapping(method = RequestMethod.GET, value = "/find")
    public String find(){
        User user = userService.find(1);
        return user.getUsername() + " " + user.getPassword();
    }

//    @PostMapping(value = "/insert")
//    public void insert(@Param("id") int id,
//                       @Param("username") String username,
//                       @Param("password") String password,
//                       @Param("age") int age){
//        User user = new User(id, username, password, age);
//        userService.insert(user);
//    }

    @RequestMapping(method = RequestMethod.GET, value = "/insert")
    public String insert(){
        User user = new User(3, "gf", "1235434543", 20);
        userService.insert(user);
        return "insert";
    }
}
