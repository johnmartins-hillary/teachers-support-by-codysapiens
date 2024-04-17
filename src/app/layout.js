import { Raleway } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Teacher Support Tool",
  description: "Built by team CodeSapiens....",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <div>{children}</div>
      <ToastContainer position="bottom-left" />
      </body>
    </html>
  );
}
