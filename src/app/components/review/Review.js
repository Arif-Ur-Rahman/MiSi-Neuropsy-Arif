'use client'
import React,{ useCallback, useContext, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import imageRating from '@/../../public/images/rating.png'
import '@/app/page.module.css'
import '@/app/booking.css'
import '@/app/embala.css'
import '@/app/globals.css'
import '@/app/IdealBankSectionStyles.css'
import '@/app/responsive.css'
import '@/app/styles.css'
const Review = () => {
  const reviews = [
    "Ik ben erg prettig geholpen.",
    "Korte wachttijd en snel resultaat. De behandeling was prettig. Ik had het gevoel dat er naar mij werd geluisterd en al mijn vragen werden beantwoord. Nadat het eerste onderzoek (op mijn aanvraag) geen antwoord gaf voor mijn problemen, werd er door de behandelaar een ander vervolg onderzoek opgezet waar wel duidelijke informatie uit kwam. Goede zaak.",
    "Hele fijn behandelaar. Oog voor de mens en bijbehorende cultuur. Flexibele behandeling, welke nauwkeurig wordt afgesteld op de behoefte van de cliënt. De behandelaar heeft een positieve benadering en complimenteert een gezonde verwerking van emoties. Uitstekend!"
  ]
  const [viewportRef, embla] = useEmblaCarousel({ loop: true, skipSnaps: false })
  const [scrollSnaps, setScrollSnaps] = useState([])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
    embla
  ])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])
  const onSelect = useCallback(() => {
    if (!embla) return
    setSelectedIndex(embla.selectedScrollSnap())
  }, [embla, setSelectedIndex])

  useEffect(() => {
    if (!embla) return
    onSelect()
    setScrollSnaps(embla.scrollSnapList())
    embla.on("select", onSelect)
    setInterval(() => {
      scrollNext()
    }, 5000)
  }, [embla, setScrollSnaps, onSelect])
  return (
    <section id="review" className="text-center py-5">
      <h2 className="quotation text-uppercase" data-aos="fade-up" data-aos-delay="700" data-aos-duration="750" >
        “WE ARE HERE,<br />
        To Treat you with Care”
      </h2>

      <div className="w-100 pt-5 pb-4">
        <h1 className="h1-margin-bottom font-weight-700" data-aos="fade-up" data-aos-delay="700" data-aos-duration="750" >REVIEWS</h1>
        <div className="embla" data-aos="fade-right" data-aos-duration="750" data-aos-delay="600" >
          <div className="embla__viewport" ref={viewportRef}>
            <div className="embla__container">

              {reviews.map((review, index) => (

                <div className="embla__slide" key={index}>
                  <div className="container">
                    <div className="row mb-5">
                      <div className="col-6 offset-3 col-md-4 offset-md-4">
                        <img loading="lazy" src={imageRating.src} alt="rating" className="img-fluid" />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12">
                        <p className="review-text mt-3">{review}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
        {/* <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div> */}
      </div>
    </section>
  )
}

export default Review