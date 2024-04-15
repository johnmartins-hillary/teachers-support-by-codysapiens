import { Raleway } from "next/font/google";
import "./globals.css";
import Login from "./(auth)/login/page";
import CreateAccount from "./(auth)/register/page";
import ResetPassword from "./(auth)/reset-password/page";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Teacher Support Tool",
  description: "Built by team CodeSapiens....",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Login />
        <CreateAccount />
        {/* <ResetPassword /> */}
        <div>{children}</div>
      </body>
    </html>
  );
}
