package com.rlaclgh.server.dto;

import com.querydsl.core.annotations.QueryProjection;
import java.util.List;
import lombok.Data;

@Data
public class ImageDto {

  private Long id;
  private String imageUrl;
  private List<ImageTagDto> tags;

  public ImageDto(Long id, String imageUrl, List<ImageTagDto> tags) {
    this.id = id;
    this.imageUrl = imageUrl;
    this.tags = tags;
  }
}
