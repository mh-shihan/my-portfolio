import axios from "axios";

const imagebb_api_key = import.meta.env.VITE_IMAGEBB_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${imagebb_api_key}`;

const uploadImage = async (imageFile) => {
  try {
    const formData = new FormData();
    formData.append("image", imageFile);
    const { data } = await axios.post(image_hosting_api, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(data.data);
    return data.data?.display_url;
  } catch (error) {
    console.error("Image upload failed:", error);
    return null;
  }
};

export default uploadImage;
