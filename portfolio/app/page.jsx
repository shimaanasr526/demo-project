import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import ImpactMetrics from '../components/ImpactMetrics';
import Work from '../components/Work';
import Services from '../components/Services';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import {MotionProvider} from '../components/Motion';
export default function Page(){return <MotionProvider><a className="skip-link" href="#main">Skip to content</a><Navbar/><main id="main"><Hero/><About/><ImpactMetrics/><Work/><Services/><Process/><Testimonials/><Contact/></main><Footer/></MotionProvider>}
