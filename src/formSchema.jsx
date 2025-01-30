import { z } from "zod";

const formSchema = z.object({
  departmentId: z.string().min(1, "Department ID is required"),
  department: z.enum(
    ["it", "mechanical", "civil"],
    "Select a valid department"
  ),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must not exceed 15 digits"),
  email: z.string().email("Invalid email address"),
  hobbies: z.array(z.string()).min(1, "Select at least one hobby"),
  profilePicture: z.any(), // Accepting file uploads
  gender: z.enum(["male", "female"], "Select a gender"),
  address: z.string().min(1, "Address is required"),
  city: z.enum(
    ["Ahmedabad", "Mumbai", "Bangalore", "Chennai", "Delhi"],
    "Select a valid city"
  ),
  state: z.string().min(1, "State is required"),
});

export default formSchema;
