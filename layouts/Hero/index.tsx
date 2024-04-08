import { ButtonWrapper, Container, HeadingTextWrapper, HeroReviewWrapper, Overlay } from "./styles"
import Image from "next/image"
import Link from "next/link"
import HeroImage from '../../public/hero_image.jpg'

const hero:React.FC = () => {
  return (
<Container>
 <div className="container-fluid">
   <div className="row">
     <div className="col-lg-6">
       <HeadingTextWrapper>
         <span> We Design Websites Here</span>
         <p>
           EasyWeb is one of the best website design and web development
           companies in Abuja, our goal is to help businesses grow online
           and gain customers easily. Every web designer at our company
           rigorous assessment before joining to ensure our customers get
           the best value.
         </p>
       </HeadingTextWrapper>
       <ButtonWrapper>
         <a  target="_blank"
        rel="noopener noreferrer" href="https://wa.me/+23408128795195">
           <span>Get A Free Quote</span>{' '}
         </a>
         <Link href={'https://www.fiverr.com/pe/N9w3qa'}>Hire Us On Fiverr</Link>
       </ButtonWrapper>
       <HeroReviewWrapper>
         <span>
           <i className="bi bi-star-fill"></i>
           <i className="bi bi-star-fill"></i>
           <i className="bi bi-star-fill"></i>
           <i className="bi bi-star-fill"></i>
           <i className="bi bi-star-fill"></i>
         </span>
         <span>Google Reviews</span>
       </HeroReviewWrapper>
     </div>
   </div>
 </div>
 <Image src={HeroImage} width={'30000'} height={'30000'} alt=' ' />
 <Overlay />
</Container>
  )
}

export default hero