package site.doublez.tongjimall.entity;

import lombok.Data;

import java.util.Date;

/**
 * @program: TJ-Mall
 * @description:
 * @author: 1754060 Zhe Zhang
 * @create: 2020/05/29
 **/
@Data
public class Order {
    private int id;
    private String username;
    private Date ordertime;
    private String title;
    private String imgsrc;
    private int amount;

    public Order(int id, String username, Date ordertime, String title, String imgsrc, int amount) {
        this.id = id;
        this.username = username;
        this.ordertime = ordertime;
        this.title = title;
        this.imgsrc = imgsrc;
        this.amount = amount;
    }

    public Order(String username, Date ordertime, String title, String imgsrc, int amount) {
        this.username = username;
        this.ordertime = ordertime;
        this.title = title;
        this.imgsrc = imgsrc;
        this.amount = amount;
    }
}
