import NavbarComponent from "../NavBar";

const Layout = ({ children }) => {
  return (
    <main className="flex flex-col h-screen bg-slate-200">
      <NavbarComponent />
      {children}
    </main>
  );
};

export default Layout;
