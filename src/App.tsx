import Header from "./components/Header/Header";
function App() {
  const headerMenu = [
    {
      label: "Home",
      href: "#",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Works",
      href: "#works",
    },
  ];
  return (
    <>
      <Header name="Maryam Elsheikh" links={headerMenu}/>
    </>
  );
}

export default App;
