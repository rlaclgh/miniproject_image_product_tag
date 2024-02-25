package com.rlaclgh.server;

import com.rlaclgh.server.entity.Product;
import com.rlaclgh.server.repository.ProductRepository;
import java.util.Arrays;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class CreateProductData implements ApplicationRunner {

  @Autowired
  private ProductRepository productRepository;

  @Override
  public void run(ApplicationArguments args) throws Exception {

    Product product1 = new Product("name1", "brandName1", "https://onetomany-image.s3.ap-northeast-2.amazonaws.com/raw/32585b9b-92b4-4a26-be8a-86a5177bc74a.jpeg");
    Product product2 = new Product("name2", "brandName2", "https://onetomany-image.s3.ap-northeast-2.amazonaws.com/raw/8ddfd38a-adb4-418f-b4ff-f7a4c02f1cea.jpeg");
    Product product3 = new Product("name3", "brandName3", "https://onetomany-image.s3.ap-northeast-2.amazonaws.com/raw/owl-50267_1920.jpg");
    Product product4 = new Product("name4", "brandName4", "https://onetomany-image.s3.ap-northeast-2.amazonaws.com/raw/lion-3576045_1920.jpg");
    Product product5 = new Product("name5", "brandName5", "https://onetomany-image.s3.ap-northeast-2.amazonaws.com/raw/kingfisher-2046453_1920.jpg");


    productRepository.saveAll(Arrays.asList(product1, product2, product3, product4, product5));

  }
}
