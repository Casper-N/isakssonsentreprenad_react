import { Contact } from "./components/main/Contact";
import { Projects } from "./components/main/Projects";
import { Services } from "./components/main/Services";
import { TextImage } from "./components/main/TextImage";
import Video from "./components/main/Video";
import { NavBar } from "./components/navbar/Navbar";

function App() {
  return (
    <div className="bg-light">
      <header>
        <NavBar />
      </header>

      <main>
        <div className="container-fluid">
          <Video />
          <Services />
          <Projects />
          <TextImage text={"Inget jobb är för stort eller litet för oss!"} />
          <Contact />
        </div>
      </main>
      <footer></footer>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
}

export default App;
