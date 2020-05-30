package site.doublez.tongjimall.dao;

import org.apache.ibatis.annotations.Mapper;
import site.doublez.tongjimall.entity.DB;

/**
 * @program: TJ-Mall
 * @description: 测试DB 访问数据库接口
 * @author: 1754060 Zhe Zhang
 * @create: 2020/05/22
 **/
@Mapper
public interface DBDao {

    void insert(DB user);

    void update(DB user);

    DB find(int id);

    void delete(int id);
}
