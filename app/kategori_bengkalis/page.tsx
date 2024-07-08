import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"
import  { RightContent } from "../components/right_content" 
import { KategoriBengkalis } from "./ktg"


export default function KtgB() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 lg:grid-cols-7">
        <div className="col-span-4">
          <KategoriBengkalis />
        </div>
        <div className="col-span-3 hidden lg:block">
          <RightContent />
        </div>
      </div>
      <Footer/>
    </>
  );
}
