import useStudentForm from "../hooks/useStudentForm";

const StudentDetailsForm = () => {
  const { register, handleSubmit, watch, errors, onSubmit } = useStudentForm();
  const selectedCity = watch("city");
  return (
    <>
      <div className="w-2xl  mx-auto p-4 rounded-lg bg-white mt-10 ">
        <h2 className="text-2xl mt-5 text-center font-semibold mb-4 text-blue-900">
          Student Details Form
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="mx-16">
          {/* Dept Id */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              DepartmentId
            </label>
            <input
              type="text"
              {...register("departmentId")}
              className="w-full p-2 border-b-2 border-b-gray-300 focus:border-b-blue-950 outline-0"
              placeholder="Enter your department id "
            />
            {errors.departmentId && (
              <p className="text-red-500 text-sm">
                {errors.departmentId.message}
              </p>
            )}
          </div>

          {/* department  */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Department</label>
            <select
              {...register("department")}
              className="w-full p-2 border-b-2 border-b-gray-300 focus:border-b-blue-950 outline-0"
            >
              <option value="" disabled>
                Select a department
              </option>
              <option value="it">IT</option>
              <option value="mechanical">Mechanical</option>
              <option value="civil">Civil</option>
            </select>
            {errors.department && (
              <p className="text-red-500 text-sm">
                {errors.department.message}
              </p>
            )}
          </div>

          {/* first Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">First Name</label>
            <input
              type="text"
              {...register("firstName")}
              className="w-full p-2 border-b-2 border-b-gray-300 focus:border-b-blue-950 outline-0"
              placeholder="Enter your first name"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}
          </div>

          {/* last name  */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Last Name</label>
            <input
              type="text"
              {...register("lastName")}
              className="w-full p-2 border-b-2 border-b-gray-300 focus:border-b-blue-950 outline-0"
              placeholder="Enter your last name"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName.message}</p>
            )}
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Phone Number
            </label>
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

          {/* Hobbies */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Hobbies</label>
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  {...register("hobbies")}
                  value="Sports"
                  className="mr-2"
                />
                Sports
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  {...register("hobbies")}
                  value="Reading"
                  className="mr-2"
                />
                Reading
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  {...register("hobbies")}
                  value="Coding"
                  className="mr-2"
                />
                Coding
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  {...register("hobbies")}
                  value="Travelling"
                  className="mr-2"
                />
                Travelling
              </label>
            </div>
            {errors.hobbies && (
              <p className="text-red-500 text-sm">{errors.hobbies.message}</p>
            )}
          </div>

          {/* Profile Picture */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Profile Picture
            </label>
            <input
              type="file"
              accept=".jpg,.svg"
              className="w-full p-2 border-b-2 border-b-gray-300 focus:border-b-blue-950 outline-0 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-900 hover:file:bg-blue-200"
            />
            {errors.profilePicture && (
              <p className="text-red-500 text-sm">
                {errors.profilePicture.message}
              </p>
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

          <div className="flex flex-col gap-4 mb-4">
            {/* City Field */}
            <div>
              <label className="block text-sm font-medium mb-2">City</label>
              <select
                {...register("city")}
                className="w-full p-2 border-b-2 border-b-gray-300 focus:border-b-blue-950 outline-0"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a city
                </option>
                <option value="Ahmedabad">Ahmedabad</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Chennai">Chennai</option>
                <option value="Delhi">Delhi</option>
              </select>
              {errors.city && (
                <p className="text-red-500 text-sm">{errors.city.message}</p>
              )}
            </div>

            {/* State Field */}
            <div>
              <label className="block text-sm font-medium mb-2">State</label>
              <select
                {...register("state")}
                className="w-full p-2 border-b-2 border-b-gray-300 focus:border-b-blue-950 outline-0"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a state
                </option>
                {selectedCity === "Ahmedabad" && (
                  <option value="Gujarat">Gujarat</option>
                )}
                {selectedCity === "Mumbai" && (
                  <option value="Maharashtra">Maharashtra</option>
                )}
                {selectedCity === "Bangalore" && (
                  <option value="Karnataka">Karnataka</option>
                )}
                {selectedCity === "Chennai" && (
                  <option value="Tamil Nadu">Tamil Nadu</option>
                )}
                {selectedCity === "Delhi" && (
                  <option value="Delhi">Delhi</option>
                )}
              </select>
              {errors.state && (
                <p className="text-red-500 text-sm">{errors.state.message}</p>
              )}
            </div>

            {/* Zip Code Field */}
            <div>
              <label className="block text-sm font-medium mb-2">Zip Code</label>
              <input
                type="text"
                {...register("zipCode")}
                className="w-full p-2 border-b-2 border-b-gray-300 focus:border-b-blue-950 outline-0"
                placeholder="Enter zip code"
              />
              {errors.zipCode && (
                <p className="text-red-500 text-sm">{errors.zipCode.message}</p>
              )}
            </div>
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
    </>
  );
};

export default StudentDetailsForm;
