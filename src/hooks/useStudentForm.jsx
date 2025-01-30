import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import formSchema from "../formSchema";

const useStudentForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    console.log("Form data:", data);

    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    try {
      const response = await axios.post(
        "https://526d-103-240-169-179.ngrok-free.app/api/v1/students",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        console.log("Form data submitted successfully:", response.data);
        console.log(formData);
        alert("Data submitted successfully");
      } else {
        console.error("Submission failed:", response.data);
        alert("Submission failed");
      }
    } catch (error) {
      console.error("Error during submission:", error);
      alert("An error occurred");
    }
  };

  return { register, handleSubmit, watch, errors, onSubmit };
};

export default useStudentForm;
