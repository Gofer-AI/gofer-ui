import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import deepmind from '../../assets/logos/deepmind.png';
import aws from '../../assets/logos/aws.png';
import nvidia from '../../assets/logos/nvidia.png';
import vultr from '../../assets/logos/vultr.png';
import kiro from '../../assets/logos/kiro.png';

const LOGOS = [
  { src: deepmind, alt: 'DeepMind', h: 'h-10' },
  { src: aws,      alt: 'AWS',      h: 'h-14' },
  { src: nvidia,   alt: 'NVIDIA',   h: 'h-16' },
  { src: vultr,    alt: 'Vultr',    h: 'h-10' },
  { src: kiro,     alt: 'Kiro',     h: 'h-12' },
];

export function LogosCarousel() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start', dragFree: true },
    [AutoScroll({ speed: 1.0, stopOnInteraction: false, stopOnMouseEnter: true })],
  );

  return (
    <div className="w-full overflow-hidden" ref={emblaRef}>
      <div className="flex items-center">
        {LOGOS.map((logo, i) => (
          <div
            key={i}
            className="flex-shrink-0 mx-16 flex items-center justify-center opacity-55 hover:opacity-85 transition-opacity duration-300"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className={`${logo.h} w-auto object-contain`}
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
