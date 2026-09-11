const testimonials = document.querySelectorAll(".testimonial");

if (testimonials.length > 1) {

    let currentTestimonial = 0;

    setInterval(() => {

        testimonials[currentTestimonial].classList.remove("testimonial-active");

        currentTestimonial =
            (currentTestimonial + 1) % testimonials.length;

        testimonials[currentTestimonial].classList.add("testimonial-active");

    }, 15000);

}