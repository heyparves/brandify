import { Footer, Navbar } from "../components";
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from "../sections";
import Services from "@/components/Services";

const Page = () => (
  <div className="overflow-hidden">
    <Navbar />
    <Hero />
    <Services />
    <Services />
    <Services />
    <Services />
    <Services />
    <Services />
  </div>
);

export default Page;
