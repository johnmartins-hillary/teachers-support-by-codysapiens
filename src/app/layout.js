import { Raleway } from "next/font/google";
import "./globals.css";
import Login from "../../backend-app/(auth)/login/page";
import Register from './../../backend-app/(auth)/register/page';

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
        <Register />
        {/* <ResetPassword /> */}
        <div>{children}</div>
      </body>
    </html>
  );
}
