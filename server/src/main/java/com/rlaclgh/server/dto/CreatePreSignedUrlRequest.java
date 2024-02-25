package com.rlaclgh.server.dto;

import lombok.Data;
import software.amazon.awssdk.annotations.NotNull;

@Data
public class CreatePreSignedUrlRequest {

  @NotNull
  private String contentType;

}
