package com.rlaclgh.server.image;


import com.rlaclgh.server.dto.CreateImageRequest;
import com.rlaclgh.server.dto.CreatePreSignedUrlRequest;
import com.rlaclgh.server.dto.CreatePreSignedUrlResponse;
import com.rlaclgh.server.dto.ImageDto;
import java.net.URL;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/image")
public class ImageController {

  @Autowired
  private ImageService imageService;


  @PostMapping("/pre-signed")
  public ResponseEntity<CreatePreSignedUrlResponse> createPreSignedImage(
      @RequestBody CreatePreSignedUrlRequest createPreSignedUrlRequest) {

    URL presignedPutObjectRequest = imageService.createSignedUrl(
        createPreSignedUrlRequest);
    return ResponseEntity.ok(new CreatePreSignedUrlResponse(presignedPutObjectRequest));
  }


  @PostMapping()
  public ResponseEntity<Void> createImage(
      @RequestBody CreateImageRequest createImageRequest
  ) {

    imageService.createImage(createImageRequest);
    return ResponseEntity.ok(null);
  }

  @GetMapping()
  public ResponseEntity<List<ImageDto>> getImages() {

    List<ImageDto> imageDtos = imageService.getImages();
    return ResponseEntity.ok(imageDtos);
  }

}
