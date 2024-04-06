
import LayoutWrapper from "@/components/LayoutWrapper";
import { FrequentlyAskedQuestions, Hero, MakeTheRightChoice, Services, Testimonials, UniqueSellingPoints } from "@/layouts";


export default function Home() {
  return (<>  <LayoutWrapper><Hero/>
  <UniqueSellingPoints/>
 <MakeTheRightChoice/>
 <Services/> 
 <Testimonials/> 
 <FrequentlyAskedQuestions/></LayoutWrapper>
  </>

  );
}
