import { Background } from "./Background/Background";
import { Content } from "./Content/Content";
import { Copyright } from "./Copyright/Copyright";
import { Footer } from "./Footer/Footer";
import { NavigationBar } from "./NavigationBar/NavigationBar";

export function App() {
  return (
    <>
      <NavigationBar />
      <Background />
      <Content />
      <Footer />
      <Copyright />
    </>
  );
}