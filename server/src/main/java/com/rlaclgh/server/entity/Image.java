package com.rlaclgh.server.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ToString(of = {"id", "imageUrl"})
public class Image extends BaseEntity{

  @Id
  @GeneratedValue
  private Long id;

  @Column(name = "image_url")
  private String imageUrl;

  @OneToMany(mappedBy = "image")
  List<ImageTag> imageTags = new ArrayList<>();

  public Image(String imageUrl) {
    this.imageUrl = imageUrl;
  }
}
