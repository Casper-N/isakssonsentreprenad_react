import { About } from "./components/main/About";
import { Contact } from "./components/main/Contact";
import { MachineFleet } from "./components/main/MachineFleet";
import { Services } from "./components/main/Services";
import { TextImage } from "./components/main/TextImage";
import { NavBar } from "./components/navbar/Navbar";

function App() {
  return (
    <div className="bg-light">
      <header>
        <NavBar />
      </header>

      <main>
        <TextImage
          text={
            "En textsnutt hit som kan innehålla vad du vill, bakgrundsbilden kan också ändras"
          }
        />
        <div className="container-fluid">
          <About />
          <Services />
          <MachineFleet />
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
