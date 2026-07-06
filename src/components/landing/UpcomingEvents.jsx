import { ArrowRight, MapPin } from "lucide-react";
import { upcomingEvents } from "../../data/content";
import { useReveal } from "../../hooks/useReveal";

function EventRow({ e, index }) {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${index + 1} flex items-center gap-5 p-5 sm:p-6 rounded-3xl bg-white border border-line hover:border-pine-100 hover:shadow-lg transition-all duration-300`}
    >
      <div className="shrink-0 w-16 h-16 rounded-2xl flex flex-col items-center justify-center text-white font-display"
           style={{ background: "var(--gradient-brand)" }}>
        <span className="text-xl font-bold leading-none">{e.day}</span>
        <span className="text-[10px] tracking-widest mt-1">{e.month}</span>
      </div>
      <div className="min-w-0">
        <p className="font-semibold text-gray-900 truncate">{e.title}</p>
        <p className="text-[13px] text-gray-500 flex items-center gap-1 mt-0.5">
          <MapPin size={12} /> {e.location}
        </p>
      </div>
    </div>
  );
}

export default function UpcomingEvents() {
  const ref = useReveal();
  return (
    <section className="section">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div ref={ref} className="reveal text-center mb-12">
          <div className="badge mb-5">Upcoming Event</div>
          <h2 className="section-title">อีเวนต์ที่กำลังจะมาถึง</h2>
        </div>

        <div className="space-y-4 mb-10">
          {upcomingEvents.map((e, i) => (
            <EventRow key={e.title} e={e} index={i} />
          ))}
        </div>

        <div className="text-center">
          <button className="btn-secondary mx-auto">
            View All Activities <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
