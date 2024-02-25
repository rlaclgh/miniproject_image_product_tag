package com.rlaclgh.server.dto;

import com.querydsl.core.annotations.QueryProjection;
import lombok.Data;

@Data
public class ImageTagDto {

  private Long id;

  private Long xCoordinate;
  private Long yCoordinate;
  private ProductDto product;

//  @QueryProjection
  public ImageTagDto(Long id, Long xCoordinate, Long yCoordinate, ProductDto product) {
    this.id = id;
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
    this.product = product;
  }
}
