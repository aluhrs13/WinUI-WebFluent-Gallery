import { SideNav } from "../../components/SideNav/SideNav";
import { StackPanel } from "../../components/StackPanel";
import { ButtonPage } from "../ControlPages/ButtonPage";
import "./style.css";

export function Home() {
  return (
    <div class="row">
      <SideNav />
      <ButtonPage />
    </div>
  );
}
