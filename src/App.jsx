import { useState, useEffect, useRef } from "react";

// ─── Hooks ────────────────────────────────────────────────────────────────────
function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function useWindowWidth() {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  useEffect(() => {
    const h = () => setW(window.innerWidth);
    window.addEventListener("resize", h, { passive: true });
    return () => window.removeEventListener("resize", h);
  }, []);
  return w;
}

// ─── Icons ────────────────────────────────────────
const SunIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
  </svg>
);

const MoonIcon = ({ size = 20, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const icons = {
  arrow: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
  check: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  x: (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  ),
  store: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l1-5h16l1 5"/><path d="M3 9a2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0"/><path d="M5 9v11h14V9"/>
    </svg>
  ),
  users: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  billing: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>
    </svg>
  ),
  zap: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  chart: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>
    </svg>
  ),
  message: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/>
    </svg>
  ),
  refresh: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.13-3.36L23 10M1 14l5.36 4.36A9 9 0 0 0 20.49 15"/>
    </svg>
  ),
  truck: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>
  ),
  mail: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,7 12,13 2,7"/>
    </svg>
  ),
  globe: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  shield: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  lock: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  ),
  server: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
    </svg>
  ),
  key: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>
    </svg>
  ),
  clipboard: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/>
    </svg>
  ),
};

