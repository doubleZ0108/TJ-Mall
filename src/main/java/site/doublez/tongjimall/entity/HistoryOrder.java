package site.doublez.tongjimall.entity;

import lombok.Data;

import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * @program: TJ-Mall
 * @description: 历史订单实体
 * @author: 1754060 Zhe Zhang
 * @create: 2020/05/29
 **/
@Data
public class HistoryOrder {
    private int id;
    private String username;
    private Date ordertime;
    private String title;
    private String imgsrc;
    private int amount;

    public HistoryOrder(int id, String username, Timestamp ordertime, String title, String imgsrc, int amount) throws ParseException {
        this.id = id;
        this.username = username;

        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date date=new Date(ordertime.getTime());
        this.ordertime = simpleDateFormat.parse(simpleDateFormat.format(date));

        this.title = title;
        this.imgsrc = imgsrc;
        this.amount = amount;
    }

    public HistoryOrder(String username, Date ordertime, String title, String imgsrc, int amount) {
        this.username = username;
        this.ordertime = ordertime;
        this.title = title;
        this.imgsrc = imgsrc;
        this.amount = amount;
    }
}
