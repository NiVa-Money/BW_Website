import TestimonialCarousel from "../components/TestimonialCarousel";
import { testimonials } from "../data/data";
  

const TestimonialSection = () => {
    return <TestimonialCarousel testimonials={testimonials} speed={5000} />
}

export default TestimonialSection;