// ─── Tablet Storefront (Debby collections layout) ────────────────────────────
function TabletStorefrontUI({ scale = 1 }) {
  const s = scale;
  const products = [
    { name: "Silk Blazer", price: "$320", badge: "NEW", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&q=80&fit=crop" },
    { name: "Leather Tote", price: "$185", badge: null, img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=200&q=80&fit=crop" },
    { name: "Cloud Sneaker", price: "$210", badge: "HOT", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&q=80&fit=crop" },
    { name: "Linen Dress", price: "$165", badge: null, img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=200&q=80&fit=crop" },
    { name: "Merino Scarf", price: "$95", badge: "SALE", img: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=200&q=80&fit=crop" },
    { name: "Canvas Jacket", price: "$275", badge: null, img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=200&q=80&fit=crop" },
    { name: "Denim Shorts", price: "$120", badge: null, img: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=200&q=80&fit=crop" },
    { name: "Wool Cardigan", price: "$245", badge: "NEW", img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=200&q=80&fit=crop" },
  ];
  return (
    <div style={{ width:"100%", height:"100%", background:"#FAFAFA", fontFamily:"'DM Sans',sans-serif", overflow:"hidden", display:"flex", flexDirection:"column" }}>
      {/* Store Header */}
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:`${7*s}px ${12*s}px`, background:"#fff", borderBottom:"1px solid #F0F0F0", flexShrink:0 }}>
        <span style={{ fontWeight:900, color:"#0D1117", fontSize:`${10*s}px`, letterSpacing:"0.14em" }}>ATELIER</span>
        <div style={{ display:"flex", gap:`${8*s}px`, alignItems:"center" }}>
          {["Shop","Collections","About"].map(l => <span key={l} style={{ color:"#8B949E", fontSize:`${6.5*s}px`, fontWeight:500 }}>{l}</span>)}
          <div style={{ position:"relative" }}>
            <div style={{ width:`${14*s}px`, height:`${14*s}px`, borderRadius:"50%", background:"#0D1117", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <span style={{ fontSize:`${6*s}px`, color:"#fff" }}>🛒</span>
            </div>
            <div style={{ position:"absolute", top:`${-2*s}px`, right:`${-2*s}px`, width:`${6*s}px`, height:`${6*s}px`, borderRadius:"50%", background:"#2563EB", display:"flex", alignItems:"center", justifyContent:"center" }}>
              <span style={{ color:"#fff", fontSize:`${3.5*s}px`, fontWeight:800 }}>3</span>
            </div>
          </div>
        </div>
      </div>
      {/* Collection Banner — real hero image */}
      <div style={{ margin:`${5*s}px ${10*s}px`, borderRadius:`${7*s}px`, overflow:"hidden", position:"relative", height:`${75*s}px`, flexShrink:0 }}>
        <img src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&q=80&fit=crop" alt="" style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} onError={e => { e.target.style.display="none"; e.target.parentElement.style.background="linear-gradient(135deg,#1a1a2e,#16213e,#0f3460)"; }} />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to right,rgba(0,0,0,0.55),rgba(0,0,0,0.1))", display:"flex", flexDirection:"column", justifyContent:"center", padding:`${8*s}px ${12*s}px` }}>
          <span style={{ color:"rgba(255,255,255,0.7)", fontSize:`${5*s}px`, fontWeight:600, letterSpacing:"0.12em", textTransform:"uppercase" }}>Spring 2026</span>
          <span style={{ color:"#fff", fontSize:`${9.5*s}px`, fontWeight:800, letterSpacing:"-0.02em", marginTop:`${1*s}px` }}>New Collection</span>
          <div style={{ display:"inline-block", marginTop:`${3*s}px`, background:"#fff", color:"#0D1117", padding:`${2*s}px ${7*s}px`, borderRadius:`${3*s}px`, fontSize:`${5*s}px`, fontWeight:700, width:"fit-content" }}>Shop Now →</div>
        </div>
      </div>
      {/* Featured Product Grid — real product images */}
      <div style={{ padding:`${3*s}px ${10*s}px`, flex:1, minHeight:0, overflow:"auto" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:`${4*s}px` }}>
          <span style={{ fontWeight:700, color:"#0D1117", fontSize:`${7.5*s}px`, letterSpacing:"-0.01em" }}>Featured</span>
          <span style={{ color:"#8B949E", fontSize:`${5.5*s}px`, fontWeight:500 }}>View all →</span>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:`${3.5*s}px` }}>
          {products.map((p, i) => (
            <div key={i} style={{ background:"#fff", borderRadius:`${5*s}px`, overflow:"hidden", border:"1px solid #F0F0F0", boxShadow:`0 ${1*s}px ${3*s}px rgba(0,0,0,0.04)` }}>
              <div style={{ height:`${26*s}px`, background: i%3===0 ? "linear-gradient(135deg,#E8E0F0,#F0F0F0)" : i%3===1 ? "linear-gradient(135deg,#E0ECF0,#F0F0F0)" : "#F0F0F0", position:"relative", overflow:"hidden" }}>
                <img src={p.img} alt={p.name} style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} onError={e => { e.target.style.display="none"; }} />
                {p.badge && <div style={{ position:"absolute", top:`${2*s}px`, left:`${2*s}px`, background: p.badge==="SALE"?"#EF4444":p.badge==="HOT"?"#F59E0B":"#0D1117", color:"#fff", fontSize:`${3.5*s}px`, fontWeight:700, padding:`${0.8*s}px ${2.5*s}px`, borderRadius:`${2*s}px`, letterSpacing:"0.04em" }}>{p.badge}</div>}
              </div>
              <div style={{ padding:`${2.5*s}px ${3.5*s}px ${3*s}px` }}>
                <div style={{ color:"#0D1117", fontWeight:600, fontSize:`${5.2*s}px`, whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis", marginBottom:`${0.5*s}px` }}>{p.name}</div>
                <div style={{ color:"#0D1117", fontWeight:800, fontSize:`${6*s}px` }}>{p.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Powered by Debby */}
      <div style={{ padding:`${2.5*s}px`, textAlign:"center", borderTop:"1px solid #F0F0F0", flexShrink:0, background:"#fff" }}>
        <span style={{ fontSize:`${4*s}px`, color:"#C0C0C0", fontWeight:500 }}>Powered by </span>
        <span style={{ fontSize:`${4*s}px`, color:"#2563EB", fontWeight:800, letterSpacing:"0.06em" }}>DEBBY</span>
      </div>
    </div>
  );
}

// ─── Phone Storefront (Debby collections, premium app look) ──────────────────
function PhoneStorefrontUI({ scale = 1 }) {
  const s = scale;

  const products = [
    {
      name: "Silk Blazer",
      price: "$320",
      tag: "NEW",
      img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&q=85&fit=crop",
      bg: "#F5F2EE",
    },
    {
      name: "Leather Tote",
      price: "$185",
      tag: "BESTSELLER",
      img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300&q=85&fit=crop",
      bg: "#EEF2F5",
    },
    {
      name: "Cloud Sneaker",
      price: "$210",
      tag: null,
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=85&fit=crop",
      bg: "#F0F4F8",
    },
    {
      name: "Merino Watch",
      price: "$420",
      tag: "LIMITED",
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&q=85&fit=crop",
      bg: "#F0EEF2",
    },
  ];

  return (
    <div style={{
      width: "100%", height: "100%",
      background: "#FAFAFA",
      fontFamily: "'DM Sans', sans-serif",
      overflow: "hidden",
      display: "flex", flexDirection: "column",
    }}>

      {/* ── Status bar — sits beneath the Dynamic Island */}
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: `${22*s}px ${12*s}px ${4*s}px`,
        background: "#fff", flexShrink: 0,
      }}>
        <span style={{ fontSize: `${7*s}px`, fontWeight: 700, color: "#0D1117", letterSpacing: "0.01em" }}>9:41</span>
        <div style={{ display: "flex", gap: `${4*s}px`, alignItems: "center" }}>
          {[4, 6.5, 9].map((ht, i) => (
            <div key={i} style={{
              width: `${2.5*s}px`, height: `${ht*s}px`,
              borderRadius: `${1*s}px`,
              background: i < 2 ? "#0D1117" : "#D0D5DD",
            }} />
          ))}
          <svg width={`${9*s}`} height={`${7*s}`} viewBox="0 0 18 14" fill="none">
            <path d="M1 5C4.866 1.686 13.134 1.686 17 5" stroke="#0D1117" strokeWidth="1.8" strokeLinecap="round"/>
            <path d="M4 8.5C6.239 6.5 11.761 6.5 14 8.5" stroke="#0D1117" strokeWidth="1.8" strokeLinecap="round"/>
            <circle cx="9" cy="12" r="1.5" fill="#0D1117"/>
          </svg>
          <div style={{ display:"flex", alignItems:"center", gap:`${1.5*s}px` }}>
            <div style={{ position:"relative", width:`${15*s}px`, height:`${7.5*s}px`, border:`${0.8*s}px solid rgba(0,0,0,0.35)`, borderRadius:`${2*s}px`, padding:`${1*s}px` }}>
              <div style={{ width:"75%", height:"100%", background:"#22C55E", borderRadius:`${1*s}px` }} />
              <div style={{ position:"absolute", right:`${-3*s}px`, top:"50%", transform:"translateY(-50%)", width:`${2*s}px`, height:`${4*s}px`, background:"rgba(0,0,0,0.35)", borderRadius:`${0}px ${1*s}px ${1*s}px 0` }} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Store nav bar */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: `${6*s}px ${10*s}px`,
        background: "#fff", borderBottom: "1px solid #F0F0F0", flexShrink: 0,
      }}>
        <span style={{ fontWeight: 900, color: "#0D1117", fontSize: `${10*s}px`, letterSpacing: "0.14em" }}>ATELIER</span>
        <div style={{ display: "flex", alignItems: "center", gap: `${8*s}px` }}>
          <svg width={`${12*s}`} height={`${12*s}`} viewBox="0 0 24 24" fill="none" stroke="#6E7681" strokeWidth="2" strokeLinecap="round">
            <circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/>
          </svg>
          <div style={{ position: "relative" }}>
            <svg width={`${13*s}`} height={`${13*s}`} viewBox="0 0 24 24" fill="none" stroke="#0D1117" strokeWidth="2" strokeLinecap="round">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            <div style={{
              position: "absolute", top: `${-3*s}px`, right: `${-3*s}px`,
              width: `${7*s}px`, height: `${7*s}px`, borderRadius: "50%",
              background: "#2563EB",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span style={{ color: "#fff", fontSize: `${4*s}px`, fontWeight: 800 }}>3</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Hero Banner — real image (ABOVE category pills) */}
      <div style={{
        margin: `${4*s}px ${6*s}px`,
        borderRadius: `${8*s}px`,
        overflow: "hidden",
        position: "relative",
        height: `${180*s}px`,
        flexShrink: 0,
      }}>
        <img
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400&q=80&fit=crop"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          onError={e => { e.target.style.display = "none"; e.target.parentElement.style.background = "linear-gradient(135deg,#1a1a2e,#16213e,#0f3460)"; }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.08) 65%)",
          display: "flex", flexDirection: "column", justifyContent: "flex-end",
          padding: `${8*s}px ${10*s}px`,
        }}>
          <span style={{
            color: "rgba(255,255,255,0.8)", fontSize: `${8*s}px`,
            fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
          }}>Spring 2026</span>
          <span style={{
            color: "#fff", fontSize: `${16*s}px`, fontWeight: 800,
            letterSpacing: "-0.02em", marginTop: `${1.5*s}px`, lineHeight: 1.05,
          }}>New Collection</span>
          <div style={{
            display: "inline-block", marginTop: `${5*s}px`,
            background: "#fff", color: "#0D1117",
            padding: `${4*s}px ${12*s}px`, borderRadius: `${5*s}px`,
            fontSize: `${7.5*s}px`, fontWeight: 800, width: "fit-content",
          }}>Shop Now →</div>
        </div>
      </div>

      {/* ── Category pills */}
      <div style={{
        display: "flex", gap: `${5*s}px`, padding: `${5*s}px ${10*s}px`,
        background: "#fff", borderBottom: "1px solid #F4F4F4",
        flexShrink: 0, overflowX: "hidden",
      }}>
        {["All","Blazers","Bags","Shoes","Watches"].map((cat, i) => (
          <div key={cat} style={{
            padding: `${2.5*s}px ${7*s}px`,
            borderRadius: `${20*s}px`,
            background: i === 0 ? "#0D1117" : "#F4F4F5",
            color: i === 0 ? "#fff" : "#57606A",
            fontSize: `${6.5*s}px`, fontWeight: i === 0 ? 700 : 500,
            whiteSpace: "nowrap", flexShrink: 0,
          }}>{cat}</div>
        ))}
      </div>

      {/* ── Featured header */}
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: `${5*s}px ${10*s}px ${4*s}px`,
        background: "#FAFAFA", flexShrink: 0,
      }}>
        <span style={{ fontWeight: 800, color: "#0D1117", fontSize: `${8.5*s}px`, letterSpacing: "-0.02em" }}>Featured</span>
        <span style={{ color: "#8B949E", fontSize: `${6.5*s}px`, fontWeight: 500 }}>See all →</span>
      </div>

      {/* ── 2-col product grid */}
      <div style={{ padding: `0 ${8*s}px`, flex: 1, overflow: "hidden" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: `${6*s}px` }}>
          {products.map((p, i) => (
            <div key={i} style={{
              background: "#fff",
              borderRadius: `${7*s}px`,
              overflow: "hidden",
              boxShadow: `0 ${1*s}px ${6*s}px rgba(0,0,0,0.06), 0 0 0 ${0.5*s}px rgba(0,0,0,0.03)`,
            }}>
              <div style={{ position: "relative", background: p.bg, height: `${52*s}px`, overflow: "hidden" }}>
                <img
                  src={p.img}
                  alt={p.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  onError={e => { e.target.style.display = "none"; }}
                />
                <div style={{
                  position: "absolute", top: `${4*s}px`, right: `${4*s}px`,
                  width: `${12*s}px`, height: `${12*s}px`,
                  background: "rgba(255,255,255,0.9)",
                  borderRadius: "50%", backdropFilter: "blur(4px)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg width={`${6.5*s}`} height={`${6.5*s}`} viewBox="0 0 24 24" fill="none" stroke="#8B949E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </div>
                {p.tag && (
                  <div style={{
                    position: "absolute", top: `${4*s}px`, left: `${4*s}px`,
                    background: p.tag === "LIMITED" ? "#1a1a1a" : p.tag === "BESTSELLER" ? "#2563EB" : "#22C55E",
                    color: "#fff", fontSize: `${4.5*s}px`, fontWeight: 700,
                    padding: `${1.5*s}px ${4*s}px`, borderRadius: `${3*s}px`,
                    letterSpacing: "0.04em",
                  }}>{p.tag}</div>
                )}
              </div>
              <div style={{ padding: `${4*s}px ${5*s}px ${5*s}px` }}>
                <div style={{
                  color: "#0D1117", fontWeight: 600,
                  fontSize: `${6.5*s}px`, marginBottom: `${1.5*s}px`,
                  lineHeight: 1.3, letterSpacing: "-0.01em",
                  overflow: "hidden", display: "-webkit-box",
                  WebkitLineClamp: 1, WebkitBoxOrient: "vertical",
                }}>{p.name}</div>
                <div style={{ display: "flex", alignItems: "center", gap: `${1.5*s}px`, marginBottom: `${3*s}px` }}>
                  {[1,2,3,4,5].map(n => (
                    <svg key={n} width={`${5*s}`} height={`${5*s}`} viewBox="0 0 24 24" fill={n <= 4 ? "#FBBF24" : "none"} stroke="#FBBF24" strokeWidth="2">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ))}
                  <span style={{ color: "#8B949E", fontSize: `${4.5*s}px`, fontWeight: 500 }}>4.8</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ color: "#0D1117", fontWeight: 800, fontSize: `${8*s}px`, letterSpacing: "-0.02em" }}>{p.price}</span>
                  <div style={{
                    width: `${16*s}px`, height: `${16*s}px`,
                    background: "#0D1117",
                    borderRadius: `${4.5*s}px`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <svg width={`${8*s}`} height={`${8*s}`} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                      <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Powered by Debby */}
      <div style={{ padding: `${3*s}px`, textAlign: "center", flexShrink: 0, marginTop: "auto" }}>
        <span style={{ fontSize: `${4*s}px`, color: "#C0C0C0", fontWeight: 500 }}>Powered by </span>
        <span style={{ fontSize: `${4*s}px`, color: "#2563EB", fontWeight: 800, letterSpacing: "0.06em" }}>DEBBY</span>
      </div>
    </div>
  );
}

// ─── Device Frames ────────────────────────────────────────────────────────────
function TabletFrame() {
  return (
    <div style={{
      width: "360px", height: "254px",
      background: "#161C28",
      borderRadius: "16px", padding: "8px",
      boxShadow: "0 24px 60px rgba(0,0,0,0.52), 0 0 0 1px rgba(255,255,255,0.07), inset 0 1px 0 rgba(255,255,255,0.09)",
      flexShrink: 0, position: "relative",
    }}>
      <div style={{ position: "absolute", top: "3.5px", left: "50%", transform: "translateX(-50%)", width: "3.5px", height: "3.5px", borderRadius: "50%", background: "#252D3F" }} />
      <div style={{ width: "100%", height: "100%", borderRadius: "9px", overflow: "hidden" }}>
        <TabletStorefrontUI scale={0.95} />
      </div>
    </div>
  );
}

function PhoneFrame({ small = false }) {
  // Ultra-thin bezel: only 3px of chassis visible around the screen
  const bezel = small ? 3 : 3;
  const w     = small ? 140 : 156;
  const h     = small ? 288 : 338;
  const br    = small ? 28 : 32;   // outer corner radius
  const sc    = small ? 0.52 : 0.58;

  // Dynamic Island dimensions (sits inside the screen area)
  const diW   = small ? 36 : 40;
  const diH   = small ? 10 : 11;

  return (
    <div style={{
      width: `${w}px`,
      height: `${h}px`,
      background: "#080A0E",   // near-black chassis
      borderRadius: `${br}px`,
      padding: `${bezel}px`,
      // Premium layered shadow — deep drop + subtle rim light
      boxShadow: [
        "0 36px 80px rgba(0,0,0,0.70)",
        "0 12px 28px rgba(0,0,0,0.45)",
        "0 0 0 0.5px rgba(255,255,255,0.14)",   // outer rim highlight
        "inset 0 0 0 0.5px rgba(255,255,255,0.06)", // inner rim
      ].join(", "),
      position: "relative",
      flexShrink: 0,
    }}>

      {/* Side buttons — volume up/down (left) */}
      <div style={{ position:"absolute", left:"-2px", top:"68px",  width:"2px", height:"20px", background:"#1C2030", borderRadius:"2px 0 0 2px" }} />
      <div style={{ position:"absolute", left:"-2px", top:"94px",  width:"2px", height:"20px", background:"#1C2030", borderRadius:"2px 0 0 2px" }} />
      {/* Mute/silent toggle */}
      <div style={{ position:"absolute", left:"-2px", top:"52px",  width:"2px", height:"12px", background:"#1C2030", borderRadius:"2px 0 0 2px" }} />
      {/* Power button (right) */}
      <div style={{ position:"absolute", right:"-2px", top:"74px", width:"2px", height:"30px", background:"#1C2030", borderRadius:"0 2px 2px 0" }} />

      {/* Screen — fills the bezel gap, with its own corner radius */}
      <div style={{
        width: "100%", height: "100%",
        borderRadius: `${br - bezel}px`,
        overflow: "hidden",
        position: "relative",
        background: "#FAFAFA",
      }}>
        {/* Storefront UI content */}
        <PhoneStorefrontUI scale={sc} />

        {/* ── Dynamic Island — rendered OVER the screen content ── */}
        <div style={{
          position: "absolute",
          top: small ? "7px" : "8px",
          left: "50%",
          transform: "translateX(-50%)",
          width: `${diW}px`,
          height: `${diH}px`,
          background: "#080A0E",           // matches chassis, true black cutout
          borderRadius: `${diH / 2}px`,    // pill shape
          zIndex: 50,
          // Subtle inner glow to sell the pill-shaped OLED cutout
          boxShadow: [
            "0 0 0 0.5px rgba(255,255,255,0.08)",
            "inset 0 0 4px rgba(0,0,0,0.9)",
          ].join(", "),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: `${diH * 0.55}px`,
        }}>
          {/* Camera dot */}
          <div style={{
            width: `${diH * 0.42}px`,
            height: `${diH * 0.42}px`,
            borderRadius: "50%",
            background: "#1a2a4a",           // deep tinted circle = camera lens
            boxShadow: "0 0 2px rgba(59,130,246,0.5), inset 0 0 1px rgba(255,255,255,0.1)",
          }} />
          {/* Face ID sensors — two tiny rects */}
          <div style={{
            width: `${diH * 0.12}px`,
            height: `${diH * 0.55}px`,
            borderRadius: "2px",
            background: "#1a2a4a",
            opacity: 0.7,
          }} />
        </div>
      </div>
    </div>
  );
}

// ─── Desktop Hero Device Scene (CSS-animated, GPU-accelerated) ────────────────
function DesktopDevices({ dark, large = false }) {
  const sceneHeight = large ? 400 : 370;
  const glowWidth = large ? 360 : 300;
  const glowHeight = large ? 230 : 200;
  // Scale up devices on md screens (non-large) for visual impact
  const tabletScale = large ? "scale(1.08) " : "scale(1.12) ";
  const phoneScale = large ? "scale(1.1) " : "scale(1.14) ";

  return (
    <div style={{ position: "relative", width: "100%", height: `${sceneHeight}px`, overflow: "visible" }}>
      {/* Ambient glow — pulses gently */}
      <div style={{
        position: "absolute", top: "38%", left: "46%",
        transform: "translate(-50%,-50%)",
        width: `${glowWidth}px`, height: `${glowHeight}px`,
        background: "radial-gradient(ellipse,rgba(37,99,235,0.22) 0%,rgba(124,58,237,0.08) 40%,transparent 70%)",
        filter: `blur(${large ? 34 : 28}px)`, pointerEvents: "none",
        animation: "heroGlow 6s ease-in-out infinite",
        willChange: "opacity, transform",
      }} />
      {/* Devices wrapper — centered with fixed gap */}
      <div style={{
        position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
        display: "flex", alignItems: "flex-start", gap: large ? "100px" : "60px",
      }}>
        {/* Tablet — left side */}
        <div style={{
          marginTop: large ? "28px" : "16px",
          animation: "floatA 7s ease-in-out infinite",
          willChange: "transform",
          zIndex: 1,
        }}>
          <div style={{
            transform: `${tabletScale}perspective(900px) rotateY(7deg) rotateX(2deg)`,
            transformOrigin: "left center",
          }}>
            <TabletFrame />
          </div>
        </div>
        {/* Phone — right side */}
        <div style={{
          marginTop: large ? "18px" : "6px",
          animation: "floatB 5.5s ease-in-out infinite 0.8s",
          willChange: "transform",
          zIndex: 2,
        }}>
          <div style={{
            transform: `${phoneScale}perspective(900px) rotateY(-5deg) rotateX(2deg)`,
            transformOrigin: "right center",
          }}>
            <PhoneFrame />
          </div>
        </div>
      </div>
      {/* Badge — floats independently */}
      <div style={{
        position: "absolute", bottom: large ? "8px" : "0px", left: "50%", transform: "translateX(-50%)",
        animation: "floatC 8s ease-in-out infinite 0.4s",
        willChange: "transform",
        zIndex: 10,
      }}>
        <div style={{
          background: dark ? "rgba(12,20,38,0.97)" : "rgba(255,255,255,0.97)",
          border: `1px solid ${dark ? "rgba(255,255,255,0.09)" : "rgba(0,0,0,0.07)"}`,
          borderRadius: "10px", padding: large ? "8px 14px" : "7px 13px",
          backdropFilter: "blur(20px)",
          boxShadow: "0 6px 24px rgba(0,0,0,0.16)",
          display: "flex", alignItems: "center", gap: "7px",
        }}>
          <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#22C55E", boxShadow: "0 0 6px #22C55E", animation: "pulse 2s ease-in-out infinite" }} />
          <span style={{ fontSize: "11.5px", fontWeight: 600, color: dark ? "#F0F6FC" : "#0D1117", whiteSpace: "nowrap" }}>
            $48,291 revenue today
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Mobile Device Scene (CSS-animated, GPU-accelerated) ──────────────────────
function MobileDevice({ dark }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "18px" }}>
      <div style={{
        position: "relative",
        animation: "floatB 6s ease-in-out infinite",
        willChange: "transform",
      }}>
        {/* Glow halo — pulses */}
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: "170px", height: "150px",
          background: "radial-gradient(ellipse,rgba(37,99,235,0.28) 0%,rgba(124,58,237,0.1) 40%,transparent 70%)",
          filter: "blur(24px)", pointerEvents: "none",
          animation: "heroGlow 5s ease-in-out infinite 1s",
        }} />
        <PhoneFrame small />
      </div>
      {/* Badge */}
      <div style={{
        animation: "floatC 7s ease-in-out infinite 0.6s",
        willChange: "transform",
      }}>
        <div style={{
          background: dark ? "rgba(12,20,38,0.97)" : "rgba(255,255,255,0.97)",
          border: `1px solid ${dark ? "rgba(255,255,255,0.09)" : "rgba(0,0,0,0.07)"}`,
          borderRadius: "10px", padding: "8px 16px",
          backdropFilter: "blur(18px)",
          boxShadow: "0 6px 22px rgba(0,0,0,0.14)",
          display: "flex", alignItems: "center", gap: "7px",
        }}>
          <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#22C55E", boxShadow: "0 0 6px #22C55E", animation: "pulse 2s ease-in-out infinite" }} />
          <span style={{ fontSize: "12px", fontWeight: 600, color: dark ? "#F0F6FC" : "#0D1117" }}>
            $48,291 revenue today
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Email Form ───────────────────────────────────────────────────────────────
function EmailForm({ dark, label = "Join the Waitlist", email, setEmail, status, setStatus, err, setErr }) {



  const valid = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  const submit = async () => {
    if (!valid(email)) {
      setErr("Enter a valid email address.");
      return;
    }
  
    setErr("");
    setStatus("loading");
  
    try {
      const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";
      const res = await fetch(`${BACKEND_URL}/waitlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Failed to send");
    }

    setStatus("success");
    setEmail("");
    } catch (error) {
    setErr("Something went wrong. Please try again.");
    setStatus("idle");
    }
  };

  if (status === "success") return (
    <div style={{
      display: "flex", alignItems: "center", gap: "11px",
      background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.22)",
      borderRadius: "11px", padding: "13px 17px",
    }}>
      <span style={{ color: "#22C55E", flexShrink: 0 }}>{icons.check}</span>
      <div>
        <div style={{ fontWeight: 700, color: "#22C55E", fontSize: "13.5px" }}>You're on the list.</div>
        <div style={{ color: dark ? "#8B949E" : "#6E7681", fontSize: "12px", marginTop: "2px" }}>We'll be in touch when Debby opens access.</div>
      </div>
    </div>
  );

  return (
    <div>
      <div style={{ display: "flex", gap: "7px", flexWrap: "wrap" }}>
        <input
          type="email" placeholder="your@company.com" value={email}
          onChange={e => { setEmail(e.target.value); setErr(""); }}
          onKeyDown={e => e.key === "Enter" && submit()}
          style={{
            flex: "1", minWidth: "190px",
            padding: "12px 16px",
            borderRadius: "10px", outline: "none",
            border: `1.5px solid ${err ? "rgba(239,68,68,0.5)" : dark ? "rgba(255,255,255,0.11)" : "rgba(0,0,0,0.1)"}`,
            background: dark ? "rgba(255,255,255,0.04)" : "#fff",
            color: dark ? "#F0F6FC" : "#0D1117",
            fontSize: "14px", fontFamily: "'DM Sans', sans-serif",
            boxShadow: dark ? "none" : "0 1px 4px rgba(0,0,0,0.04)",
          }}
        />
        <button onClick={submit} disabled={status === "loading"} style={{
          padding: "12px 22px",
          borderRadius: "10px", border: "none", cursor: "pointer",
          background: "linear-gradient(135deg,#1E3A8A,#2563EB)",
          color: "#fff", fontWeight: 700, fontSize: "14px",
          fontFamily: "'DM Sans', sans-serif",
          boxShadow: "0 4px 14px rgba(37,99,235,0.36)",
          opacity: status === "loading" ? 0.7 : 1,
          whiteSpace: "nowrap",
          transform: status === "loading" ? "scale(0.97)" : "scale(1)",
          transition: "opacity 0.2s, transform 0.1s",
        }}>
          {status === "loading"
            ? <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                <svg style={{ animation: "spin 0.9s linear infinite", width: "13px", height: "13px" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                </svg>
                Processing...
              </span>
            : label}
        </button>
      </div>
      {err && <p style={{ color: "#EF4444", fontSize: "12px", marginTop: "6px" }}>{err}</p>}
    </div>
  );
}

// ─── Reveal wrapper ───────────────────────────────────────────────────────────
function Reveal({ children, style = {}, delay = 0 }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(20px)",
      transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      ...style,
    }}>
      {children}
    </div>
  );
}

// ─── Eyebrow label ────────────────────────────────────────────────────────────
function Label({ text }) {
  return (
    <p style={{
      fontSize: "10px", fontWeight: 700, letterSpacing: "0.11em",
      color: "#2563EB", marginBottom: "12px", textTransform: "uppercase",
    }}>{text}</p>
  );
}

// ─── Section heading ──────────────────────────────────────────────────────────
function SectionH2({ children, isMobile }) {
  return (
    <h2 style={{
      fontFamily: "'Fraunces', serif", fontWeight: 700,
      fontSize: isMobile ? "22px" : "34px",
      lineHeight: 1.16, letterSpacing: "-0.022em", marginBottom: "12px",
    }}>{children}</h2>
  );
}

// ─── Feature Card ─────────────────────────────────────────────────────────────
function FeatureCard({ icon, title, items, dark, delay = 0 }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{
      padding: "22px",
      borderRadius: "13px",
      border: `1px solid ${dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)"}`,
      background: dark
        ? "linear-gradient(135deg,rgba(30,58,138,0.07) 0%,rgba(255,255,255,0.015) 100%)"
        : "linear-gradient(135deg,rgba(219,234,254,0.32) 0%,rgba(255,255,255,0.92) 100%)",
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(18px)",
      transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
    }}>
      <div style={{
        width: "38px", height: "38px", borderRadius: "10px",
        background: "linear-gradient(135deg,#1E3A8A,#2563EB)",
        display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: "13px", color: "#fff",
        boxShadow: "0 3px 9px rgba(37,99,235,0.26)",
      }}>
        {icon}
      </div>
      <h3 style={{ margin: "0 0 10px", fontWeight: 700, fontSize: "14.5px", color: dark ? "#F0F6FC" : "#0D1117", letterSpacing: "-0.01em" }}>{title}</h3>
      <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
        {items.map((item, i) => (
          <li key={i} style={{
            display: "flex", alignItems: "center", gap: "7px",
            color: dark ? "#8B949E" : "#57606A",
            fontSize: "12.5px", marginBottom: "5px", lineHeight: 1.45,
          }}>
            <span style={{ color: "#2563EB", flexShrink: 0 }}>{icons.check}</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Security pill ────────────────────────────────────────────────────────────
function SecPill({ icon, text, dark }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: "11px",
      padding: "12px 17px", borderRadius: "10px",
      border: `1px solid ${dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)"}`,
      background: dark ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.72)",
    }}>
      <span style={{ color: "#2563EB", flexShrink: 0 }}>{icon}</span>
      <span style={{ fontWeight: 600, fontSize: "13px", color: dark ? "#C9D1D9" : "#24292F" }}>{text}</span>
    </div>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [dark, setDark] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [err, setErr] = useState("");
  const waitlistProps = { email, setEmail, status, setStatus, err, setErr };
  const width = useWindowWidth();
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;
  const isDesktop = width >= 1024;

  useEffect(() => {
    const h = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const bg   = dark ? "#060B14" : "#F4F7FB";
  const text = dark ? "#F0F6FC" : "#0D1117";
  const muted = dark ? "#8B949E" : "#57606A";
  const border = dark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";
  const px = isMobile ? "20px" : isTablet ? "28px" : "44px";
  const fragmentedTools = [
    { name: "Shopify", logo: "https://cdn.simpleicons.org/shopify/95BF47", mode: "replaced" },
    { name: "Klaviyo", logo: "https://cdn.simpleicons.org/klaviyo/000000", mode: "replaced" },
    { name: "HubSpot", logo: "https://cdn.simpleicons.org/hubspot/FF7A59", mode: "replaced" },
    { name: "Zendesk", logo: "https://cdn.simpleicons.org/zendesk/03363D", mode: "replaced" },
    { name: "Google Analytics", logo: "https://cdn.simpleicons.org/googleanalytics/E37400", mode: "replaced" },
    { name: "Zapier", logo: "https://cdn.simpleicons.org/zapier/FF4A00", mode: "replaced" },
    { name: "QuickBooks", logo: "https://cdn.simpleicons.org/quickbooks/2CA01C", mode: "replaced" },
    { name: "Stripe", logo: "https://cdn.simpleicons.org/stripe/635BFF", mode: "rail" },
  ];
  const operationsEvents = [
    { icon: icons.store, text: "Order #4821 placed", detail: "Sneaker Drop x2", time: "Just now", accent: "#2563EB" },
    { icon: icons.billing, text: "Payment confirmed", detail: "$247.00 via Stripe", time: "12s ago", accent: "#059669" },
    { icon: icons.message, text: "Reminder sent", detail: "Abandoned cart follow-up", time: "45s ago", accent: "#D97706" },
    { icon: icons.refresh, text: "Cart recovered", detail: "$89.00 order restored", time: "1m ago", accent: "#4F46E5" },
    { icon: icons.truck, text: "Delivery update sent", detail: "Order #4819 out for delivery", time: "2m ago", accent: "#0891B2" },
    { icon: icons.mail, text: "Welcome flow triggered", detail: "New subscriber onboarded", time: "3m ago", accent: "#7C3AED" },
  ];
  const [opsStreamRef, opsStreamInView] = useInView(0.24);
  const [visibleOpsEvents, setVisibleOpsEvents] = useState(0);

  useEffect(() => {
    if (!opsStreamInView) return;
    setVisibleOpsEvents(0);
    const timer = setInterval(() => {
      setVisibleOpsEvents((count) => {
        if (count >= operationsEvents.length) {
          clearInterval(timer);
          return count;
        }
        return count + 1;
      });
    }, 520);
    return () => clearInterval(timer);
  }, [opsStreamInView]);

  return (
    <div style={{ background: bg, color: text, fontFamily: "'DM Sans', sans-serif", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;0,9..144,900&family=Orbitron:wght@700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.42} }
        @keyframes logoPing { 75%,100% { transform: scale(1.75); opacity: 0; } }
        @keyframes fadeUp { from{opacity:0;transform:translateY(26px)} to{opacity:1;transform:translateY(0)} }
        @keyframes gradientFlow { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        @keyframes floatA { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes floatB { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-7px)} }
        @keyframes floatC { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
        @keyframes shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
        @keyframes slideUp { from{opacity:0;transform:translateY(36px) scale(0.98)} to{opacity:1;transform:translateY(0) scale(1)} }
        @keyframes heroGlow { 0%,100%{opacity:0.4;transform:scale(1)} 50%{opacity:0.7;transform:scale(1.06)} }
        @keyframes badgePop { from{opacity:0;transform:translateY(12px) scale(0.92)} to{opacity:1;transform:translateY(0) scale(1)} }
        @keyframes countUp { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-thumb { background: rgba(37,99,235,0.32); border-radius: 3px; }
        input::placeholder { color: rgba(110,110,130,0.55) !important; }
        a { transition: opacity 0.2s; }
        a:hover { opacity: 0.72; }
        button { transition: opacity 0.2s, transform 0.12s; }
        button:not(:disabled):hover { opacity: 0.86; }
      `}</style>

      {/* ── NAV ──────────────────────────────────────────────────────────── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: `0 ${px}`,
        background: scrollY > 20
          ? dark ? "rgba(6,11,20,0.91)" : "rgba(244,247,251,0.91)"
          : "transparent",
        backdropFilter: scrollY > 20 ? "blur(22px)" : "none",
        borderBottom: `1px solid ${scrollY > 20 ? border : "transparent"}`,
        transition: "all 0.3s",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: isMobile ? "56px" : "62px",
      }}>
        {/* Logo */}
        <a href="/" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
          <div style={{ position: "relative", width: isMobile ? "32px" : "40px", height: isMobile ? "32px" : "40px" }}>
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom right,#3B82F6,#7C3AED)",
              borderRadius: isMobile ? "10px" : "12px",
              opacity: 0.2,
              animation: "logoPing 1s cubic-bezier(0,0,0.2,1) infinite",
            }} />
            <div style={{
              position: "relative",
              width: isMobile ? "32px" : "40px",
              height: isMobile ? "32px" : "40px",
              background: "linear-gradient(to bottom right,#3B82F6,#6366F1,#7C3AED)",
              borderRadius: isMobile ? "10px" : "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 10px 24px rgba(59,130,246,0.32)",
            }}>
              <span style={{ color: "#fff", fontWeight: 900, fontSize: isMobile ? "14px" : "18px", fontFamily: "'Orbitron', sans-serif" }}>D</span>
            </div>
          </div>
          <span
            style={{
              fontSize: isMobile ? "18px" : "24px",
              fontWeight: 900,
              letterSpacing: "0.15em",
              fontFamily: "'Orbitron', sans-serif",
              background: "linear-gradient(to right,#2563EB,#6366F1,#7C3AED)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.12))",
              lineHeight: 1,
            }}
          >
            DEBBY
          </span>
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: isMobile ? "8px" : "10px", flexShrink: 0 }}>
          <button
            onClick={() => setDark(d => !d)}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            title={dark ? "Switch to light mode" : "Switch to dark mode"}
            style={{
              width: "36px", height: "36px", minWidth: "36px", minHeight: "36px", borderRadius: "9px",
              border: dark ? "1px solid rgba(250,204,21,0.38)" : "1px solid rgba(79,70,229,0.34)",
              background: dark ? "rgba(250,204,21,0.12)" : "rgba(79,70,229,0.1)",
              color: dark ? "#FACC15" : "#4F46E5", cursor: "pointer",
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              boxShadow: dark ? "0 2px 8px rgba(250,204,21,0.18)" : "0 2px 8px rgba(79,70,229,0.16)",
              flexShrink: 0,
              transition: "all 0.2s",
            }}
          >
            {dark ? <SunIcon size={18} color="#FACC15" /> : <MoonIcon size={18} color="#4F46E5" />}
          </button>
          <a href="#waitlist" style={{
            padding: isMobile ? "7px 15px" : "8px 19px",
            borderRadius: "9px",
            background: "linear-gradient(135deg,#1E3A8A,#2563EB)",
            color: "#fff", fontWeight: 700, fontSize: isMobile ? "12.5px" : "13.5px",
            textDecoration: "none",
            boxShadow: "0 3px 10px rgba(37,99,235,0.3)",
            whiteSpace: "nowrap",
          }}>
            Join Waitlist
          </a>
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      {isDesktop ? (
<section style={{
  position: "relative",
  maxWidth: "1280px",
  margin: "0 auto",
  padding: "120px 52px 64px",
  overflow: "visible",
}}>
  {/* ── Multi-layer ambient background ── */}
  <div aria-hidden style={{
    position: "absolute", top: "-120px", left: "50%", transform: "translateX(-50%)",
    width: "900px", height: "700px",
    background: dark
      ? "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(37,99,235,0.12) 0%, rgba(124,58,237,0.06) 40%, transparent 70%)"
      : "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(37,99,235,0.08) 0%, rgba(124,58,237,0.04) 40%, transparent 70%)",
    filter: "blur(80px)", pointerEvents: "none",
    animation: "heroGlow 10s ease-in-out infinite",
  }} />
  <div aria-hidden style={{
    position: "absolute", top: "20%", left: "-8%",
    width: "380px", height: "380px",
    background: "radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 65%)",
    filter: "blur(60px)", pointerEvents: "none",
    animation: "heroGlow 8s ease-in-out infinite 3s",
  }} />
  <div aria-hidden style={{
    position: "absolute", top: "10%", right: "-5%",
    width: "340px", height: "340px",
    background: "radial-gradient(circle, rgba(34,197,94,0.05) 0%, transparent 65%)",
    filter: "blur(55px)", pointerEvents: "none",
    animation: "heroGlow 9s ease-in-out infinite 1.5s",
  }} />

  {/* ── Centered text content ── */}
  <div style={{
    position: "relative", zIndex: 2,
    textAlign: "center",
    maxWidth: "820px",
    margin: "0 auto",
  }}>
    {/* Badge */}
    <div style={{
      display: "inline-flex", alignItems: "center", gap: "8px",
      marginBottom: "32px",
      padding: "7px 16px 7px 10px",
      borderRadius: "999px",
      border: "1px solid rgba(37,99,235,0.24)",
      background: dark ? "rgba(37,99,235,0.1)" : "rgba(37,99,235,0.06)",
      backdropFilter: "blur(10px)",
      animation: "badgePop 0.6s ease forwards",
    }}>
      <div style={{
        width: "20px", height: "20px", borderRadius: "50%",
        background: "linear-gradient(135deg,#22C55E,#16A34A)",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 0 10px rgba(34,197,94,0.45)",
      }}>
        <span style={{ fontSize: "10px" }}>✦</span>
      </div>
      <span style={{ fontSize: "12px", fontWeight: 700, color: "#2563EB", letterSpacing: "0.06em" }}>
        EARLY ACCESS · 4,200+ BRANDS WAITING
      </span>
    </div>

    {/* H1 — massive centered headline */}
    <h1 style={{
      fontFamily: "'Fraunces', serif",
      fontWeight: 700,
      fontSize: "74px",
      lineHeight: 1.0,
      letterSpacing: "-0.045em",
      color: text,
      marginBottom: "24px",
    }}>
      <span style={{
        display: "block",
        animation: "slideUp 0.7s ease forwards",
        opacity: 0, animationDelay: "0.1s", animationFillMode: "forwards",
      }}>
        Your Store, CRM &
      </span>
      <span style={{
        display: "block",
        animation: "slideUp 0.7s ease forwards",
        opacity: 0, animationDelay: "0.25s", animationFillMode: "forwards",
      }}>
        Payments —{" "}
        <span style={{
          background: "linear-gradient(90deg,#2563EB,#7C3AED,#EC4899,#2563EB)",
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "gradientFlow 4s linear infinite",
        }}>
          All in One
        </span>
      </span>
    </h1>

    {/* Sub */}
    <p style={{
      fontSize: "17.5px", lineHeight: 1.75, color: muted,
      maxWidth: "600px", margin: "0 auto 32px",
      animation: "slideUp 0.7s ease forwards",
      opacity: 0, animationDelay: "0.45s", animationFillMode: "forwards",
    }}>
      Debby replaces your storefront builder, CRM, payment tools, and automation&nbsp;—
      with one elegant system. Launch in 60&nbsp;seconds. Scale to millions.
    </p>

    {/* Form — centered */}
    <div id="waitlist" style={{
      maxWidth: "520px", margin: "0 auto 16px",
      animation: "slideUp 0.7s ease forwards",
      opacity: 0, animationDelay: "0.6s", animationFillMode: "forwards",
    }}>
      <EmailForm dark={dark} label="Get Early Access →" {...waitlistProps} />
    </div>

    {/* Trust */}
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "center",
      gap: "16px", marginBottom: "0",
      animation: "slideUp 0.7s ease forwards",
      opacity: 0, animationDelay: "0.75s", animationFillMode: "forwards",
    }}>
      {[["No credit card","check"],["Free during beta",null],["Cancel anytime",null]].map(([t], i) => (
        <span key={t} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          {i === 0 && <span style={{ color: "#22C55E", flexShrink: 0 }}>{icons.check}</span>}
          {i > 0 && <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: muted, opacity: 0.4, marginRight: "2px" }} />}
          <span style={{ fontSize: "12.5px", color: muted }}>{t}</span>
        </span>
      ))}
    </div>
  </div>

  {/* ── Device showcase — flat on main bg ── */}
  <div style={{
    position: "relative", zIndex: 1,
    marginTop: "56px",
    animation: "slideUp 0.9s ease forwards",
    opacity: 0, animationDelay: "0.5s", animationFillMode: "forwards",
  }}>
    <DesktopDevices dark={dark} large />

    {/* Caption */}
    <p style={{
      textAlign: "center", fontSize: "11.5px",
      letterSpacing: "0.06em", textTransform: "uppercase",
      color: muted, marginTop: "12px",
      position: "relative", zIndex: 2,
    }}>
      This is what your store looks like on Debby
    </p>
  </div>

  {/* ── Stats row ── */}
  <div style={{
    display: "flex", justifyContent: "center", gap: "16px",
    marginTop: "36px", position: "relative", zIndex: 2,
    animation: "slideUp 0.7s ease forwards",
    opacity: 0, animationDelay: "0.95s", animationFillMode: "forwards",
  }}>
    {[['4,200+','Brands on waitlist'],['$2.1B+','Projected GMV'],['47','Countries ready']].map(([stat, lbl], i) => (
      <div key={stat} style={{
        padding: "16px 28px",
        borderRadius: "14px",
        border: `1px solid ${dark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)"}`,
        background: dark ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.9)",
        backdropFilter: "blur(8px)",
        boxShadow: dark ? "0 4px 20px rgba(0,0,0,0.2)" : "0 4px 16px rgba(15,23,42,0.06)",
        textAlign: "center",
        animation: "countUp 0.5s ease forwards",
        opacity: 0,
        animationDelay: `${1.1 + i * 0.12}s`,
        animationFillMode: "forwards",
        minWidth: "160px",
      }}>
        <div style={{ fontWeight: 800, fontSize: "28px", color: text, fontFamily: "'Fraunces',serif", letterSpacing: "-0.02em" }}>{stat}</div>
        <div style={{ fontSize: "12px", color: muted, marginTop: "3px", letterSpacing: "0.02em" }}>{lbl}</div>
      </div>
    ))}
  </div>
</section>
) : (
<section style={{
        position: "relative",
        maxWidth: "1160px", margin: "0 auto",
        padding: isMobile
          ? "82px 20px 48px"
          : "92px 28px 64px",
        textAlign: "center",
        overflow: "visible",
      }}>
        {/* Background ambient glow */}
        <div aria-hidden style={{
          position: "absolute", top: "-60px", left: "50%", transform: "translateX(-50%)",
          width: isMobile ? "340px" : "600px",
          height: isMobile ? "340px" : "500px",
          background: dark
            ? "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(37,99,235,0.12) 0%, rgba(124,58,237,0.05) 45%, transparent 70%)"
            : "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(37,99,235,0.07) 0%, rgba(124,58,237,0.04) 45%, transparent 70%)",
          filter: "blur(60px)", pointerEvents: "none",
          animation: "heroGlow 10s ease-in-out infinite",
        }} />

        {/* ── Text content — always centered ── */}
        <div style={{ position: "relative", zIndex: 2 }}>

          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "7px",
            marginBottom: "24px",
            background: dark ? "rgba(37,99,235,0.1)" : "rgba(37,99,235,0.06)",
            border: "1px solid rgba(37,99,235,0.22)",
            borderRadius: "20px", padding: "5px 12px 5px 8px",
            animation: "badgePop 0.6s ease forwards",
          }}>
            <div style={{
              width: "16px", height: "16px", borderRadius: "50%",
              background: "linear-gradient(135deg,#22C55E,#16A34A)",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 0 6px rgba(34,197,94,0.4)",
            }}>
              <span style={{ fontSize: "8px" }}>✦</span>
            </div>
            <span style={{ fontSize: "10px", fontWeight: 700, color: "#3B82F6", letterSpacing: "0.04em" }}>
              {isMobile ? "EARLY ACCESS" : "EARLY ACCESS · 4,200+ BRANDS"}
            </span>
          </div>

          {/* H1 */}
          <h1 style={{
            fontFamily: "'Fraunces', serif", fontWeight: 700,
            fontSize: isMobile ? "36px" : "44px",
            lineHeight: 1.05, letterSpacing: "-0.035em",
            color: text, marginBottom: "18px",
          }}>
            <span style={{
              display: "block",
              animation: "slideUp 0.7s ease forwards",
              opacity: 0, animationDelay: "0.1s", animationFillMode: "forwards",
            }}>
              Your Store, CRM &
            </span>
            <span style={{
              display: "block",
              animation: "slideUp 0.7s ease forwards",
              opacity: 0, animationDelay: "0.25s", animationFillMode: "forwards",
            }}>
              Payments —{" "}
              <span style={{
                background: "linear-gradient(90deg,#2563EB,#7C3AED,#EC4899,#2563EB)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "gradientFlow 4s linear infinite",
              }}>
                All in One
              </span>
            </span>
          </h1>

          {/* Sub */}
          <p style={{
            fontSize: isMobile ? "14px" : "15px",
            lineHeight: 1.74, color: muted,
            maxWidth: "490px",
            margin: "0 auto 24px",
            animation: "slideUp 0.7s ease forwards",
            opacity: 0, animationDelay: "0.45s", animationFillMode: "forwards",
          }}>
            One platform for your store, CRM, payments, and automation. Launch in 60&nbsp;seconds. Scale to millions.
          </p>

          {/* Form */}
          <div id={isMobile ? "waitlist" : undefined} style={{
            maxWidth: "440px", margin: "0 auto 14px",
            animation: "slideUp 0.7s ease forwards",
            opacity: 0, animationDelay: "0.6s", animationFillMode: "forwards",
          }}>
            <EmailForm dark={dark} label="Get Early Access →" {...waitlistProps} />
          </div>

          {/* Trust line */}
          <div style={{
            display: "flex", alignItems: "center", gap: "8px",
            justifyContent: "center",
            animation: "slideUp 0.7s ease forwards",
            opacity: 0, animationDelay: "0.75s", animationFillMode: "forwards",
          }}>
            <span style={{ color: "#22C55E", flexShrink: 0 }}>{icons.check}</span>
            <span style={{ fontSize: "11.5px", color: muted }}>No credit card · Free during beta · Cancel anytime</span>
          </div>
        </div>

        {/* ── Device showcase ── */}
        <div style={{
          position: "relative", zIndex: 1,
          marginTop: isMobile ? "40px" : "48px",
          animation: "slideUp 0.85s ease forwards",
          opacity: 0, animationDelay: "0.5s", animationFillMode: "forwards",
        }}>
          {isMobile
            ? <MobileDevice dark={dark} />
            : <DesktopDevices dark={dark} />
          }
        </div>

        {/* ── Stats row ── */}
        <div style={{
          display: "flex", gap: isMobile ? "16px" : "24px",
          flexWrap: "wrap", justifyContent: "center",
          marginTop: isMobile ? "28px" : "36px",
          paddingTop: "24px",
          borderTop: `1px solid ${border}`,
          animation: "slideUp 0.7s ease forwards",
          opacity: 0, animationDelay: "0.95s", animationFillMode: "forwards",
        }}>
          {[["4,200+","Brands waiting"],["$2.1B+","GMV targeted"],["47","Countries"]].map(([stat, lbl]) => (
            <div key={stat} style={{ textAlign: "center", minWidth: isMobile ? "80px" : "auto" }}>
              <div style={{ fontWeight: 800, fontSize: isMobile ? "18px" : "21px", color: text, fontFamily: "'Fraunces',serif", letterSpacing: "-0.02em" }}>{stat}</div>
              <div style={{ fontSize: "11px", color: muted, marginTop: "2px", letterSpacing: "0.02em" }}>{lbl}</div>
            </div>
          ))}
        </div>
      </section>
)}

      {/* LIVE OPS STREAM */}
      <section style={{
        padding: isMobile ? "56px 20px" : "74px 44px",
        background: dark
          ? "linear-gradient(160deg,rgba(255,255,255,0.012),rgba(37,99,235,0.04),rgba(255,255,255,0.008))"
          : "linear-gradient(160deg,rgba(255,255,255,0.95),rgba(219,234,254,0.44),rgba(255,255,255,0.96))",
        borderTop: `1px solid ${border}`,
        borderBottom: `1px solid ${border}`,
      }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <Reveal style={{ textAlign: "center", marginBottom: "28px" }}>
            <Label text="Operations Stream" />
            <SectionH2 isMobile={isMobile}>Your operations, streaming live.</SectionH2>
            <p style={{
              fontSize: isMobile ? "13px" : "14.5px",
              lineHeight: 1.72,
              color: muted,
              maxWidth: "560px",
              margin: "0 auto",
            }}>
              Watch your events move automatically from checkout to fulfillment in one timeline.
            </p>
          </Reveal>

          <div
            ref={opsStreamRef}
            style={{
              display: "grid",
              gap: "10px",
              maxWidth: isMobile ? "100%" : "640px",
              margin: "0 auto",
            }}
          >
            {operationsEvents.slice(0, visibleOpsEvents).map((event, index) => (
              <div
                key={`${event.text}-${index}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: isMobile ? "12px" : "13px 14px",
                  borderRadius: "12px",
                  border: `1px solid ${dark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)"}`,
                  background: dark ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.84)",
                  boxShadow: dark ? "0 10px 24px rgba(2,6,23,0.28)" : "0 8px 20px rgba(2,6,23,0.08)",
                  animation: `fadeUp 0.45s ease ${index * 50}ms both`,
                }}
              >
                <div style={{
                  width: "32px",
                  height: "32px",
                  minWidth: "32px",
                  borderRadius: "9px",
                  background: dark ? "rgba(255,255,255,0.06)" : "rgba(241,245,249,0.9)",
                  border: `1px solid ${dark ? "rgba(255,255,255,0.1)" : "rgba(15,23,42,0.08)"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: event.accent,
                }}>
                  {event.icon}
                </div>
                <div style={{ flex: 1, minWidth: 0, textAlign: "left" }}>
                  <p style={{
                    fontSize: isMobile ? "12.5px" : "13.5px",
                    fontWeight: 700,
                    color: text,
                    lineHeight: 1.35,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}>
                    {event.text}
                  </p>
                  <p style={{
                    marginTop: "1px",
                    fontSize: "11px",
                    color: muted,
                    lineHeight: 1.35,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}>
                    {event.detail}
                  </p>
                </div>
                <span style={{
                  fontSize: "10px",
                  color: muted,
                  letterSpacing: "0.02em",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}>
                  {event.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM ──────────────────────────────────────────────────────── */}
      <section style={{
        borderTop: `1px solid ${border}`, borderBottom: `1px solid ${border}`,
        background: dark ? "rgba(255,255,255,0.011)" : "rgba(0,0,0,0.016)",
        padding: isMobile ? "52px 20px" : "68px 44px",
      }}>
        <Reveal>
          <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>
            <Label text="The Problem" />
            <SectionH2 isMobile={isMobile}>Growing Brands Outgrow Fragmented Tools.</SectionH2>
            <p style={{ fontSize: isMobile ? "13px" : "14.5px", lineHeight: 1.76, color: muted, maxWidth: "560px", margin: "0 auto 24px" }}>
              As online businesses scale, they rely on multiple disconnected systems for storefronts, CRM, billing, automation, and analytics — creating complexity, data silos, and mounting inefficiency.
            </p>
            <div style={{
              display: "inline-block",
              fontSize: isMobile ? "12.5px" : "14px", fontWeight: 600, lineHeight: 1.6,
              color: text, padding: "14px 22px",
              background: "linear-gradient(135deg,rgba(37,99,235,0.09),rgba(59,130,246,0.05))",
              borderRadius: "11px", border: "1px solid rgba(37,99,235,0.16)",
            }}>
              Debby replaces scattered tools with one unified commerce infrastructure.
            </div>

            {/* Premium tools stack */}
            <div style={{
              marginTop: "30px",
              padding: isMobile ? "14px" : "16px",
              borderRadius: "14px",
              border: `1px solid ${dark ? "rgba(255,255,255,0.09)" : "rgba(15,23,42,0.1)"}`,
              background: dark
                ? "linear-gradient(145deg,rgba(255,255,255,0.025),rgba(255,255,255,0.01))"
                : "linear-gradient(145deg,rgba(255,255,255,0.94),rgba(248,250,252,0.88))",
              boxShadow: dark ? "0 12px 30px rgba(2,6,23,0.34)" : "0 10px 28px rgba(2,6,23,0.08)",
            }}>
              <div style={{
                fontSize: "11px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: muted,
                marginBottom: "12px",
                textAlign: "left",
              }}>
                Typical stack brands outgrow
              </div>
              <div style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "repeat(2,minmax(0,1fr))",
                gap: "9px",
              }}>
                {fragmentedTools.map((tool) => (
                  <div key={tool.name} style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    minHeight: "50px",
                    padding: "9px 10px",
                    borderRadius: "10px",
                    border: `1px solid ${dark ? "rgba(255,255,255,0.07)" : "rgba(15,23,42,0.08)"}`,
                    background: dark ? "rgba(255,255,255,0.018)" : "rgba(255,255,255,0.75)",
                  }}>
                    <div style={{
                      position: "relative",
                      width: "24px",
                      height: "24px",
                      borderRadius: "7px",
                      border: `1px solid ${dark ? "rgba(255,255,255,0.1)" : "rgba(15,23,42,0.1)"}`,
                      background: dark ? "rgba(255,255,255,0.055)" : "rgba(241,245,249,0.95)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      <img
                        src={tool.logo}
                        alt={tool.name}
                        width="13"
                        height="13"
                        style={{ display: "block" }}
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                          const fallback = e.currentTarget.nextSibling;
                          if (fallback) fallback.style.display = "flex";
                        }}
                      />
                      <div style={{
                        display: "none",
                        width: "13px",
                        height: "13px",
                        fontSize: "8px",
                        fontWeight: 700,
                        color: muted,
                        alignItems: "center",
                        justifyContent: "center",
                      }}>
                        {tool.name.charAt(0)}
                      </div>
                    </div>
                    <div style={{ minWidth: 0, textAlign: "left" }}>
                      <div style={{
                        fontSize: "12.5px",
                        fontWeight: 600,
                        color: text,
                        lineHeight: 1.25,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}>
                        {tool.name}
                      </div>
                      <div style={{
                        fontSize: "10.5px",
                        color: muted,
                        lineHeight: 1.35,
                        marginTop: "2px",
                      }}>
                        {tool.mode === "replaced" ? "Consolidated in Debby" : "Connected as payment rail"}
                      </div>
                    </div>
                    <span style={{
                      marginLeft: "auto",
                      fontSize: "9.5px",
                      fontWeight: 700,
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      padding: "4px 7px",
                      borderRadius: "999px",
                      border: `1px solid ${
                        tool.mode === "replaced"
                          ? "rgba(37,99,235,0.24)"
                          : "rgba(124,58,237,0.24)"
                      }`,
                      color: tool.mode === "replaced" ? "#2563EB" : "#7C3AED",
                      background: tool.mode === "replaced"
                        ? "rgba(37,99,235,0.09)"
                        : "rgba(124,58,237,0.09)",
                      flexShrink: 0,
                    }}>
                      {tool.mode === "replaced" ? "Unified" : "Rail"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ marginTop: "10px", fontSize: "11px", color: muted, opacity: 0.62 }}>
              Debby replaces fragmented tools while Stripe remains a connected payment rail.
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── PLATFORM ─────────────────────────────────────────────────────── */}
      <section style={{ padding: isMobile ? "56px 20px" : "76px 44px", maxWidth: "1160px", margin: "0 auto" }}>
        <Reveal style={{ marginBottom: "44px", textAlign: "center" }}>
          <Label text="Platform" />
          <SectionH2 isMobile={isMobile}>One System. Total Operational Control.</SectionH2>
          <p style={{ fontSize: isMobile ? "12.5px" : "14px", color: muted, maxWidth: "420px", margin: "0 auto" }}>
            Every tool your commerce operation needs — unified, integrated, and intelligent.
          </p>
        </Reveal>

        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2,1fr)" : "repeat(3,1fr)",
          gap: "14px",
        }}>
          {[
            { icon: icons.store,   title: "Commerce Infrastructure", delay: 0,   items: ["Storefront management","Physical & digital products","Inventory management","Order tracking","Integrated checkout"] },
            { icon: icons.users,   title: "Customer Management",      delay: 55,  items: ["Centralized customer profiles","Full purchase history","Advanced segmentation","Interaction tracking"] },
            { icon: icons.billing, title: "Billing & Revenue",         delay: 110, items: ["Custom invoicing","Recurring billing","Payment tracking","Multi-currency support"] },
            { icon: icons.zap,     title: "Automation Engine",         delay: 165, items: ["Visual workflow builder","Customer follow-ups","Order automation","Operational triggers"] },
            { icon: icons.chart,   title: "Analytics & Insights",      delay: 220, items: ["Revenue dashboards","Conversion tracking","Customer analytics","Performance reports"] },
            { icon: icons.globe,   title: "Global Infrastructure",     delay: 275, items: ["Multi-region support","Localization tools","Cross-border commerce","Global tax compliance"] },
          ].map(f => <FeatureCard key={f.title} {...f} dark={dark} />)}
        </div>
      </section>

      {/* ── DIFFERENTIATION ──────────────────────────────────────────────── */}
      <section style={{
        padding: isMobile ? "52px 20px" : "68px 44px",
        background: dark
          ? "linear-gradient(135deg,#060B14 0%,#0A1422 50%,#060B14 100%)"
          : "linear-gradient(135deg,#EFF6FF 0%,#DBEAFE 50%,#EFF6FF 100%)",
        borderTop: `1px solid ${border}`, borderBottom: `1px solid ${border}`,
      }}>
        <Reveal>
          <div style={{ maxWidth: "660px", margin: "0 auto", textAlign: "center" }}>
            <Label text="Built Different" />
            <SectionH2 isMobile={isMobile}>Not Another Store Builder.</SectionH2>
            <p style={{ fontSize: isMobile ? "13px" : "14.5px", lineHeight: 1.78, color: muted, marginBottom: "36px" }}>
              Debby is not a theme marketplace or plugin ecosystem. It is a unified operational backbone designed for brands that demand control, clarity, and scalability.
            </p>

            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: "13px", textAlign: "left",
            }}>
              {[
                { label: "Debby", positive: true, items: ["Unified operational backbone","Full commerce infrastructure","Built-in CRM + automation","Single source of truth","Scales with your operation"] },
                { label: "The rest", positive: false, items: ["Theme + plugin stacks","Fragmented data across tools","Manual integration overhead","Siloed customer data","Complexity grows with revenue"] },
              ].map(col => (
                <div key={col.label} style={{
                  padding: "20px",
                  borderRadius: "13px",
                  border: `1px solid ${col.positive ? "rgba(37,99,235,0.26)" : border}`,
                  background: col.positive
                    ? dark ? "rgba(37,99,235,0.08)" : "rgba(219,234,254,0.5)"
                    : dark ? "rgba(255,255,255,0.016)" : "rgba(0,0,0,0.016)",
                }}>
                  <div style={{
                    fontWeight: 700, fontSize: "13px", marginBottom: "13px",
                    color: col.positive ? "#2563EB" : muted,
                    display: "flex", alignItems: "center", gap: "7px",
                  }}>
                    <span style={{ width: "6.5px", height: "6.5px", borderRadius: "50%", background: col.positive ? "#22C55E" : "#EF4444", display: "inline-block" }} />
                    {col.label}
                  </div>
                  {col.items.map(item => (
                    <div key={item} style={{
                      display: "flex", alignItems: "flex-start", gap: "7px",
                      marginBottom: "7px", fontSize: "12.5px", lineHeight: 1.46,
                      color: col.positive ? text : muted,
                    }}>
                      <span style={{ color: col.positive ? "#22C55E" : "#EF4444", marginTop: "1px", flexShrink: 0 }}>
                        {col.positive ? icons.check : icons.x}
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── SECURITY ─────────────────────────────────────────────────────── */}
      <section style={{ padding: isMobile ? "52px 20px" : "68px 44px", maxWidth: "840px", margin: "0 auto" }}>
        <Reveal>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <Label text="Security" />
            <SectionH2 isMobile={isMobile}>Enterprise-Grade Security by Design.</SectionH2>
            <p style={{ fontSize: isMobile ? "12.5px" : "14px", color: muted, maxWidth: "400px", margin: "0 auto" }}>
              Your commerce infrastructure demands the same rigor as your most critical business systems.
            </p>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2,1fr)",
            gap: "9px",
          }}>
            <SecPill icon={icons.lock}      text="Encrypted data storage"      dark={dark} />
            <SecPill icon={icons.server}    text="Secure cloud infrastructure"  dark={dark} />
            <SecPill icon={icons.key}       text="Role-based access control"    dark={dark} />
            <SecPill icon={icons.clipboard} text="Complete audit logs"          dark={dark} />
            <SecPill icon={icons.shield}    text="SOC 2 Type II compliant"      dark={dark} />
            <SecPill icon={icons.globe}     text="Scalable global architecture" dark={dark} />
          </div>
        </Reveal>
      </section>

      {/* ── VISION ───────────────────────────────────────────────────────── */}
      <section style={{
        padding: isMobile ? "52px 20px" : "68px 44px",
        background: dark
          ? "linear-gradient(to bottom,rgba(37,99,235,0.05) 0%,transparent 100%)"
          : "linear-gradient(to bottom,rgba(37,99,235,0.035) 0%,transparent 100%)",
        borderTop: `1px solid ${border}`,
      }}>
        <Reveal>
          <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
            <Label text="Our Vision" />
            <SectionH2 isMobile={isMobile}>Infrastructure for the Next Generation of Commerce.</SectionH2>
            <p style={{ fontSize: isMobile ? "13px" : "14.5px", lineHeight: 1.8, color: muted }}>
              Debby gives modern businesses full ownership over their operations. Replace complexity with a unified system designed to scale with you — from your first million to your hundredth.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section id="waitlist" style={{
        padding: isMobile ? "60px 20px" : "84px 44px",
        background: dark
          ? "linear-gradient(135deg,#060B14,#0A1828 50%,#060B14)"
          : "linear-gradient(135deg,#EFF6FF,#DBEAFE 50%,#EFF6FF)",
        borderTop: `1px solid ${border}`,
      }}>
        <Reveal>
          <div style={{ maxWidth: "520px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{
              fontFamily: "'Fraunces',serif", fontWeight: 700,
              fontSize: isMobile ? "24px" : "38px",
              lineHeight: 1.13, letterSpacing: "-0.03em", marginBottom: "13px",
            }}>
              Take Control of Your{" "}
              <span style={{ background: "linear-gradient(135deg,#2563EB,#60A5FA)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Commerce Infrastructure.
              </span>
            </h2>
            <p style={{ fontSize: isMobile ? "12.5px" : "14px", color: muted, marginBottom: "26px", lineHeight: 1.72 }}>
              Join 4,200+ brands already on the Debby waitlist.
            </p>
            <div style={{ marginBottom: "13px" }}>
              <EmailForm dark={dark} label="Join the Waitlist" {...waitlistProps} />
            </div>
            <p style={{ fontSize: "11px", color: muted, opacity: 0.6 }}>
              Early businesses receive priority onboarding and founding member benefits.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer style={{
        borderTop: `1px solid ${border}`,
        padding: isMobile ? "24px 20px" : "30px 44px",
        maxWidth: "1160px", margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: "12px",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
          <div style={{
            width: "25px", height: "25px", borderRadius: "6.5px",
            background: "linear-gradient(135deg,#1E3A8A,#3B82F6)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ color: "#fff", fontWeight: 900, fontSize: "10.5px", fontFamily: "'Fraunces',serif" }}>D</span>
          </div>
          <span style={{ fontWeight: 800, fontSize: "14.5px", letterSpacing: "-0.02em", color: text }}>debby</span>
        </div>
        <div style={{ fontSize: "11.5px", color: muted }}>© 2026 Debby Technologies Inc.</div>
        <div style={{ display: "flex", gap: "16px" }}>
          {["Privacy","Terms","Security"].map(l => (
            <a key={l} href="#" style={{ fontSize: "11.5px", color: muted, textDecoration: "none" }}>{l}</a>
          ))}
        </div>
      </footer>
    </div>
  );
}




