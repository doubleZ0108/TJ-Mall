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
    private String producttype;
    private int productindex;
    private String title;
    private String imgsrc;
    private double price;
    private int amount;

    public Product() {
    }

    public Product(int id, String username, String producttype, int productindex, String title, String imgsrc, double price, int amount) {
        this.id = id;
        this.username = username;
        this.producttype = producttype;
        this.productindex = productindex;
        this.title = title;
        this.imgsrc = imgsrc;
        this.price = price;
        this.amount = amount;
    }

    public Product(String username, String producttype, int productindex, String title, String imgsrc, double price, int amount) {
        this.username = username;
        this.producttype = producttype;
        this.productindex = productindex;
        this.title = title;
        this.imgsrc = imgsrc;
        this.price = price;
        this.amount = amount;
    }
}
