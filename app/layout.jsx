import "@/assets/styles/globals.css";

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="text-white font-playfair bg-black2 ">
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
