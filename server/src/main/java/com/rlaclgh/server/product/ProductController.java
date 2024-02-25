package com.rlaclgh.server.product;


import com.rlaclgh.server.entity.Product;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/product")
public class ProductController {

  @Autowired
  private ProductService productService;



  @GetMapping()
  public List<Product> getProducts() {
    return productService.getProducts();
  }

}
