import Header from "@/components/header";
import ImageUploadForm from "@/components/image_upload_form";

const UploadPage = () => {
  return (
    <>
      <Header renderCenter={() => <div>이미지 업로드</div>} />
      <ImageUploadForm />
    </>
  );
};

export default UploadPage;
