package com.rlaclgh.server.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
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
@ToString(of = {"id", "name"})
public class Product extends BaseEntity {

  @Id
  @GeneratedValue
  private Long id;



  @Column
  private String name;

  @Column(name = "brand_name")
  private String brandName;

  @Column(name = "image_url")
  private String imageUrl;


  @JsonIgnore
  @OneToMany(mappedBy = "product")
  List<ImageTag> imageTags = new ArrayList<>();

  public Product(String name, String brandName, String imageUrl) {
    this.name = name;
    this.brandName = brandName;
    this.imageUrl = imageUrl;
  }
}
