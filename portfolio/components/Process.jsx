'use client';
import {useState} from 'react';
import {motion} from 'framer-motion';
import {ArrowUpRight} from 'lucide-react';
import {steps} from '../lib/content';
import {SectionTitle} from './Motion';
export default function Process(){const [active,setActive]=useState(0);return <section id="process" className="section container"><SectionTitle eyebrow="HOW I WORK" title={<>A clear process.<br/><em>Room for possibility.</em></>}/><div className="process-grid">{steps.map(([title,description],i)=><button key={title} className={'process-step '+(active===i?'selected':'')} aria-pressed={active===i} onClick={()=>setActive(i)}><div className="process-top"><span>0{i+1}</span><ArrowUpRight size={22}/></div><h3>{title}</h3><p>{description}</p>{active===i&&<motion.div layoutId="process-indicator" className="process-indicator"/>}</button>)}</div><p className="process-foot">Not a straight line. A thoughtful cycle — with your goals at the center.</p></section>}
