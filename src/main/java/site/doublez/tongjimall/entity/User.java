package site.doublez.tongjimall.entity;

import lombok.Data;

/**
 * @program: TJ-Mall
 * @description: 用户实体
 * @author: 1754060 Zhe Zhang
 * @create: 2020/05/29
 **/
@Data
public class User {
    private int id;
    private String username;
    private String password;

    public User() { }

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }
}
