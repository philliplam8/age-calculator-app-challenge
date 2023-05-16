import { Layout } from "./components/UI/Layout";
import { AgeInput } from "./components/AgeInput";
import { TimeDisplayGroup } from "./components/TimeDisplayGroup";

function App() {
  return (
    <Layout>
      <AgeInput />
      <TimeDisplayGroup />
    </Layout>
  );
}

export default App;
