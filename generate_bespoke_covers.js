const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const OUTPUT_DIR = path.join(__dirname, 'images', 'projects');

// 1. KUNULINK - Eco-Friendly Smart Waste Portal (Mint Green, Aqua Sky, Frosted Glass, Clean Sustainable City)
function getKunuLinkHTML() {
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  * { margin:0; padding:0; box-sizing:border-box; font-family:'Inter', -apple-system, sans-serif; }
  body {
    width: 1200px; height: 675px;
    background: linear-gradient(135deg, #A7F3D0 0%, #BAE6FD 45%, #E2E8F0 100%);
    position: relative; overflow: hidden;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 80px;
  }
  .bg-circle1 {
    position: absolute; width: 600px; height: 600px; border-radius: 50%;
    background: radial-gradient(circle, rgba(5, 150, 105, 0.25) 0%, transparent 70%);
    top: -100px; right: 100px; filter: blur(50px);
  }
  .bg-circle2 {
    position: absolute; width: 500px; height: 500px; border-radius: 50%;
    background: radial-gradient(circle, rgba(2, 132, 199, 0.2) 0%, transparent 70%);
    bottom: -150px; left: 50px; filter: blur(50px);
  }
  .left-hero {
    position: relative; z-index: 2; max-width: 540px;
  }
  .brand-pill {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(10px);
    border: 1px solid #10B981; padding: 6px 14px; border-radius: 30px;
    color: #065F46; font-size: 13px; font-weight: 800; letter-spacing: 0.5px;
    box-shadow: 0 4px 15px rgba(5, 150, 105, 0.15); margin-bottom: 20px;
  }
  .logo-title {
    font-size: 64px; font-weight: 900; letter-spacing: -1.5px; line-height: 1.05;
    color: #0F172A; margin-bottom: 12px;
  }
  .logo-title span {
    background: linear-gradient(135deg, #0284C7 0%, #059669 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  }
  .tagline {
    font-size: 22px; font-weight: 700; color: #065F46; margin-bottom: 14px;
    letter-spacing: -0.3px;
  }
  .desc {
    font-size: 15px; color: #334155; line-height: 1.6; margin-bottom: 24px;
  }
  .eco-pills {
    display: flex; gap: 10px;
  }
  .eco-badge {
    background: #FFFFFF; border: 1px solid rgba(5, 150, 105, 0.3);
    color: #047857; padding: 8px 14px; border-radius: 10px;
    font-size: 12px; font-weight: 700; display: flex; align-items: center; gap: 6px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.04);
  }
  .right-card {
    position: relative; z-index: 2; width: 420px;
    background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(25px);
    border: 1px solid rgba(255, 255, 255, 0.9); border-radius: 28px;
    padding: 32px; box-shadow: 0 25px 50px rgba(15, 23, 42, 0.12);
  }
  .card-header-eco {
    display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;
  }
  .eco-icon-box {
    width: 52px; height: 52px; border-radius: 14px;
    background: linear-gradient(135deg, #0284C7, #059669);
    display: flex; align-items: center; justify-content: center;
    color: white; font-size: 26px; box-shadow: 0 8px 20px rgba(5, 150, 105, 0.3);
  }
  .status-live {
    background: #DCFCE7; border: 1px solid #86EFAC; color: #15803D;
    font-size: 11px; font-weight: 800; padding: 5px 12px; border-radius: 20px;
  }
  .card-h { font-size: 20px; font-weight: 800; color: #0F172A; margin-bottom: 4px; }
  .card-sub { font-size: 13px; color: #64748B; margin-bottom: 20px; }
  .bin-progress {
    background: #E2E8F0; border-radius: 10px; height: 12px; overflow: hidden; margin-bottom: 8px;
  }
  .bin-fill {
    width: 82%; height: 100%; background: linear-gradient(90deg, #0284C7, #059669);
    border-radius: 10px;
  }
  .stat-grid-eco {
    display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 18px;
  }
  .stat-box-eco {
    background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 12px;
  }
  .stat-val-eco { font-size: 22px; font-weight: 900; color: #059669; }
  .stat-lbl-eco { font-size: 11px; color: #64748B; font-weight: 600; margin-top: 2px; }
</style>
</head>
<body>
  <div class="bg-circle1"></div>
  <div class="bg-circle2"></div>
  <div class="left-hero">
    <div class="brand-pill">🌱 SMART RECYCLING PLATFORM</div>
    <div class="logo-title">Kunu<span>Link</span></div>
    <div class="tagline">Smart Waste Collection & Recycling Portal</div>
    <div class="desc">Automated waste collection dispatch, smart sensor bin telemetry, and community recycling requests built to drive zero-waste cities.</div>
    <div class="eco-pills">
      <div class="eco-badge">♻ Automated Pickups</div>
      <div class="eco-badge">📍 Leaflet GPS Route</div>
      <div class="eco-badge">📊 Eco Analytics</div>
    </div>
  </div>
  <div class="right-card">
    <div class="card-header-eco">
      <div class="eco-icon-box">♻</div>
      <div class="status-live">● SENSORS ACTIVE</div>
    </div>
    <div class="card-h">EcoSync Smart Bin #14</div>
    <div class="card-sub">Urban Zone A • Municipal Hub</div>
    <div style="display:flex; justify-content:space-between; font-size:12px; font-weight:700; color:#0F172A; margin-bottom:6px;">
      <span>Fill Level</span><span>82% (High)</span>
    </div>
    <div class="bin-progress"><div class="bin-fill"></div></div>
    <div class="stat-grid-eco">
      <div class="stat-box-eco">
        <div class="stat-val-eco">1,420 kg</div>
        <div class="stat-lbl-eco">Recycled This Month</div>
      </div>
      <div class="stat-box-eco">
        <div class="stat-val-eco">14 Mins</div>
        <div class="stat-lbl-eco">Truck Arrival ETA</div>
      </div>
    </div>
  </div>
</body>
</html>`;
}

// 2. MEDIROUTE - Emergency Healthcare & Medical Supply Logistics (Emergency Crimson, GPS Slate, Mobile Mockup)
function getMediRouteHTML() {
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  * { margin:0; padding:0; box-sizing:border-box; font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
  body {
    width: 1200px; height: 675px;
    background: radial-gradient(circle at 70% 30%, #4C0519 0%, #1E0713 50%, #0A050D 100%);
    position: relative; overflow: hidden;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 80px; color: #FFFFFF;
  }
  .pulse-line {
    position: absolute; width: 100%; top: 50%; left: 0; opacity: 0.15; pointer-events: none;
  }
  .left-hero { max-width: 520px; z-index: 2; }
  .alert-pill {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(225, 29, 72, 0.18); border: 1px solid #E11D48;
    color: #FDA4AF; padding: 6px 14px; border-radius: 20px;
    font-size: 12px; font-weight: 800; letter-spacing: 0.8px; margin-bottom: 20px;
  }
  .alert-dot { width: 8px; height: 8px; border-radius: 50%; background: #E11D48; box-shadow: 0 0 10px #E11D48; }
  .logo-title {
    font-size: 64px; font-weight: 900; letter-spacing: -1.5px; line-height: 1.05;
    color: #FFFFFF; margin-bottom: 12px;
  }
  .logo-title span { color: #E11D48; }
  .tagline {
    font-size: 22px; font-weight: 700; color: #FDA4AF; margin-bottom: 14px; letter-spacing: -0.3px;
  }
  .desc {
    font-size: 15px; color: #CBD5E1; line-height: 1.6; margin-bottom: 26px;
  }
  .badges-row { display: flex; gap: 10px; }
  .badge-item {
    background: rgba(30, 41, 59, 0.7); border: 1px solid rgba(225, 29, 72, 0.4);
    color: #F8FAFC; padding: 8px 14px; border-radius: 8px; font-size: 12px; font-weight: 700;
  }
  /* Realistic Phone Frame */
  .phone-frame {
    width: 320px; height: 530px; background: #0B0F17;
    border: 7px solid #334155; border-radius: 40px;
    position: relative; z-index: 2; padding: 18px 16px;
    box-shadow: 0 30px 70px rgba(0, 0, 0, 0.8), 0 0 30px rgba(225, 29, 72, 0.4);
    display: flex; flex-direction: column; justify-content: space-between;
  }
  .phone-notch {
    width: 100px; height: 16px; background: #334155; border-radius: 10px;
    margin: 0 auto 12px auto;
  }
  .app-header {
    display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;
  }
  .app-title { font-size: 15px; font-weight: 800; color: #FFFFFF; }
  .dispatch-banner {
    background: #E11D48; border-radius: 12px; padding: 12px; margin-bottom: 12px;
  }
  .dispatch-h { font-size: 11px; text-transform: uppercase; font-weight: 800; color: #FFE4E6; }
  .dispatch-route { font-size: 14px; font-weight: 900; color: #FFFFFF; margin: 2px 0; }
  .map-box {
    flex: 1; background: #1E293B; border-radius: 14px; position: relative; overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.1); margin-bottom: 12px;
    display: flex; align-items: center; justify-content: center;
  }
  .map-grid {
    position: absolute; inset: 0;
    background-image: radial-gradient(rgba(225, 29, 72, 0.25) 1.5px, transparent 1.5px);
    background-size: 20px 20px;
  }
  .pulse-pin {
    width: 36px; height: 36px; background: rgba(225, 29, 72, 0.2); border-radius: 50%;
    display: flex; align-items: center; justify-content: center; border: 2px solid #E11D48;
    position: relative; z-index: 3;
  }
  .pulse-center { width: 14px; height: 14px; background: #E11D48; border-radius: 50%; }
  .bottom-card {
    background: rgba(30, 41, 59, 0.9); border-radius: 12px; padding: 10px 14px;
    display: flex; justify-content: space-between; align-items: center;
  }
  .bot-val { font-size: 16px; font-weight: 900; color: #38BDF8; }
  .bot-lbl { font-size: 10px; color: #94A3B8; text-transform: uppercase; }
</style>
</head>
<body>
  <div class="left-hero">
    <div class="alert-pill"><span class="alert-dot"></span> EMERGENCY TRANSIT DISPATCH</div>
    <div class="logo-title">Medi<span>Route</span></div>
    <div class="tagline">Medical Logistics & Emergency Ambulance Routing</div>
    <div class="desc">Real-time GPS routing engine engineered to deliver critical medical supplies, cold-chain pharmaceuticals, and emergency patient transit without traffic delays.</div>
    <div class="badges-row">
      <div class="badge-item">🚑 Fast Ambulance Dispatch</div>
      <div class="badge-item">💉 Blood Bank Network</div>
      <div class="badge-item">⏱ 4.2m Response Time</div>
    </div>
  </div>
  <div class="phone-frame">
    <div class="phone-notch"></div>
    <div class="app-header">
      <div class="app-title">MediRoute Mobile APK</div>
      <div style="font-size: 10px; color: #34D399; font-weight: 800;">● ONLINE</div>
    </div>
    <div class="dispatch-banner">
      <div class="dispatch-h">Active Priority 1 Emergency</div>
      <div class="dispatch-route">Central Blood Bank → ICU Ward</div>
      <div style="font-size: 10px; color: #FFE4E6;">Speed: 64 km/h • Green Wave Active</div>
    </div>
    <div class="map-box">
      <div class="map-grid"></div>
      <svg width="240" height="140" style="position:absolute; z-index:2;">
        <path d="M 30,110 Q 110,90 140,50 T 210,30" fill="none" stroke="#E11D48" stroke-width="4"/>
      </svg>
      <div class="pulse-pin"><div class="pulse-center"></div></div>
    </div>
    <div class="bottom-card">
      <div><div class="bot-val">3.8 min</div><div class="bot-lbl">ETA to Destination</div></div>
      <div style="text-align:right;"><div class="bot-val" style="color:#34D399;">Optimal</div><div class="bot-lbl">Route Status</div></div>
    </div>
  </div>
</body>
</html>`;
}

// 3. SHOPEASE - Modern Warm-Ivory Minimalist E-Commerce (Warm Ivory, Charcoal, Product Card, Cart UI)
function getShopEaseHTML() {
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  * { margin:0; padding:0; box-sizing:border-box; font-family:'Plus Jakarta Sans', -apple-system, sans-serif; }
  body {
    width: 1200px; height: 675px;
    background: #F7F5EF; /* Real ShopEase Warm Ivory */
    position: relative; overflow: hidden;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 80px; color: #191919;
  }
  .pattern {
    position: absolute; inset: 0;
    background-image: radial-gradient(#D8D4CC 1px, transparent 1px);
    background-size: 32px 32px; opacity: 0.6;
  }
  .left-hero { max-width: 520px; z-index: 2; position: relative; }
  .brand-chip {
    display: inline-flex; align-items: center; gap: 8px;
    background: #FFFFFF; border: 1px solid #D8D4CC; padding: 6px 14px;
    border-radius: 30px; font-size: 12px; font-weight: 800; color: #5A5853;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04); margin-bottom: 20px;
  }
  .logo-title {
    font-size: 64px; font-weight: 900; letter-spacing: -1.5px; line-height: 1.05;
    color: #191919; margin-bottom: 12px;
  }
  .logo-title span { color: #E11D48; }
  .tagline {
    font-size: 22px; font-weight: 700; color: #5A5853; margin-bottom: 14px; letter-spacing: -0.3px;
  }
  .desc {
    font-size: 15px; color: #777570; line-height: 1.6; margin-bottom: 24px;
  }
  .feature-chips { display: flex; gap: 10px; }
  .f-chip {
    background: #FFFFFF; border: 1px solid #D8D4CC; border-radius: 8px;
    padding: 8px 14px; font-size: 12px; font-weight: 700; color: #191919;
    box-shadow: 0 2px 6px rgba(0,0,0,0.03);
  }
  /* Right Clean Product Showcase Card */
  .product-stage {
    width: 440px; background: #FFFFFF; border: 1px solid #D8D4CC;
    border-radius: 24px; padding: 32px; position: relative; z-index: 2;
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.08); display: flex; flex-direction: column; gap: 20px;
  }
  .badge-sale {
    position: absolute; top: 24px; right: 24px;
    background: #191919; color: #FFFFFF; font-size: 11px; font-weight: 800;
    padding: 5px 12px; border-radius: 20px;
  }
  .prod-display {
    width: 100%; height: 180px; background: #FAF9F5; border: 1px solid #EAE6DE;
    border-radius: 16px; display: flex; align-items: center; justify-content: center;
    position: relative;
  }
  .prod-graphic { font-size: 72px; }
  .prod-info h3 { font-size: 22px; font-weight: 800; color: #191919; margin-bottom: 4px; }
  .prod-info p { font-size: 13px; color: #777570; }
  .price-row {
    display: flex; justify-content: space-between; align-items: center;
    border-top: 1px solid #EAE6DE; padding-top: 18px;
  }
  .price-val { font-size: 28px; font-weight: 900; color: #191919; }
  .cart-add-btn {
    background: #191919; color: #FFFFFF; border: none; padding: 12px 24px;
    border-radius: 10px; font-size: 13px; font-weight: 700; cursor: pointer;
    box-shadow: 0 6px 18px rgba(0,0,0,0.15);
  }
</style>
</head>
<body>
  <div class="pattern"></div>
  <div class="left-hero">
    <div class="brand-chip">🛍 NORDIC MINIMALIST E-COMMERCE</div>
    <div class="logo-title">Shop<span>Ease</span></div>
    <div class="tagline">Modern Digital Shopping & Cart Experience</div>
    <div class="desc">A lightweight, highly accessible e-commerce platform offering real-time product filtering, seamless basket calculations, and local storage state persistence.</div>
    <div class="feature-chips">
      <div class="f-chip">🛒 Instant Basket</div>
      <div class="f-chip">💾 LocalStorage Sync</div>
      <div class="f-chip">⚡ Vanilla JS Engine</div>
    </div>
  </div>
  <div class="product-stage">
    <div class="badge-sale">FEATURED PRODUCT</div>
    <div class="prod-display">
      <div class="prod-graphic">🎧</div>
    </div>
    <div class="prod-info">
      <h3>Studio Wireless ANC Headphone</h3>
      <p>Active Noise Cancelling • 40h Battery • Space Grey</p>
    </div>
    <div class="price-row">
      <div>
        <div style="font-size: 11px; color:#777570; text-transform:uppercase; font-weight:700;">Price</div>
        <div class="price-val">$149.00</div>
      </div>
      <button class="cart-add-btn">Add To Bag +</button>
    </div>
  </div>
</body>
</html>`;
}

// 4. DREAM HOME - Modern Architectural Real Estate (Slate 900, Amber Gold, Villa Blueprint)
function getDreamHomeHTML() {
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  * { margin:0; padding:0; box-sizing:border-box; font-family:'Outfit', -apple-system, sans-serif; }
  body {
    width: 1200px; height: 675px;
    background: linear-gradient(135deg, #0F172A 0%, #1E293B 60%, #090D16 100%);
    position: relative; overflow: hidden;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 80px; color: #F8FAFC;
  }
  .arch-grid {
    position: absolute; inset: 0;
    background-image: 
      linear-gradient(rgba(245, 158, 11, 0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(245, 158, 11, 0.08) 1px, transparent 1px);
    background-size: 50px 50px; opacity: 0.8;
  }
  .left-hero { max-width: 520px; z-index: 2; position: relative; }
  .villa-pill {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(245, 158, 11, 0.12); border: 1px solid #F59E0B;
    color: #FBBF24; padding: 6px 14px; border-radius: 30px;
    font-size: 12px; font-weight: 800; letter-spacing: 0.8px; margin-bottom: 20px;
  }
  .logo-title {
    font-size: 64px; font-weight: 900; letter-spacing: -1.5px; line-height: 1.05;
    color: #FFFFFF; margin-bottom: 12px;
  }
  .logo-title span { color: #F59E0B; }
  .tagline {
    font-size: 22px; font-weight: 700; color: #FCD34D; margin-bottom: 14px; letter-spacing: -0.3px;
  }
  .desc {
    font-size: 15px; color: #94A3B8; line-height: 1.6; margin-bottom: 24px;
  }
  .specs-row { display: flex; gap: 10px; }
  .spec-chip {
    background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 8px; padding: 8px 14px; font-size: 12px; font-weight: 700; color: #F1F5F9;
  }
  /* Right Luxury Architectural Villa Card */
  .villa-card {
    width: 440px; background: rgba(30, 41, 59, 0.7); border: 1px solid rgba(245, 158, 11, 0.35);
    backdrop-filter: blur(20px); border-radius: 24px; padding: 30px;
    position: relative; z-index: 2; box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5), 0 0 30px rgba(245, 158, 11, 0.15);
  }
  .villa-visual {
    width: 100%; height: 170px; background: linear-gradient(135deg, #1E293B, #0F172A);
    border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 16px;
    display: flex; align-items: center; justify-content: center; font-size: 72px;
    margin-bottom: 18px; position: relative;
  }
  .verified-badge {
    position: absolute; top: 12px; right: 12px;
    background: #10B981; color: white; font-size: 10px; font-weight: 800;
    padding: 4px 10px; border-radius: 20px;
  }
  .villa-h { font-size: 22px; font-weight: 800; color: #FFFFFF; margin-bottom: 4px; }
  .villa-loc { font-size: 13px; color: #F59E0B; font-weight: 600; margin-bottom: 16px; }
  .amenities {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;
    background: rgba(0, 0, 0, 0.25); border-radius: 12px; padding: 12px;
  }
  .amen-val { font-size: 16px; font-weight: 800; color: #FFFFFF; }
  .amen-lbl { font-size: 10px; color: #94A3B8; text-transform: uppercase; margin-top: 2px; }
</style>
</head>
<body>
  <div class="arch-grid"></div>
  <div class="left-hero">
    <div class="villa-pill">🏛 MODERN REAL ESTATE PLATFORM</div>
    <div class="logo-title">Dream <span>Home</span></div>
    <div class="tagline">Property Matchmaking & Listing Architecture</div>
    <div class="desc">A high-end property portal enabling prospective homeowners to filter villas by luxury specs, book viewings, and connect directly with certified agents.</div>
    <div class="specs-row">
      <div class="spec-chip">🏡 Villa Showcase</div>
      <div class="spec-chip">📍 Location Match</div>
      <div class="spec-chip">🤝 Direct Agent Chat</div>
    </div>
  </div>
  <div class="villa-card">
    <div class="villa-visual">
      <span class="verified-badge">✓ VERIFIED DEED</span>
      🏛
    </div>
    <div class="villa-h">The Grand Horizon Villa</div>
    <div class="villa-loc">📍 Prime Sector 07 • Luxury Living</div>
    <div class="amenities">
      <div><div class="amen-val">4 Beds</div><div class="amen-lbl">En-Suite</div></div>
      <div><div class="amen-val">3 Baths</div><div class="amen-lbl">Italian Fixtures</div></div>
      <div><div class="amen-val">Pool</div><div class="amen-lbl">Infinity View</div></div>
    </div>
  </div>
</body>
</html>`;
}

// 5. ONLINE TUTOR - Interactive E-Learning & Knowledge Hub (Royal Blue, Bright Yellow, Classroom UI)
function getOnlineTutorHTML() {
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  * { margin:0; padding:0; box-sizing:border-box; font-family:'Inter', -apple-system, sans-serif; }
  body {
    width: 1200px; height: 675px;
    background: linear-gradient(135deg, #1E3A8A 0%, #172554 60%, #0A0F1E 100%);
    position: relative; overflow: hidden;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 80px; color: #FFFFFF;
  }
  .math-pattern {
    position: absolute; inset: 0; opacity: 0.1;
    background-image: radial-gradient(#FACC15 1.5px, transparent 1.5px);
    background-size: 30px 30px;
  }
  .left-hero { max-width: 520px; z-index: 2; position: relative; }
  .edtech-pill {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(250, 204, 21, 0.15); border: 1px solid #FACC15;
    color: #FDE047; padding: 6px 14px; border-radius: 30px;
    font-size: 12px; font-weight: 800; letter-spacing: 0.8px; margin-bottom: 20px;
  }
  .logo-title {
    font-size: 64px; font-weight: 900; letter-spacing: -1.5px; line-height: 1.05;
    color: #FFFFFF; margin-bottom: 12px;
  }
  .logo-title span { color: #FACC15; }
  .tagline {
    font-size: 22px; font-weight: 700; color: #93C5FD; margin-bottom: 14px; letter-spacing: -0.3px;
  }
  .desc {
    font-size: 15px; color: #CBD5E1; line-height: 1.6; margin-bottom: 24px;
  }
  .ed-pills { display: flex; gap: 10px; }
  .ed-badge {
    background: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 8px; padding: 8px 14px; font-size: 12px; font-weight: 700; color: #FFFFFF;
  }
  /* Right Live Classroom Card */
  .classroom-card {
    width: 440px; background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(250, 204, 21, 0.35);
    backdrop-filter: blur(20px); border-radius: 24px; padding: 30px;
    position: relative; z-index: 2; box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
  }
  .card-top-ed {
    display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;
  }
  .mentor-avatar {
    width: 52px; height: 52px; border-radius: 50%; background: #FACC15; color: #1E3A8A;
    display: flex; align-items: center; justify-content: center; font-size: 26px; font-weight: 900;
  }
  .live-badge {
    background: #EF4444; color: white; font-size: 11px; font-weight: 800;
    padding: 5px 12px; border-radius: 20px;
  }
  .lesson-title { font-size: 20px; font-weight: 800; color: #FFFFFF; margin-bottom: 4px; }
  .lesson-sub { font-size: 13px; color: #93C5FD; margin-bottom: 18px; }
  .ed-stats {
    display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
    background: rgba(30, 41, 59, 0.6); border-radius: 12px; padding: 14px;
  }
  .ed-stat-val { font-size: 20px; font-weight: 900; color: #FACC15; }
  .ed-stat-lbl { font-size: 11px; color: #94A3B8; text-transform: uppercase; margin-top: 2px; }
</style>
</head>
<body>
  <div class="math-pattern"></div>
  <div class="left-hero">
    <div class="edtech-pill">🎓 E-LEARNING & MENTORSHIP</div>
    <div class="logo-title">Online <span>Tutor</span></div>
    <div class="tagline">Find Expert Mentors & Schedule 1-on-1 Lessons</div>
    <div class="desc">A dedicated learning hub connecting ambitious students with specialized tutors for interactive online lessons, curriculum pacing, and collaborative resource sharing.</div>
    <div class="ed-pills">
      <div class="ed-badge">👨‍🏫 Verified Tutors</div>
      <div class="ed-badge">📅 Live Scheduling</div>
      <div class="ed-badge">📚 Resource Archives</div>
    </div>
  </div>
  <div class="classroom-card">
    <div class="card-top-ed">
      <div class="mentor-avatar">👨‍🏫</div>
      <div class="live-badge">● LIVE CLASSROOM</div>
    </div>
    <div class="lesson-title">Advanced Web Engineering</div>
    <div class="lesson-sub">Session #14 • JavaScript & Full Stack Architecture</div>
    <div class="ed-stats">
      <div><div class="ed-stat-val">4.9 / 5.0 ★</div><div class="ed-stat-lbl">Mentor Rating</div></div>
      <div><div class="ed-stat-val">240+ Students</div><div class="ed-stat-lbl">Active Learners</div></div>
    </div>
  </div>
</body>
</html>`;
}

// 6. CINEMATE - Dark Navy & Golden Amber Movie Discovery (Cinema Ticket, Gold IMDb Star, Film Showcase)
function getCinemateHTML() {
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  * { margin:0; padding:0; box-sizing:border-box; font-family:'Inter', -apple-system, sans-serif; }
  body {
    width: 1200px; height: 675px;
    background: linear-gradient(135deg, #0B0F19 0%, #151C2C 50%, #060910 100%); /* Real CineMate Colors */
    position: relative; overflow: hidden;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 80px; color: #FFFFFF;
  }
  .spotlight {
    position: absolute; top: -100px; right: 200px; width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(255, 180, 0, 0.15) 0%, transparent 70%);
    pointer-events: none; filter: blur(40px);
  }
  .left-hero { max-width: 520px; z-index: 2; position: relative; }
  .cinema-pill {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(255, 180, 0, 0.12); border: 1px solid #FFB400;
    color: #FFB400; padding: 6px 14px; border-radius: 30px;
    font-size: 12px; font-weight: 800; letter-spacing: 0.8px; margin-bottom: 20px;
  }
  .logo-title {
    font-size: 64px; font-weight: 900; letter-spacing: -1.5px; line-height: 1.05;
    color: #FFFFFF; margin-bottom: 12px;
  }
  .logo-title span { color: #FFB400; }
  .tagline {
    font-size: 22px; font-weight: 700; color: #F1F5F9; margin-bottom: 14px; letter-spacing: -0.3px;
  }
  .desc {
    font-size: 15px; color: #94A3B8; line-height: 1.6; margin-bottom: 24px;
  }
  .cinema-pills { display: flex; gap: 10px; }
  .c-badge {
    background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 8px; padding: 8px 14px; font-size: 12px; font-weight: 700; color: #FFFFFF;
  }
  /* Right Movie Showcase Ticket */
  .movie-ticket {
    width: 440px; background: #151C2C; border: 1px solid rgba(255, 180, 0, 0.35);
    border-radius: 24px; padding: 30px; position: relative; z-index: 2;
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6), 0 0 30px rgba(255, 180, 0, 0.12);
  }
  .ticket-poster {
    width: 100%; height: 180px; background: linear-gradient(135deg, #1E2638, #0B0F19);
    border-radius: 16px; display: flex; align-items: center; justify-content: center;
    font-size: 72px; margin-bottom: 18px; position: relative; border: 1px solid rgba(255, 255, 255, 0.08);
  }
  .rating-badge {
    position: absolute; top: 12px; right: 12px;
    background: #FFB400; color: #000000; font-size: 12px; font-weight: 900;
    padding: 4px 10px; border-radius: 6px;
  }
  .movie-h { font-size: 22px; font-weight: 800; color: #FFFFFF; margin-bottom: 4px; }
  .movie-dir { font-size: 13px; color: #94A3B8; margin-bottom: 16px; }
  .movie-meta {
    display: flex; justify-content: space-between; align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 14px;
  }
  .genres { display: flex; gap: 6px; }
  .genre-pill {
    background: rgba(255, 255, 255, 0.06); font-size: 11px; padding: 4px 8px;
    border-radius: 4px; color: #CBD5E1; font-weight: 600;
  }
  .btn-watch {
    background: #FFB400; color: #000000; border: none; padding: 8px 16px;
    border-radius: 8px; font-size: 12px; font-weight: 800;
  }
</style>
</head>
<body>
  <div class="spotlight"></div>
  <div class="left-hero">
    <div class="cinema-pill">🎬 TMDB MOVIE DATABASE</div>
    <div class="logo-title">Cine<span>Mate</span></div>
    <div class="tagline">Explore Trending Movies & Curate Custom Watchlists</div>
    <div class="desc">A cinema discovery web application integrating RESTful film databases, ratings, synopsis previews, and personalized movie collections.</div>
    <div class="cinema-pills">
      <div class="c-badge">⭐ Live IMDb Scores</div>
      <div class="c-badge">🍿 Custom Watchlists</div>
      <div class="c-badge">🔍 Search REST API</div>
    </div>
  </div>
  <div class="movie-ticket">
    <div class="ticket-poster">
      <span class="rating-badge">★ 8.9 / 10</span>
      🎬
    </div>
    <div class="movie-h">Oppenheimer (2023)</div>
    <div class="movie-dir">Directed by Christopher Nolan • Universal Pictures</div>
    <div class="movie-meta">
      <div class="genres">
        <span class="genre-pill">Drama</span>
        <span class="genre-pill">Biography</span>
        <span class="genre-pill">IMAX</span>
      </div>
      <button class="btn-watch">+ Watchlist</button>
    </div>
  </div>
</body>
</html>`;
}

// 7. EMPLOYEE PROJECT MANAGEMENT - Enterprise CPMS Banner (Exact match to Image 2: White/Blue Header, Dashboard + Mobile)
function getEmployeePMSHTML() {
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  * { margin:0; padding:0; box-sizing:border-box; font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
  body {
    width: 1200px; height: 675px;
    background: #F8FAFC;
    position: relative; overflow: hidden;
    display: flex; flex-direction: column; align-items: center;
    padding: 30px 40px; color: #0F172A;
  }
  .banner-header {
    text-align: center; margin-bottom: 25px;
  }
  .banner-super {
    font-size: 38px; font-weight: 900; letter-spacing: 2px; color: #1E40AF;
    text-transform: uppercase; margin-bottom: 4px;
  }
  .banner-sub {
    font-size: 16px; font-weight: 600; color: #475569; letter-spacing: 1px;
  }
  .mockup-stage {
    width: 100%; flex: 1; display: flex; gap: 24px; position: relative;
  }
  /* Desktop Dashboard Card */
  .desktop-dashboard {
    flex: 1; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 18px;
    padding: 24px; box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);
    display: flex; flex-direction: column; gap: 18px;
  }
  .dash-top-bar {
    display: flex; justify-content: space-between; align-items: center;
    border-bottom: 1px solid #F1F5F9; padding-bottom: 14px;
  }
  .dash-logo {
    display: flex; align-items: center; gap: 10px; font-size: 18px; font-weight: 800; color: #1E40AF;
  }
  .dash-logo-icon {
    width: 32px; height: 32px; background: #2563EB; border-radius: 8px;
    color: white; display: flex; align-items: center; justify-content: center; font-size: 16px;
  }
  .metrics-quad {
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px;
  }
  .metric-card-pms {
    background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 14px;
  }
  .pms-val { font-size: 26px; font-weight: 900; color: #0F172A; }
  .pms-lbl { font-size: 11px; font-weight: 600; color: #64748B; margin-top: 2px; }
  .dash-main-area {
    display: grid; grid-template-columns: 200px 1fr; gap: 18px; flex: 1;
  }
  .donut-card {
    background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px;
    display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 16px;
  }
  .donut-circle {
    width: 100px; height: 100px; border-radius: 50%;
    border: 12px solid #2563EB; border-top-color: #F59E0B; border-right-color: #10B981;
    display: flex; align-items: center; justify-content: center; font-size: 22px; font-weight: 900;
  }
  .chart-card {
    background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 16px;
    display: flex; flex-direction: column; justify-content: space-between;
  }
  /* Mobile Companion Mockup */
  .mobile-companion {
    width: 250px; background: #FFFFFF; border: 4px solid #CBD5E1; border-radius: 28px;
    padding: 16px 14px; box-shadow: 0 20px 40px rgba(15, 23, 42, 0.1);
    display: flex; flex-direction: column; gap: 12px;
  }
  .mob-notch { width: 60px; height: 10px; background: #CBD5E1; border-radius: 5px; margin: 0 auto 6px auto; }
  .mob-h { font-size: 13px; font-weight: 800; color: #0F172A; }
  .mob-task-card {
    background: #F1F5F9; border-left: 3px solid #2563EB; border-radius: 6px; padding: 8px 10px;
    font-size: 11px; font-weight: 700; color: #1E293B;
  }
</style>
</head>
<body>
  <div class="banner-header">
    <div class="banner-super">MANAGEMENT SYSTEM</div>
    <div class="banner-sub">Plan • Collaborate • Track • Deliver</div>
  </div>
  <div class="mockup-stage">
    <div class="desktop-dashboard">
      <div class="dash-top-bar">
        <div class="dash-logo">
          <div class="dash-logo-icon">⚙</div>
          <span>CPMS Dashboard</span>
        </div>
        <div style="font-size: 12px; color: #64748B; font-weight: 600;">Sprint 14 • Q4 Release</div>
      </div>
      <div class="metrics-quad">
        <div class="metric-card-pms"><div class="pms-val">24</div><div class="pms-lbl">Active Projects</div></div>
        <div class="metric-card-pms"><div class="pms-val" style="color:#2563EB;">156</div><div class="pms-lbl">Tasks Done</div></div>
        <div class="metric-card-pms"><div class="pms-val" style="color:#F59E0B;">9</div><div class="pms-lbl">In Review</div></div>
        <div class="metric-card-pms"><div class="pms-val" style="color:#10B981;">98%</div><div class="pms-lbl">On-Time Rate</div></div>
      </div>
      <div class="dash-main-area">
        <div class="donut-card">
          <div class="donut-circle">24</div>
          <div style="font-size: 11px; font-weight: 700; color: #475569; margin-top: 8px;">Project Overview</div>
        </div>
        <div class="chart-card">
          <div style="display:flex; justify-content:space-between; font-size:12px; font-weight:700; color:#475569;">
            <span>Team Workload Analytics</span><span>Delivery Status</span>
          </div>
          <svg width="100%" height="80" viewBox="0 0 400 80">
            <polyline fill="none" stroke="#2563EB" stroke-width="3" points="10,60 80,45 160,50 240,25 320,35 390,15"/>
            <polyline fill="none" stroke="#10B981" stroke-width="2" stroke-dasharray="4 4" points="10,70 80,55 160,40 240,35 320,25 390,20"/>
          </svg>
        </div>
      </div>
    </div>
    <div class="mobile-companion">
      <div class="mob-notch"></div>
      <div class="mob-h">My Tasks (Today)</div>
      <div class="mob-task-card">Sprint Retrospective • 10:00 AM</div>
      <div class="mob-task-card" style="border-left-color:#F59E0B;">API Database Integration</div>
      <div class="mob-task-card" style="border-left-color:#10B981;">Review PR #142 Merged</div>
    </div>
  </div>
</body>
</html>`;
}

const projects = [
  { name: 'kunulink.png', getHTML: getKunuLinkHTML },
  { name: 'mediroute.png', getHTML: getMediRouteHTML },
  { name: 'shopease.png', getHTML: getShopEaseHTML },
  { name: 'dreamhome.png', getHTML: getDreamHomeHTML },
  { name: 'onlinetutor.png', getHTML: getOnlineTutorHTML },
  { name: 'cinemate.png', getHTML: getCinemateHTML },
  { name: 'employeemanagement.png', getHTML: getEmployeePMSHTML }
];

projects.forEach((item, idx) => {
  const tempHtml = path.join(__dirname, `temp_bespoke_${idx}.html`);
  const outPng = path.join(OUTPUT_DIR, item.name);
  
  fs.writeFileSync(tempHtml, item.getHTML());
  
  console.log(`Generating bespoke cover for ${item.name}...`);
  try {
    execSync(`"${CHROME_PATH}" --headless=new --disable-gpu --window-size=1200,675 --screenshot="${outPng}" "file:///${tempHtml.replace(/\\/g, '/')}"`);
    console.log(`✓ Rendered ${item.name}`);
  } catch (err) {
    console.error(`Failed ${item.name}:`, err.message);
  } finally {
    if (fs.existsSync(tempHtml)) {
      fs.unlinkSync(tempHtml);
    }
  }
});

console.log('All 7 bespoke cover pages generated successfully!');

