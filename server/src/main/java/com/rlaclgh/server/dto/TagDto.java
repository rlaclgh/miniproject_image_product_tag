package com.rlaclgh.server.dto;


import lombok.Data;
import lombok.NonNull;

@Data
public class TagDto {


  @NonNull
  private Long xCoordinate;

  @NonNull
  private Long yCoordinate;

  @NonNull
  private Long productId;


}
