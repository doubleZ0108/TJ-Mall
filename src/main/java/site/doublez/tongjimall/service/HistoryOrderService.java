package site.doublez.tongjimall.service;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;
import site.doublez.tongjimall.dao.HistoryOrderDao;
import site.doublez.tongjimall.entity.HistoryOrder;

import javax.annotation.Resource;
import java.util.ArrayList;

/**
 * @program: TJ-Mall
 * @description:
 * @author: 1754060 Zhe Zhang
 * @create: 2020/05/29
 **/
@Service("orderService")
@ComponentScan({"site.doublez.tongjimall.dao"})
public class HistoryOrderService {
    @Resource
    private HistoryOrderDao historyOrderDao;

    public void insert_order(HistoryOrder historyOrder){
        historyOrderDao.insert_order(historyOrder);
    }

    public ArrayList<HistoryOrder> select_history(String username){
        return historyOrderDao.select_history(username);
    }
}
