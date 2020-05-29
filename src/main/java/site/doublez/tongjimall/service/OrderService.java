package site.doublez.tongjimall.service;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;
import site.doublez.tongjimall.dao.OrderDao;
import site.doublez.tongjimall.entity.Order;

import javax.annotation.Resource;

/**
 * @program: TJ-Mall
 * @description:
 * @author: 1754060 Zhe Zhang
 * @create: 2020/05/29
 **/
@Service("orderService")
@ComponentScan({"site.doublez.tongjimall.dao"})
public class OrderService {
    @Resource
    private OrderDao orderDao;

    public void insert_order(Order order){
        orderDao.insert_order(order);
    }
}
