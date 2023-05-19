import { AgeProvider } from "./context/AgeContext";
import { Layout } from "./components/UI/Layout";
import { AgeInput } from "./components/AgeInput";
import { TimeDisplayGroup } from "./components/TimeDisplayGroup";
import { Footer } from "./components/Footer";

function App() {
  return (
    <AgeProvider>
      <div className="h-full flex flex-col justify-between">
        <Layout>
          <AgeInput />
          <TimeDisplayGroup />
        </Layout>
        <Footer />
      </div>
    </AgeProvider>
  );
}

export default App;
