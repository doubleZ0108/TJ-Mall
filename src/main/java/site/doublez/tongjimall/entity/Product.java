package site.doublez.tongjimall.entity;

import lombok.Data;

/**
 * @program: TJ-Mall
 * @description:
 * @author: 1754060 Zhe Zhang
 * @create: 2020/05/29
 **/
@Data
public class Product {
    private int id;
    private String username;
    private String type;
    private int index;
    private String title;
    private double price;
    private int amount;

    public Product() {
    }

    public Product(int id, String username, String type, int index, String title, double price, int amount) {
        this.id = id;
        this.username = username;
        this.type = type;
        this.index = index;
        this.title = title;
        this.price = price;
        this.amount = amount;
    }

    public Product(String username, String type, int index, String title, double price, int amount) {
        this.username = username;
        this.type = type;
        this.index = index;
        this.title = title;
        this.price = price;
        this.amount = amount;
    }
}
