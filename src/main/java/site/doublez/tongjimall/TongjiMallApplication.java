package site.doublez.tongjimall;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("site.doublez.tongjimall.dao")
public class TongjiMallApplication {

    public static void main(String[] args) {
        SpringApplication.run(TongjiMallApplication.class, args);
    }

}
