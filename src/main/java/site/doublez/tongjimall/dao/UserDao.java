package site.doublez.tongjimall.dao;

import org.apache.ibatis.annotations.Mapper;
import site.doublez.tongjimall.entity.User;

/**
 * @program: TJ-Mall
 * @description:
 * @author: 1754060 Zhe Zhang
 * @create: 2020/05/22
 **/
@Mapper
public interface UserDao {

    void insert(User user);

    void update(User user);

    User find(int id);

    void delete(int id);
}
