import Banner from "./Banner";
import ParticlesBg from "./ParticlesBg";

const HeroSection = () => {
    return (
        <section id="home"
            className="
        relative
        bg-minBg
        pt-20
        text-white
        lg:pt-0
      "
        >
            {/* Particle Background */}

            <div className="absolute inset-0 z-0">
                <ParticlesBg
                    particleColors={[
                        "#13bbff",
                        "#13bbff",
                    ]}
                    particleCount={300}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>

            <div
                className="
          relative
          z-10
          flex
          h-screen
          items-center
        "
            >
                <Banner />
            </div>
        </section>
    );
};

export default HeroSection;