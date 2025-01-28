import { z } from "zod";

const formSchema = z.object({
  name: z
    .string()
    .min(3, "Name should not be shorter more than 3 charecters")
    .max(10, "Name should not be longer more than 10 charecters"),

  email: z.string().email("Invalid email format").nonempty("Email is required"),

  phone: z.string().regex(/^[0-9]{10}$/, "Phone number must be 10 digits"),

  dob: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Date of Birth is required",
  }),

  gender: z.enum(["male", "female"], {
    message: "Please select your gender",
  }),

  address: z
    .string()
    .max(100, "Address cannot exceed 100 characters")
    .nonempty("Address is required"),

  profilePicture: z.any().refine((file) => file && file.length > 0, {
    message: "Profile picture is required",
  }),

  state: z
    .string()
    .refine((value) => value === "Select state", "Please select your state"),
});

export default formSchema;
