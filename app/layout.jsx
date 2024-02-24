import "@/assets/styles/globals.css";

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="font-playfair">
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
