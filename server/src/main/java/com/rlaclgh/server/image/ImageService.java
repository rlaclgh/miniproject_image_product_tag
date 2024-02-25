package com.rlaclgh.server.image;


import com.rlaclgh.server.dto.CreateImageRequest;
import com.rlaclgh.server.dto.CreatePreSignedUrlRequest;
import com.rlaclgh.server.dto.ImageDto;
import com.rlaclgh.server.dto.TagDto;
import com.rlaclgh.server.entity.Image;
import com.rlaclgh.server.entity.ImageTag;
import com.rlaclgh.server.repository.ImageRepository;
import com.rlaclgh.server.repository.ImageTagRepository;
import java.net.URL;
import java.time.Duration;
import java.util.List;
import java.util.UUID;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import software.amazon.awssdk.auth.credentials.AwsBasicCredentials;
import software.amazon.awssdk.auth.credentials.StaticCredentialsProvider;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;
import software.amazon.awssdk.services.s3.presigner.S3Presigner;
import software.amazon.awssdk.services.s3.presigner.model.PresignedPutObjectRequest;
import software.amazon.awssdk.services.s3.presigner.model.PutObjectPresignRequest;

@Service
@Slf4j
public class ImageService {



  @Value("${aws.accessKeyId}")
  private String accessKeyId;

  @Value("${aws.secretKey}")
  private String secretKey;


  @Autowired
  private ImageRepository imageRepository;

  @Autowired
  private ImageTagRepository imageTagRepository;



  private static String BUCKET_NAME = "onetomany-image";


  public URL createSignedUrl(CreatePreSignedUrlRequest createPreSignedUrlRequest) {

    String contentType = createPreSignedUrlRequest.getContentType();

    String keyName = "raw/" + UUID.randomUUID() + "." + contentType.split("/")[1];
    try (S3Presigner presigner = S3Presigner.builder()
        .region(Region.AP_NORTHEAST_2).credentialsProvider(
            StaticCredentialsProvider.create(
                AwsBasicCredentials.create(accessKeyId, secretKey))
        ).build()) {
      PutObjectRequest objectRequest = PutObjectRequest.builder()
          .bucket(BUCKET_NAME)
          .key(keyName)
          .contentType(contentType)
          .build();
      PutObjectPresignRequest presignRequest = PutObjectPresignRequest.builder()
          .signatureDuration(Duration.ofSeconds(10))
          .putObjectRequest(objectRequest)
          .build();

      PresignedPutObjectRequest presignedRequest = presigner.presignPutObject(presignRequest);
      return presignedRequest.url();
    } catch (Error e) {
      return null;
    }
  }



  public void createImage(CreateImageRequest createImageRequest){

    String imageUrl = createImageRequest.getImageUrl();

    List<TagDto> dtos = createImageRequest.getTags();

    Image newImage = new Image(imageUrl);
    Image createdImage = imageRepository.save(newImage);

    for (TagDto tagDto: dtos) {

      log.info(tagDto.toString());
      Long xCoordinate = tagDto.getXCoordinate();
      Long yCoordinate = tagDto.getYCoordinate();
      Long productId = tagDto.getProductId();
      ImageTag newImageTag = new ImageTag(xCoordinate, yCoordinate, productId, createdImage);
      imageTagRepository.save(newImageTag);
    }
  }


  public List<ImageDto> getImages(){
    List<ImageDto> imageDtos = imageRepository.getImages();
    return imageDtos;
  }



}
