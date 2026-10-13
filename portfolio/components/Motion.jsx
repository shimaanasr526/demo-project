'use client';
import { motion, MotionConfig } from 'framer-motion';
export function MotionProvider({children}) { return <MotionConfig reducedMotion="user">{children}</MotionConfig>; }
export function Reveal({children, className='', delay=0}) { return <motion.div className={className} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.1}} transition={{duration:0.6,delay}}>{children}</motion.div>; }
export function SectionTitle({eyebrow,title,description}) { return <Reveal className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{description && <p className="section-description">{description}</p>}</Reveal>; }
