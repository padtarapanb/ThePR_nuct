import { Heart, Users, Sparkles } from "lucide-react";
import { useReveal } from "../../hooks/useReveal";

const points = [
  { icon: Sparkles, text: "เติบโตในความเชื่อ" },
  { icon: Users, text: "สร้างมิตรภาพ" },
  { icon: Heart, text: "ค้นพบพระเจ้า" },
];

export default function About() {
  const imgRef = useReveal();
  const textRef = useReveal();

  return (
    <section id="about" className="section">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div ref={imgRef} className="reveal relative">
          <div
            className="aspect-[4/5] w-full rounded-[2rem] relative overflow-hidden shadow-xl"
            style={{ background: "linear-gradient(140deg,#EDE4FE,#FCE7F3 55%,#FEF3C7)" }}
          >
            {/* Replace with a real activity photo: public/about-photo.jpg */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Users size={72} className="text-pine-800/25" strokeWidth={1.2} />
            </div>
            <div className="absolute inset-0 border border-white/60 rounded-[2rem]" />
          </div>
          <div className="absolute -bottom-6 -right-6 glass rounded-2xl px-5 py-4 shadow-lg hidden sm:block">
            <p className="font-display text-2xl font-extrabold text-pine-800">100+</p>
            <p className="text-xs text-gray-500">สมาชิกที่กำลังเติบโตไปด้วยกัน</p>
          </div>
        </div>

        <div ref={textRef} className="reveal">
          <div className="badge mb-5">About Us</div>
          <h2 className="section-title">
            We are a family,
            <br />
            not just a club.
          </h2>
          <p className="section-subtitle mb-8">
            เราเชื่อว่ามหาวิทยาลัยไม่ใช่แค่ที่เรียน แต่เป็นที่ที่ทุกคนสามารถเติบโตในความเชื่อ
            สร้างมิตรภาพ และค้นพบพระเจ้า ไม่ว่าคุณจะเพิ่งเริ่มต้นค้นหาคำตอบ หรือเดินทางในความเชื่อมานาน
            ที่นี่มีที่ว่างสำหรับคุณเสมอ
          </p>
          <div className="flex flex-wrap gap-3">
            {points.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-pine-50 text-pine-800 text-sm font-medium">
                <Icon size={15} />
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
