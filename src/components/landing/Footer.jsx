import { Camera, Users, Music2, X as XIcon, Mail, MapPin, Sun, ArrowRight } from "lucide-react";

const socialIcons = [
  { icon: Camera, href: "#", label: "Instagram" },
  { icon: Music2, href: "#", label: "TikTok" },
  { icon: Users, href: "#", label: "Facebook" },
  { icon: XIcon, href: "#", label: "X" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="relative pt-20 pb-10 overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "linear-gradient(160deg,#5B21B6,#7C3AED 55%,#EC4899 100%)" }}
      />
      <div className="blob w-[300px] h-[300px] -bottom-20 -right-10" style={{ background: "#F59E0B", opacity: 0.35 }} />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="glass !bg-white/10 !border-white/20 rounded-[2rem] p-8 sm:p-12 mb-14 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
            พร้อมมาเป็นครอบครัวเดียวกันหรือยัง?
          </h2>
          <p className="text-white/80 max-w-lg mx-auto mb-8">
            กดเข้าร่วมเพื่อรับข่าวสารกิจกรรมและเป็นส่วนหนึ่งของ NU Christian Club
          </p>
          <a href="#" className="inline-flex items-center gap-2 bg-white text-pine-800 rounded-full px-7 py-3.5 font-semibold hover:-translate-y-0.5 transition-transform shadow-lg">
            Join Club <ArrowRight size={17} />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-white/85 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center">
                <Sun size={16} className="text-white" />
              </div>
              <p className="font-display font-bold text-white">NU Christian Club</p>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Find Home.
              <br />
              Find Hope.
              <br />
              Find Christ.
            </p>
          </div>

          <div>
            <p className="font-semibold text-white mb-4 text-sm tracking-wide">SOCIAL</p>
            <div className="flex gap-2.5">
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold text-white mb-4 text-sm tracking-wide">CONTACT</p>
            <a href="mailto:hello@nuct.club" className="flex items-center gap-2 text-sm mb-3 hover:text-white">
              <Mail size={15} /> hello@nuct.club
            </a>
            <p className="flex items-center gap-2 text-sm">
              <MapPin size={15} /> มหาวิทยาลัยนเรศวร
            </p>
          </div>

          <div>
            <p className="font-semibold text-white mb-4 text-sm tracking-wide">EXPLORE</p>
            <div className="flex flex-col gap-2.5 text-sm">
              <a href="#activities" className="hover:text-white">Activities</a>
              <a href="#gallery" className="hover:text-white">Gallery</a>
              <a href="#team" className="hover:text-white">Team</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/15 pt-6 text-center text-white/60 text-xs">
          © {year} NU Christian Club — The PR
        </div>
      </div>
    </footer>
  );
}
