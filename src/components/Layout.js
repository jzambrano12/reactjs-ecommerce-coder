import NavbarComponent from "./NavBar";

export const Layout = ({ children }) => {
  return (
    <main className="flex flex-col h-screen bg-slate-200">
      <NavbarComponent />
      <section className="pt-10">{children}</section>
    </main>
  );
};
