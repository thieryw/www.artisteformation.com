import { Home } from "./pages/Home";
import { useRoute } from "./router";
import { Text } from "./theme/Text";


export function App() {
  const route = useRoute();

  return (
    <>
      {route.name === "home" && <Home />}
      {route.name === "page1" && <Text typo="transition">Transitions</Text>}
    </>
  )
}

