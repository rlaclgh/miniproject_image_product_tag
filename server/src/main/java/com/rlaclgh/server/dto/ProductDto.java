package com.rlaclgh.server.dto;


import com.querydsl.core.annotations.QueryProjection;
import lombok.Data;

@Data
public class ProductDto {

  private Long id;
  private String name;
  private String brandName;
  private String imageUrl;


  public ProductDto(Long id, String name, String brandName, String imageUrl) {
    this.id = id;
    this.name = name;
    this.brandName = brandName;
    this.imageUrl = imageUrl;
  }
}
