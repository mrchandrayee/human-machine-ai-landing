import { useState } from 'react';
import { ArrowUpRight, ChevronDown, Menu, X, Sparkles, ShieldCheck, Workflow, BrainCircuit, Gauge, ArrowRight, Play, Zap, Globe2, Users, Layers3, Check } from 'lucide-react';

const features=[
 {icon:BrainCircuit,title:'Strategic user generation',text:'From generation to insight, turn human intent into intelligent systems that create meaningful outcomes.'},
 {icon:Workflow,title:'Positioning that connects',text:'We align your product’s unique value with real-world needs, making every interaction purposeful.'},
 {icon:Sparkles,title:'Experiences built for users',text:'Build human-centered experiences where technology feels intuitive, useful, and empowering.'},
 {icon:Gauge,title:'Decisions driven by insight',text:'Turn complex information into clear signals and confident decisions with AI-powered intelligence.'}
];
const solutions=[
 {num:'01',title:'Human + AI collaboration',desc:'Give teams intelligent copilots that amplify expertise, remove repetitive work, and keep people in control.',tag:'COLLABORATION'},
 {num:'02',title:'Connected experiences',desc:'Bring tools, data, and workflows together in one seamless environment designed around people.',tag:'ORCHESTRATION'},
 {num:'03',title:'Responsible intelligence',desc:'Build with transparency, privacy, and human oversight at every meaningful decision point.',tag:'TRUST & SAFETY'}
];
function App(){
 const [menu,setMenu]=useState(false); const [active,setActive]=useState('Home'); const [email,setEmail]=useState(''); const [sent,setSent]=useState(false);
 const go=(id:string)=>{setActive(id);setMenu(false);document.getElementById(id.toLowerCase().replaceAll(' ','-'))?.scrollIntoView({behavior:'smooth'});};
 return <div className="site">
  <div className="announcement"><span>NEW</span> Introducing a more human way to work with AI <a href="#platform">Explore the platform <ArrowUpRight size={12}/></a></div>
  <header className="header">
   <a className="logo" href="#home" onClick={()=>setActive('Home')}><span className="logo-symbol"><i/></span><span>humanity<span className="logo-ai">.ai</span></span></a>
   <nav className={menu?'nav open':'nav'}>
    {['Home','Product','Experiences','Ecosystem'].map(x=><button key={x} className={active===x?'nav-active':''} onClick={()=>go(x)}>{x}{x!=='Home'&&<ChevronDown size={13}/>}</button>)}
   </nav>
   <div className="header-actions"><a className="text-nav" href="#resources">Early access</a><a className="text-nav" href="#contact">Contact sales</a><a className="login" href="#contact">Log in</a><a className="nav-cta" href="#contact">Get started <ArrowUpRight size={14}/></a></div>
   <button className="mobile-menu" onClick={()=>setMenu(!menu)} aria-label="Toggle navigation">{menu?<X/>:<Menu/>}</button>
  </header>
  <main>
   <section className="hero" id="home">
    <div className="hero-grid"></div><div className="corner corner-left"></div><div className="corner corner-right"></div>
    <div className="hero-copy"><div className="eyebrow"><span className="eyebrow-line"></span> THE HUMAN-CENTERED AI PLATFORM</div>
     <h1>Next-gen of <em>human-machine</em><br/>interaction starts here<span className="period">.</span></h1>
     <p>Build, operate, and collaborate with AI. Empower people to do their best work, together with intelligent systems that understand what matters.</p>
     <div className="hero-buttons"><a className="button-primary" href="#contact">Get early access <ArrowUpRight size={16}/></a><a className="button-secondary" href="#platform"><Play size={13} fill="currentColor"/> Learn more</a></div>
     <div className="hero-note"><span className="note-dot"></span> Designed for people. Powered by intelligence.</div>
    </div>
    <div className="hero-art" aria-label="Human and robotic hands reaching toward a glowing orb">
     <div className="art-orbit orbit-one"></div><div className="art-orbit orbit-two"></div><div className="art-cross cross-one">+</div><div className="art-cross cross-two">+</div>
     <div className="human-arm"><div className="human-palm"></div><div className="human-finger f1"></div><div className="human-finger f2"></div><div className="human-finger f3"></div><div className="human-thumb"></div></div>
     <div className="robot-arm"><div className="robot-upper"></div><div className="robot-joint"></div><div className="robot-forearm"></div><div className="robot-wrist"></div><div className="robot-hand"><i/><b/><em/></div></div>
     <div className="core-orb"><div></div></div><span className="art-spark spark-a"></span><span className="art-spark spark-b"></span><span className="art-caption">HUMAN × MACHINE<br/><b>ONE SHARED FUTURE</b></span>
    </div>
   </section>
   <section className="trusted" id="ecosystem"><div className="trusted-label">TRUSTED BY<br/>INNOVATORS AT</div><div className="brand-word word-cohere"><span>◈</span> cohere</div><div className="brand-word word-eleven">▥ ElevenLabs</div><div className="brand-word word-grub">GRUBHUB</div><div className="brand-word word-hint">◕ hint</div><div className="brand-word word-ms"><span className="ms-grid"><i/><i/><i/><i/></span> Microsoft</div></section>
   <section className="features section-tint" id="product"><div className="section-inner"><div className="section-kicker">BUILT FOR HUMAN PROGRESS</div><h2>AI builds faster. Humans decide better<span className="period">.</span></h2><p className="section-intro">Technology should make people more capable, not more complicated. We bring intelligence and human judgment into one connected experience.</p>
    <div className="feature-grid">{features.map((f,i)=><article className="feature-card" key={f.title}><div className="feature-icon">{i===0?<ShieldCheck size={19}/>:i===1?<Workflow size={19}/>:i===2?<Users size={19}/>:<Gauge size={19}/>}</div><h3>{f.title}</h3><p>{f.text}</p><a href="#platform" aria-label={`Explore ${f.title}`}><ArrowUpRight size={16}/></a></article>)}</div>
   </div></section>
   <section className="platform" id="platform"><div className="platform-copy"><div className="section-kicker">ONE CONNECTED PLATFORM</div><h2>Make intelligence work for everyone<span className="period">.</span></h2><p>Move beyond isolated AI tools. Connect your people, knowledge, and workflows in a platform that makes every interaction more useful.</p><a className="button-primary" href="#contact">Explore the platform <ArrowRight size={15}/></a></div><div className="platform-visual"><div className="visual-glow"></div><div className="ui-window"><div className="window-top"><span></span><span></span><span></span><b>humanity workspace</b></div><div className="window-body"><aside><div className="mini-logo"></div><i></i><i></i><i></i><i></i></aside><div className="window-content"><small>YOUR INTELLIGENCE HUB</small><h3>Good ideas, meet great execution.</h3><div className="mini-cards"><div><Sparkles/><b>AI assistant</b><small>Ready to collaborate</small></div><div><Layers3/><b>Connected work</b><small>12 workflows active</small></div></div><div className="mini-chat"><span className="chat-avatar">H</span><div><b>Humanity AI</b><p>I've brought your project context together. What would you like to explore?</p></div></div></div></div></div><div className="floating-chip chip-one"><span className="chip-check"><Check size={12}/></span> Human-approved</div><div className="floating-chip chip-two"><Zap size={14}/> AI-assisted workflow</div></div></section>
   <section className="experiences section-tint" id="experiences"><div className="section-inner"><div className="section-kicker">DESIGNED AROUND PEOPLE</div><h2>One platform. Many possibilities<span className="period">.</span></h2><div className="solution-grid">{solutions.map(s=><article className="solution-card" key={s.num}><div className="solution-top"><span>{s.num}</span><ArrowUpRight size={18}/></div><div className="solution-tag">{s.tag}</div><h3>{s.title}</h3><p>{s.desc}</p></article>)}</div></div></section>
   <section className="cta" id="contact"><div className="cta-orb"></div><div className="section-kicker">START SOMETHING HUMAN</div><h2>Let's build a better way<br/>to work with AI<span className="period">.</span></h2><p>Be part of the next generation of human-machine interaction.</p><form className="signup" onSubmit={e=>{e.preventDefault();if(email.includes('@'))setSent(true);}}><input type="email" placeholder="Enter your work email" value={email} onChange={e=>setEmail(e.target.value)} required/><button>{sent?'You’re on the list':<>Get early access <ArrowUpRight size={15}/></>}</button></form><small className="form-note">{sent?'Thanks — we’ll be in touch soon.':'No spam. Just thoughtful updates.'}</small></section>
  </main>
  <footer className="footer" id="resources"><div className="footer-top"><a className="logo" href="#home"><span className="logo-symbol"><i/></span><span>humanity<span className="logo-ai">.ai</span></span></a><p>Human potential, amplified by intelligence.</p><div className="footer-links"><a href="#product">Product</a><a href="#experiences">Experiences</a><a href="#ecosystem">Ecosystem</a><a href="#contact">Contact</a></div></div><div className="footer-bottom"><span>© 2026 Humanity AI. All rights reserved.</span><span>Privacy · Terms · Accessibility</span><span>Made for humans <b>✳</b></span></div></footer>
 </div>
}
export default App;