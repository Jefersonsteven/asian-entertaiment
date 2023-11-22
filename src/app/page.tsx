import SliderTrailerBanner from "./ui/home/SliderBanner";
import Slider from "./ui/home/Slider";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {

  return (
   <main className="flex flex-col gap-8 lg:items-end lg:pr-8">
     <SliderTrailerBanner />
     <Slider title="Top 10" limit={10}/>
     <Slider next={1} title="Proximamente" limit={30}/>
     <Slider title="Recientes" limit={15}/>
   </main>
  )
}