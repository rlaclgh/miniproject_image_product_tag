package com.rlaclgh.server.repository;

import static com.querydsl.core.group.GroupBy.groupBy;
import static com.querydsl.core.group.GroupBy.list;

import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.rlaclgh.server.dto.ImageDto;
import com.rlaclgh.server.dto.ImageTagDto;
import com.rlaclgh.server.dto.ProductDto;
import com.rlaclgh.server.entity.QImage;
import com.rlaclgh.server.entity.QImageTag;
import com.rlaclgh.server.entity.QProduct;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ImageRepositoryCustomImpl implements ImageRepositoryCustom {

  @Autowired
  private JPAQueryFactory queryFactory;

  @Override
  public List<ImageDto> getImages() {

    QImage image = QImage.image;
    QImageTag imageTag = QImageTag.imageTag;
    QProduct product = QProduct.product;



//    List<ImageDto> result = queryFactory
//        .select(Projections.constructor(
//            ImageDto.class,
//            image.id,
//            image.imageUrl,
//            Projections.list(
//                Projections.constructor(
//                    ImageTagDto.class,
//                    imageTag.xCoordinate,
//                    imageTag.yCoordinate,
//                    Projections.constructor(
//                        ProductDto.class,
//                        product.id,
//                        product.name,
//                        product.brandName,
//                        product.imageUrl
//                    )
//                )
//            )
//        ))
//        .from(image)
//        .leftJoin(image.imageTags, imageTag)
//        .leftJoin(imageTag.product, product)
//        .fetch();
//
//    return result;


    List<ImageDto> result = queryFactory
        .select()
        .from(image)
        .leftJoin(image.imageTags, imageTag)
        .leftJoin(imageTag.product, product)
        .transform(groupBy(image.id).list(Projections.constructor(ImageDto.class,
            image.id,
            image.imageUrl,
            list(
                Projections.constructor(ImageTagDto.class,
                    imageTag.id,
                    imageTag.xCoordinate,
                    imageTag.yCoordinate,
                    Projections.constructor(ProductDto.class,
                        product.id,
                        product.name,
                        product.brandName,
                        product.imageUrl

                    )
                )
            )

        ) )).stream().toList();


    return result;
  }
}


