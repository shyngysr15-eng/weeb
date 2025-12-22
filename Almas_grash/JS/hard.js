document.addEventListener('DOMContentLoaded', () => {
    // Scroll reveal logic
    const reveals = document.querySelectorAll('.reveal');
    const handleScroll = () => {
        reveals.forEach(el => {
            const top = el.getBoundingClientRect().top;
            if (top < window.innerHeight - 100) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    setTimeout(handleScroll, 100);

    // Interactive Application logic
    const applyBtn = document.querySelector('.btn-apply');
    applyBtn.addEventListener('click', () => {
        const confirmVisit = confirm("CRITICAL: This route requires technical mountaineering skills. Do you have a certified mountain logbook?");
        
        if (confirmVisit) {
            applyBtn.innerText = "Verifying Credentials...";
            applyBtn.style.background = "#555";
            setTimeout(() => {
                alert("Our expedition lead will contact you to schedule a technical assessment.");
                applyBtn.innerText = "Application Sent";
                applyBtn.disabled = true;
            }, 2000);
        } else {
            alert("We recommend starting with our 'Middle' level routes to build your skills!");
        }
    });
});