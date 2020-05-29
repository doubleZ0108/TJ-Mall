package site.doublez.tongjimall.controller;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.*;
import site.doublez.tongjimall.entity.DB;
import site.doublez.tongjimall.service.DBService;

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
public class DBController {

//    @Autowired
    @Resource
    private DBService dbService;

    @RequestMapping(method = RequestMethod.GET, value = "/find")
    public String find(){
        DB db = dbService.find(1);
        return db.getUsername() + " " + db.getPassword();
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
        DB db = new DB(3, "gf", "1235434543", 20);
        dbService.insert(db);
        return "insert";
    }
}
