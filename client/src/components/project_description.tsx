"use client";

const ProjectDescription = () => {
  return (
    <div className="flex items-center h-full flex-col">
      <div className="w-120">
        <div className="text-5xl mb-10 mt-10">
          miniproject_image_product_tag
        </div>
        <div className="text-2xl my-2">1. 프로젝트 설명</div>
        <div className="text-xl my-2">
          1.1 이미지의 특정 좌표에 제품을 태그할 수 있는 프로젝트입니다.
        </div>
        <div className="text-xl my-2">1.2 DB ERD</div>
        <img src="product_tag_erd.png" width={500} />
      </div>
    </div>
  );
};

export default ProjectDescription;
