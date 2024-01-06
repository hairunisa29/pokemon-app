import BottomNavbar from "./BottomNavbar";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <BottomNavbar />
    </div>
  );
}

export default Layout;
