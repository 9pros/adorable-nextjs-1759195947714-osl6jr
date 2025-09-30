import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-4">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
          Professional HVAC Services <br className="hidden sm:inline" />
          <span className="text-blue-600">You Can Trust</span>
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Expert heating, ventilation, and air conditioning services for residential and commercial properties. 
          Licensed technicians, 24/7 emergency service, and energy-efficient solutions.
        </p>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <Link
          href="/services"
          className={buttonVariants({ size: "lg" })}
        >
          Our Services
        </Link>
        <Link
          href="/contact"
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          Get a Free Quote
        </Link>
      </div>
      
      {/* Services Preview */}
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border p-6">
          <div className="mb-4 text-4xl">🔥</div>
          <h3 className="mb-2 text-xl font-bold">Heating Services</h3>
          <p className="text-muted-foreground">
            Furnace repair, installation, and maintenance for optimal winter comfort.
          </p>
        </div>
        <div className="rounded-lg border p-6">
          <div className="mb-4 text-4xl">❄️</div>
          <h3 className="mb-2 text-xl font-bold">Cooling Services</h3>
          <p className="text-muted-foreground">
            Air conditioning repair, installation, and tune-ups for summer relief.
          </p>
        </div>
        <div className="rounded-lg border p-6">
          <div className="mb-4 text-4xl">💨</div>
          <h3 className="mb-2 text-xl font-bold">Indoor Air Quality</h3>
          <p className="text-muted-foreground">
            Air purification, duct cleaning, and ventilation solutions.
          </p>
        </div>
      </div>
    </section>
  )
}