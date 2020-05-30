package site.doublez.tongjimall.dao;

import org.apache.ibatis.annotations.Mapper;
import site.doublez.tongjimall.entity.HistoryOrder;

import java.util.ArrayList;

/**
 * @program: TJ-Mall
 * @description: 历史订单 访问数据库接口
 * @author: 1754060 Zhe Zhang
 * @create: 2020/05/29
 **/
@Mapper
public interface HistoryOrderDao {
    void insert_order(HistoryOrder historyOrder);

    ArrayList<HistoryOrder> select_history(String username);
}
