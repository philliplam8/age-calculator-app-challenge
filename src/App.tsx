import { Layout } from "./components/UI/Layout";
import { AgeInput } from "./components/AgeInput";
import { Divider } from "./components/UI/Divider";
import { TimeDisplayGroup } from "./components/TimeDisplayGroup";

function App() {
  return (
    <Layout>
      <AgeInput />
      <Divider />
      <TimeDisplayGroup />
    </Layout>
  );
}

export default App;
