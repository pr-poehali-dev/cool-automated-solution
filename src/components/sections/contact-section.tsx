import { useReveal } from "@/hooks/use-reveal"
import Icon from "@/components/ui/icon"

export function ContactSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:gap-16 lg:gap-24">
          <div className="flex flex-col justify-center">
            <div
              className={`mb-6 transition-all duration-700 md:mb-10 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
              }`}
            >
              <h2 className="mb-2 font-sans text-4xl font-light leading-[1.05] tracking-tight text-foreground md:mb-3 md:text-7xl lg:text-8xl">
                Свяжитесь
                <br />
                с нами
              </h2>
              <p className="font-mono text-xs text-foreground/60 md:text-base">/ Оценим бесплатно</p>
            </div>

            <div className="space-y-5 md:space-y-8">
              {/* Phone */}
              <a
                href="tel:+79087762775"
                className={`group block transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <Icon name="Phone" size={12} className="text-foreground/60" />
                  <span className="font-mono text-xs text-foreground/60">Телефон</span>
                </div>
                <p className="text-base text-foreground transition-colors group-hover:text-foreground/70 md:text-2xl">
                  +7 (908) 776-27-75
                </p>
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/+79087762775"
                target="_blank"
                rel="noopener noreferrer"
                className={`group block transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <Icon name="Send" size={12} className="text-foreground/60" />
                  <span className="font-mono text-xs text-foreground/60">Telegram</span>
                </div>
                <p className="text-base text-foreground transition-colors group-hover:text-foreground/70 md:text-2xl">
                  Написать в Telegram
                </p>
              </a>

              {/* Address */}
              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <Icon name="MapPin" size={12} className="text-foreground/60" />
                  <span className="font-mono text-xs text-foreground/60">Адрес</span>
                </div>
                <p className="text-base text-foreground md:text-xl">
                  Усолье-Сибирское, ул. Республики 8В
                </p>
                <p className="font-mono text-xs text-foreground/50 mt-1">Автовокзал</p>
              </div>

              {/* Hours */}
              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <Icon name="Clock" size={12} className="text-foreground/60" />
                  <span className="font-mono text-xs text-foreground/60">Режим работы</span>
                </div>
                <p className="text-base text-foreground md:text-xl">Пн–Вс, 9:00 – 20:00</p>
                <p className="font-mono text-xs text-foreground/50 mt-1">Без перерывов и выходных</p>
              </div>
            </div>
          </div>

          {/* Right side - Info block */}
          <div className="flex flex-col justify-center space-y-6 md:space-y-10">
            {[
              {
                icon: "TrendingUp",
                title: "Платим выше конкурентов",
                desc: "Предложим цену выше — или объясним почему. Честно и открыто.",
                delay: "200ms",
              },
              {
                icon: "BadgeCheck",
                title: "Цены по факту",
                desc: "Оцениваем каждую позицию на месте. Никаких скрытых вычетов.",
                delay: "350ms",
              },
              {
                icon: "Zap",
                title: "Расчёт сразу",
                desc: "Деньги наличными или на карту — в момент сдачи.",
                delay: "500ms",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex items-start gap-4 transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: item.delay }}
              >
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-foreground/20 bg-foreground/10">
                  <Icon name={item.icon} size={14} className="text-foreground/80" />
                </div>
                <div>
                  <p className="font-sans text-base font-medium text-foreground md:text-lg">{item.title}</p>
                  <p className="font-mono text-xs text-foreground/60 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
