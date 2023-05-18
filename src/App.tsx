import { Layout } from "./components/UI/Layout";
import { AgeInput } from "./components/AgeInput";
import { TimeDisplayGroup } from "./components/TimeDisplayGroup";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="h-full flex flex-col justify-between">
      <Layout>
        <AgeInput />
        <TimeDisplayGroup />
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
