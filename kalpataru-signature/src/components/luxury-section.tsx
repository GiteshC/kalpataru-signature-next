import Image from "next/image"

interface LuxurySectionProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  backgroundColor?: "white" | "gray"
  layout?: "single" | "double"
}

export default function LuxurySection({
  title,
  description,
  imageSrc,
  imageAlt,
  backgroundColor = "white",
  layout = "single",
}: LuxurySectionProps) {
  const bgClass = backgroundColor === "gray" ? "bg-gray-50" : "bg-white"

  return (
    <section className={`py-20 ${bgClass}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">{description}</p>
        </div>
        <div className="relative h-[600px] rounded-lg overflow-hidden">
          <Image src={imageSrc || "/placeholder.svg"} alt={imageAlt} fill className="object-cover" />
        </div>
      </div>
    </section>
  )
}
