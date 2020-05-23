package site.doublez.tongjimall.service;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;
import site.doublez.tongjimall.dao.UserDao;
import site.doublez.tongjimall.entity.User;

import javax.annotation.Resource;

/**
 * @program: TJ-Mall
 * @description:
 * @author: 1754060 Zhe Zhang
 * @create: 2020/05/22
 **/
@Service("userService")
@ComponentScan({"site.doublez.tongjimall.dao"})
public class UserService {
    @Resource
    private UserDao userDao;

    public void insert(User user){
        userDao.insert(user);
    }

    public void update(User user){
        userDao.update(user);
    }

    public User find(int id){
        return userDao.find(id);
    }

    public void delete(int id){
        userDao.delete(id);
    }
}
