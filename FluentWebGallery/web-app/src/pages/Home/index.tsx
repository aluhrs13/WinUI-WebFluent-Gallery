import { SideNav } from "../../components/GeneratedComponents/SideNav";
import { StackPanel } from "../../components/StackPanel";
import { ButtonPage } from "../GeneratedPages/ButtonPage";
import "./style.css";

export function Home() {
  return (
    <div class="row">
      <SideNav />
      <ButtonPage />
    </div>
  );
}
