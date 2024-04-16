import { toast } from "react-toastify";
import { store } from "../../lib/store";
import { setCreatingAccount, setLoggedInUser,setLoggingIn } from "../../lib/features/authSlice";

export const loginUser = async (formData) => {
  store.dispatch(setLoggingIn(true))
  try {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      const data = await res.json();
      if(data?.user){
        store.dispatch(setLoggedInUser(data.user));
        toast.success(data.message);
        store.dispatch(setLoggingIn(false))
      }
      else{
        toast.error("Something went wrong, try again later")
        store.dispatch(setLoggingIn(false))
      }
    } else {
      const errorData = await res.json();
      console.error("Login failed:", errorData.message);
      toast.error(errorData.message);
        store.dispatch(setLoggingIn(false))

    }
  } catch (error) {
    console.error(error);
    toast.error("Fatal error.");
        store.dispatch(setLoggingIn(false))

  }
};

export const createUser = async (formData) => {
  store.dispatch(setCreatingAccount(true))
  try {
    const res = await fetch("/api/auth/register", {
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
      store.dispatch(setCreatingAccount(false))
    } else {
      const errorData = await res.json();
      toast.error(errorData.error);
      store.dispatch(setCreatingAccount(false))
    }
  } catch (error) {
    toast.error("An error occurred. Please try again later.");
    store.dispatch(setCreatingAccount(false))
  }
};
