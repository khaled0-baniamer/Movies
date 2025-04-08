import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="min-h-[85vh] bg-black text-white lg:p-20 md:p-10 p-5">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
