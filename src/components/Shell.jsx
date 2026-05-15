// 🎨 DESIGN HERE: Background, Header, Logo
// เปลี่ยน background image, สี, header layout ได้เลย
import { COLORS, FONTS } from '../constants.js';

export function Shell({ children, phase }) {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      // 🎨 เปลี่ยน background ที่นี่
      // background: COLORS.bgMain,
      backgroundImage: "url('/public/bd_homepage.jpg')", // ใส่ชื่อไฟล์ที่มีอยู่ในโฟลเดอร์ public
      backgroundSize: 'cover',       // ให้รูปขยายเต็มพื้นที่
      backgroundPosition: 'flex-start',  // จัดรูปให้อยู่ตรงกลาง
      backgroundRepeat: 'no-repeat', // ไม่ให้รูปวนซ้ำ
      backgroundAttachment: 'fixed', // (Option) ให้รูปอยู่กับที่เวลา Scroll ดูพรีเมียมขึ้น

      padding: '0 12px 60px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* 🎨 BACKGROUND SCENE — ใส่รูป illustration ที่นี่ */}
      {/* <img src="/bg-bangkok.jpg" style={{ position:'fixed', inset:0, width:'100%', height:'100%', objectFit:'cover', zIndex:0 }} /> */}

      {/* HEADER */}
      <div style={{
        width: '100%', maxWidth: 390, zIndex: 10,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '28px 4px 16px',
      }}>
        {/* 🎨 LOGO — เปลี่ยน font, สี, ขนาด ได้เลย */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {/* ← ใส่ SVG นก หรือ logo image ตรงนี้ */}
          <span style={{
            fontSize: 38,
            color: 'white',
            fontFamily: FONTS.logo,
            fontWeight: 900,
            textShadow: '2px 3px 8px rgba(0,0,0,0.4)',
            letterSpacing: 1,
          }}>
            Lony
          </span>
        </div>
        <div style={{
          fontSize: 10, color: 'rgba(255,255,255,0.88)',
          fontWeight: 700, letterSpacing: 1.5,
          textShadow: '0 1px 4px rgba(0,0,0,0.3)',
        }}>
          LONELINESS RELIEF
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ width: '100%', maxWidth: 390, position: 'relative', zIndex: 10 }}>
        {children}
      </div>

      {/* FOOTER */}
      <div style={{
        fontSize: 10, color: 'rgba(255,255,255,0.72)',
        marginTop: 24, textAlign: 'center', lineHeight: 2,
        zIndex: 10, position: 'relative',
        textShadow: '0 1px 3px rgba(0,0,0,0.3)',
      }}>
        Neuroscience-based · Private 🔒
      </div>
    </div>
  );
}
