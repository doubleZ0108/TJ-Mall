package site.doublez.tongjimall.service;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;
import site.doublez.tongjimall.dao.DBDao;
import site.doublez.tongjimall.entity.DB;

import javax.annotation.Resource;

/**
 * @program: TJ-Mall
 * @description:
 * @author: 1754060 Zhe Zhang
 * @create: 2020/05/22
 **/
@Service("dbService")
@ComponentScan({"site.doublez.tongjimall.dao"})
public class DBService {
    @Resource
    private DBDao dbDao;

    public void insert(DB user){
        dbDao.insert(user);
    }

    public void update(DB user){
        dbDao.update(user);
    }

    public DB find(int id){
        return dbDao.find(id);
    }

    public void delete(int id){
        dbDao.delete(id);
    }
}
