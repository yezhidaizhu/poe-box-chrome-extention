import { createRoot } from "react-dom/client";
import App from "@src/pages/content/views/app";
import refreshOnUpdate from "virtual:reload-on-update-in-view";

refreshOnUpdate("pages/content");

const root = document.createElement("div");
root.id = "chrome-extension-poe-react-vite-content-view-root";
document.body.append(root);

createRoot(root).render(<App />);
