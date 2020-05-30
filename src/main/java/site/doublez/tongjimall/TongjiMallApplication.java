package site.doublez.tongjimall;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
@MapperScan("site.doublez.tongjimall.dao")
public class TongjiMallApplication extends SpringBootServletInitializer {

    public static void main(String[] args) {
        SpringApplication.run(TongjiMallApplication.class, args);
    }

    @Override
    protected SpringApplicationBuilder configure(
            SpringApplicationBuilder builder) {
        return builder.sources(this.getClass());
    }
}
