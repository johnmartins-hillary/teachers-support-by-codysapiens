import { toast } from "react-toastify";

export const loginUser = async (formData) => {
  try {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      const data = await res.json();
      console.log(data.message);
      toast.success(data.message);
    } else {
      const errorData = await res.json();
      console.error("Login failed:", errorData.message);
      toast.error(errorData.message);
    }
  } catch (error) {
    console.error(error);
    toast.error("Fatal error.");
  }
};

export const createUser = async (formData) => {
  try {
    const res = await fetch("api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    console.log(res);
    if (res.ok) {
      const data = await res.json();
      toast.success(data.message);
    } else {
      const errorData = await res.json();
      toast.error(errorData.error);
    }
  } catch (error) {
    toast.error("An error occurred. Please try again later.");
  }
};
