import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <section className="one">
          <div className="container">
            <div className="col">
              <h1>Crafting Digital Experiences</h1>
            </div>
            <div className="col">
              <p>
                We design and build modern web experiences that combine clean
                aesthetics, smooth interactions, and exceptional performance.
                Every animation, transition, and micro-interaction is created to
                make the user experience feel natural and engaging.
              </p>
            </div>
          </div>
        </section>

        <section className="two">
          <div className="container">
            <div className="col">
              <div className="img">
                <Image
                  src="/img-1.jpg"
                  alt="image"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            <div className="col">
              <h1 >Creative Design</h1>
              <p>
                Great design is more than beautiful visuals. It creates a
                seamless connection between users and products by combining
                typography, spacing, color, and thoughtful interactions that
                guide attention naturally.
              </p>
            </div>
          </div>
        </section>

        <section className="three">
          <div className="container">
            <div className="col">
              <h1 >Smooth Animations</h1>
              <p>
                Motion adds personality to interfaces. Carefully crafted
                transitions improve usability, provide visual feedback, and make
                every interaction feel responsive without overwhelming the user.
              </p>
            </div>

            <div className="col">
              <div className="img">
                <Image
                  src="/img-2.jpg"
                  alt="image"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="four">
          <div className="container">
            <div className="col">
              <div className="img">
                <Image
                  src="/img-3.jpg"
                  alt="image"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            <div className="col">
              <h1 >Performance Matters</h1>

              <p>
                Fast loading websites create better user experiences. Optimized
                assets, efficient rendering, and responsive layouts ensure every
                visitor enjoys a smooth browsing experience across all devices.
              </p>

              <p>
                From subtle hover effects to complex scroll-based animations,
                every detail should enhance the experience while maintaining
                accessibility and performance as top priorities.
              </p>
            </div>
          </div>
        </section>

        <section className="five">
          <div className="container">
            <div className="col">
              <h1>Built for Everyone</h1>
            </div>

            <div className="col">
              <p>
                Responsive layouts, accessible interfaces, and intuitive
                navigation help create products that work beautifully on
                desktops, tablets, and mobile devices while remaining easy for
                everyone to use.
              </p>
            </div>
          </div>
        </section>

        <section className="six">
          <div className="container">
            <div className="col">
              <h1 >Let's Build Something Amazing</h1>
            </div>

            <div className="col">
              <p>
                Whether you're creating a portfolio, landing page, or complete
                web application, combining thoughtful design with modern
                animation techniques results in memorable digital experiences
                that users enjoy exploring.
              </p>
            </div>
          </div>
        </section>

        <footer>
          <h1>FOOTER</h1>
        </footer>
      </main>
    </>
  );
}
