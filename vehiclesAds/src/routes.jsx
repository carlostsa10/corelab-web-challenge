import PaginaInicial from "../src/pages/Home";
function Main() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="*" element={<h1>Page Not Found</h1>}></Route>
      <Route path="/">
        <Route path="/" element={<PaginaInicial />}></Route>
        <Route path="/vehicles" element={<PaginaInicial />}></Route>
      </Route>
    </Routes>
  );
}

export default Main;
