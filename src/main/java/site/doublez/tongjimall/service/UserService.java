package site.doublez.tongjimall.service;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;
import site.doublez.tongjimall.dao.UserDao;
import site.doublez.tongjimall.entity.DB;
import site.doublez.tongjimall.entity.User;

import javax.annotation.Resource;

/**
 * @program: TJ-Mall
 * @description:
 * @author: 1754060 Zhe Zhang
 * @create: 2020/05/29
 **/
@Service("userService")
@ComponentScan({"site.doublez.tongjimall.dao"})
public class UserService {
    @Resource
    private UserDao userDao;

    public void insert_user(User user){
        userDao.insert_user(user);
    }

    public User find_by_id(int id){
        return userDao.find_by_id(id);
    }

    public boolean is_user_exist(String username){
        return userDao.is_user_exist(username);
    }

    public boolean check_username_password(User user){
        return userDao.check_username_password(user);
    }
}
