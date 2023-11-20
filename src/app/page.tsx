import SliderTrailerBanner from "./ui/home/SliderBanner";
import SliderTop10 from "./ui/home/Slider";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {

  return (
   <main>
     <SliderTrailerBanner />
     <SliderTop10 />
   </main>
  )
}