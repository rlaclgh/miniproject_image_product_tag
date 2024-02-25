package com.rlaclgh.server.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ToString(of = {"id"})
public class ImageTag  {
  @Id
  @GeneratedValue
  private Long id;

  @Column(name = "x_coordinate")
  private Long xCoordinate;

  @Column(name = "y_coordinate")
  private Long yCoordinate;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "image_id")
  private Image image;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "product_id", insertable = false, updatable = false)
  private Product product;


  @Column(name = "product_id")
  private Long productId;

  public ImageTag(Long xCoordinate, Long yCoordinate, Long productId, Image image) {
    this.xCoordinate = xCoordinate;
    this.yCoordinate = yCoordinate;
    this.productId = productId;
    this.image = image;
  }
}
