import { Sparkles, Moon, Calculator, WalletCardsIcon as Cards, Gem, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Horoscope Reading",
    description: "Daily, weekly & monthly predictions",
    icon: Moon,
  },
  {
    title: "Kundli Analysis",
    description: "Detailed birth chart analysis",
    icon: Sparkles,
  },
  {
    title: "Numerology",
    description: "Numbers & their influence",
    icon: Calculator,
  },
  {
    title: "Tarot Reading",
    description: "Cards reveal your path",
    icon: Cards,
  },
  {
    title: "Gemstone Consultation",
    description: "Find your lucky stone",
    icon: Gem,
  },
  {
    title: "Vastu Shastra",
    description: "Harmonize your space",
    icon: Home,
  },
]

export function ServicesSection() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <service.icon className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Button variant="link" className="text-orange-500 p-0">
                Explore →
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

