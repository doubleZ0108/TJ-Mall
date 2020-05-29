package site.doublez.tongjimall.dao;

import org.apache.ibatis.annotations.Mapper;
import site.doublez.tongjimall.entity.User;

/**
 * @program: TJ-Mall
 * @description:
 * @author: 1754060 Zhe Zhang
 * @create: 2020/05/29
 **/
@Mapper
public interface UserDao {
    void insert_user(User user);

    User find_by_id(int id);

    boolean is_user_exist(String username);

    boolean check_username_password(User user);
}
