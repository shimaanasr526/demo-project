'use client';
import {useState} from 'react';
import {AnimatePresence,motion} from 'framer-motion';
import {ArrowUpRight,Plus,Minus} from 'lucide-react';
import {services} from '../lib/content';
import {SectionTitle,Reveal} from './Motion';
export default function Services(){const [open,setOpen]=useState(0);return <section id="services" className="section services-section"><div className="container services-grid"><div><SectionTitle eyebrow="WHAT I DO" title={<>The right words.<br/><em>The bigger picture.</em></>} description="From the first insight to the final line — I help brands find what to say, how to say it, and why it matters."/><a className="text-link" href="#contact">Find your next direction <ArrowUpRight size={18}/></a></div><div>{services.map(([title,description],i)=><Reveal key={title} delay={i*.04} className={'service-row '+(open===i?'is-open':'')}><h3><button aria-expanded={open===i} aria-controls={'service-'+i} onClick={()=>setOpen(open===i?null:i)}><span className="service-number">0{i+1}</span><span>{title}</span>{open===i?<Minus size={20}/>:<Plus size={20}/>}</button></h3><AnimatePresence initial={false}>{open===i&&<motion.div id={'service-'+i} initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} className="service-answer"><p>{description}</p></motion.div>}</AnimatePresence></Reveal>)}</div></div></section>}
