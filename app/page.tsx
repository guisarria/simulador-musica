import Footer from "./components/footer";
import Simulator from "./components/simulator";

export default function Home() {
  return (
    <main className="h-[calc(100vh-3.7rem)] sm:h-screen md:h-auto">
      <Simulator />
      <Footer />
    </main>
  );
}
