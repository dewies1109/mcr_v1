import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"
import  { RightContent } from "../components/right_content" 
import { KategoriDumai } from "./ktg"


export default function KtgD() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 lg:grid-cols-7">
        <div className="col-span-4">
          <KategoriDumai />
        </div>
        <div className="col-span-3 hidden lg:block">
          <RightContent />
        </div>
      </div>
      <Footer/>
    </>
  );
}
