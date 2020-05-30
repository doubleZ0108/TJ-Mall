package site.doublez.tongjimall.controller;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

/**
 * @program: TJ-Mall
 * @description: 错误界面controller
 * @author: 1754060 Zhe Zhang
 * @create: 2020/05/30
 **/
@Controller
public class MyErrorController implements ErrorController {

    @Override
    public String getErrorPath() {
        return null;
    }

    @RequestMapping("error")
    public String error(HttpServletRequest request, Map<String,Object> map){
        //获取异常类型 401 403 404 505
        Integer statusCode = (Integer) request.getAttribute("javax.servlet.error.status_code");
        map.put("error",statusCode);
        return "error";
    }
}
