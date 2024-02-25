import ImageSlider from "@/components/slider/imageSlider"
import { SliderData } from '../../utils/imageData/projectsImage.js';

const portfolio = () => {
  return (
    <ImageSlider slides={SliderData} />
  )
}
export default portfolio