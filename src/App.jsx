import { useForm } from "react-hook-form";
import "./App.css";
import { zodResolver } from "@hookform/resolvers/zod";
import formSchema from "./formSchema";

const StudentDetailsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    alert("Form submitted successfully!");
  };

  const indianStates = [
    "Select state",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  return (
    <div className="w-2xl  mx-auto p-4 rounded-lg bg-white mt-10 ">
      <h2 className="text-2xl mt-5 text-center font-semibold mb-4 text-blue-900">
        Student Details Form
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-16">
        {/* Student Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            {...register("name")}
            className="w-full p-2 border-b-2 border-b-gray-300 focus:border-b-blue-950 outline-0"
            placeholder="Enter your name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>
        {/* Profile Picture */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Profile Picture
          </label>
          <input
            type="file"
            {...register("profilePicture")}
            accept=".jpg,.svg"
            className="w-full p-2 border-b-2 border-b-gray-300 focus:border-b-blue-950 outline-0 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-900 hover:file:bg-blue-200"
          />
          {errors.profilePicture && (
            <p className="text-red-500 text-sm">
              {errors.profilePicture.message}
            </p>
          )}
        </div>
        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="text"
            {...register("email")}
            className="w-full p-2 border-b-2 border-b-gray-300 focus:border-b-blue-950 outline-0"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        {/* Phone Number */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Phone Number</label>
          <input
            type="tel"
            {...register("phone")}
            className="w-full p-2 border-b-2 border-b-gray-300 focus:border-b-blue-950 outline-0"
            placeholder="Enter your phone number"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>
        {/* Date of Birth */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Date of Birth
          </label>
          <input
            type="date"
            {...register("dob")}
            className="w-full p-2 border-b-2 border-b-gray-300 focus:border-b-blue-950 outline-0"
          />
          {errors.dob && (
            <p className="text-red-500 text-sm">{errors.dob.message}</p>
          )}
        </div>
        {/* Gender  */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Select your gender
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                {...register("gender")}
                value="male"
                className="mr-2"
              />
              Male
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                {...register("gender")}
                value="female"
                className="mr-2"
              />
              Female
            </label>
          </div>
          {errors.gender && (
            <p className="text-red-500 text-sm">{errors.gender.message}</p>
          )}
        </div>
        {/* Address */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Address</label>
          <textarea
            {...register("address")}
            className="w-full p-2 border-b-2 border-b-gray-300 focus:border-b-blue-950 outline-0"
            placeholder="Enter your address"
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address.message}</p>
          )}
        </div>

        {/* Agree to Term*/}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Terms and Conditions
          </label>
          <div className="flex items-center">
            <input type="checkbox" {...register("terms")} className="mr-2" />
            <span>I agree to the terms and conditions</span>
          </div>
          {errors.terms && (
            <p className="text-red-500 text-sm">{errors.terms.message}</p>
          )}
        </div>
        {/* State */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Select your state
          </label>
          <select className="w-full p-2 border-b-2 border-b-gray-300 focus:border-b-blue-950 outline-0">
            {indianStates.map((state) => (
              <option value={state} key={state} {...register("state")}>
                {state}
              </option>
            ))}
          </select>
          {errors.state && (
            <p className="text-red-500 text-sm">{errors.state.message}</p>
          )}
        </div>
        {/* Submit Button */}
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="w-1/4 bg-blue-700 text-white p-2 rounded hover:bg-blue-900"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentDetailsForm;
