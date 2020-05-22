package site.doublez.tongjimall.entity;

import lombok.Data;

/**
 * @program: TJ-Mall
 * @description:
 * @author: 1754060 Zhe Zhang
 * @create: 2020/05/22
 **/
@Data
public class User {
    private int id;
    private String username;
    private String password;
    private int age;

    public User() {
    }

    public User(int id, String username, String password, int age) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.age = age;
    }
}
