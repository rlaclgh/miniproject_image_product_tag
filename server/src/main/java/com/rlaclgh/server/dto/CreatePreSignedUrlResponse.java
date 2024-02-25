package com.rlaclgh.server.dto;

import java.net.URL;
import lombok.Data;
import lombok.NonNull;

@Data
public class CreatePreSignedUrlResponse {
  @NonNull
  private URL url;
}
