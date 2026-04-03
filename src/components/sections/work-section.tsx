import { useReveal } from "@/hooks/use-reveal"

const items = [
  {
    number: "01",
    title: "Радиодетали СССР",
    category: "Микросхемы, транзисторы, конденсаторы, резисторы",
    year: "СССР и импорт",
    direction: "left",
    image: "https://cdn.poehali.dev/projects/39420f36-b403-4b48-85a2-f3ac8a201009/bucket/ba7e7fca-6aff-483a-90c2-e2ad50bf0a32.png",
  },
  {
    number: "02",
    title: "Позолоченные детали",
    category: "Транзисторы и микросхемы с золотым напылением",
    year: "Любое состояние",
    direction: "right",
    image: "https://cdn.poehali.dev/projects/39420f36-b403-4b48-85a2-f3ac8a201009/bucket/7c235bf4-25aa-4f25-96da-699d8deeef56.png",
  },
  {
    number: "03",
    title: "Платы и приборы",
    category: "Материнские платы, радиоприборы СССР",
    year: "Оптом и в розницу",
    direction: "left",
    image: "https://cdn.poehali.dev/projects/39420f36-b403-4b48-85a2-f3ac8a201009/bucket/eeb2e732-ce0e-46f7-b928-d9b22ee2f1d1.png",
  },
  {
    number: "04",
    title: "Микросхемы оптом",
    category: "Чипы, ИС, логика — любые партии",
    year: "Дорого",
    direction: "right",
    image: "https://cdn.poehali.dev/projects/39420f36-b403-4b48-85a2-f3ac8a201009/bucket/60da53b2-51bb-4c32-89ce-8b25f89ba60d.png",
  },
]

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-8 transition-all duration-700 md:mb-10 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Принимаем
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Всё, что у вас есть</p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {items.map((item, i) => (
            <PhotoCard key={i} item={item} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PhotoCard({
  item,
  index,
  isVisible,
}: {
  item: typeof items[0]
  index: number
  isVisible: boolean
}) {
  const getRevealClass = () => {
    if (!isVisible) return "opacity-0 translate-y-10"
    return "opacity-100 translate-y-0"
  }

  return (
    <div
      className={`group relative overflow-hidden rounded-xl transition-all duration-700 ${getRevealClass()}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="aspect-[3/4] w-full overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
        <span className="font-mono text-xs text-foreground/50">{item.number}</span>
        <h3 className="font-sans text-sm font-medium text-white md:text-base">{item.title}</h3>
        <p className="font-mono text-xs text-white/60 mt-0.5 leading-tight">{item.category}</p>
        <span className="mt-1 inline-block rounded-full border border-white/20 bg-white/10 px-2 py-0.5 font-mono text-xs text-white/80 backdrop-blur-sm">
          {item.year}
        </span>
      </div>
    </div>
  )
}
