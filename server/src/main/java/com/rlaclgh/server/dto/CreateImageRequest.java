package com.rlaclgh.server.dto;


import java.util.ArrayList;
import java.util.List;
import lombok.Data;
import software.amazon.awssdk.annotations.NotNull;

@Data
public class CreateImageRequest {

  @NotNull
  private String imageUrl;

  private List<TagDto> tags = new ArrayList<>();

}





