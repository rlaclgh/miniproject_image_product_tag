package com.rlaclgh.server.product;

import com.rlaclgh.server.entity.Product;
import com.rlaclgh.server.repository.ProductRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

  @Autowired
  private ProductRepository productRepository;



  public List<Product> getProducts() {
    return productRepository.findAll();
  }

}
