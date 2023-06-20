import DisplayProjects from "./DisplayProjects";
import DisplaySection from "./DisplaySection";

export default function Home() {
  return (
    <div className="main-content">
      <DisplaySection />
      <DisplayProjects />
    </div>
  );
}
