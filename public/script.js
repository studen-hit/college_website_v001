gsap.registerPlugin(ScrollTrigger);

const section = document.querySelector(".academic_program_section");
const wrapper = document.querySelector(".academic_scroll_container .wrapper");

if (section && wrapper) {

    const getScrollAmount = () => {
        return wrapper.scrollWidth - window.innerWidth;
    };

    
    const horizontalScroll = gsap.to(wrapper, {
        x: () => -getScrollAmount(),
        ease: "none",

        scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${getScrollAmount()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1
        }
    });


    
gsap.utils.toArray(".program_card").forEach((card) => {

    gsap.fromTo(card,
        {
            opacity: 1,
            scale: 0.88,
            x: 60,
            y: 25,
            filter: "blur(0px)"
        },
        {
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            filter: "blur(0px)",
            ease: "power2.out",

            scrollTrigger: {
                trigger: card,
                containerAnimation: horizontalScroll,
                start: "left 85%",
                end: "left 50%",
                scrub: 0.8
            }
        }
    );

});


   
    gsap.from(".academic_section_heading", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",

        scrollTrigger: {
            trigger: section,
            start: "top 70%",
            toggleActions: "play none none reverse"
        }
    });

}