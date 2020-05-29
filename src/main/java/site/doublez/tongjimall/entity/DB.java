package site.doublez.tongjimall.entity;

import lombok.Data;

/**
 * @program: TJ-Mall
 * @description:
 * @author: 1754060 Zhe Zhang
 * @create: 2020/05/29
 **/
@Data
public class DB {
    private int id;
    private String username;
    private String password;
    private int age;

    public DB() {
    }

    public DB(int id, String username, String password, int age) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.age = age;
    }
}
