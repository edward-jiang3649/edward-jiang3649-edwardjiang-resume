document.addEventListener("DOMContentLoaded", function() {
    const presentationSlides = 33;
    const processDiarySlides = 30;

    const presentationContainer = document.getElementById("presentation-slides");
    const processDiaryContainer = document.getElementById("process-diary-slides");

    // Function to generate slides
    function generateSlides(container, slideCount, folderName) {
        for (let i = 1; i <= slideCount; i++) {
            const slide = document.createElement("button");
            slide.classList.add("fade", "mySlides");
            slide.innerHTML = `
                <div class="numbertext">${i} / ${slideCount}</div>
                <img src="Files/${folderName}/${i}.jpg" alt="${folderName} Slide ${i}" style="width:100%">
            `;
            container.appendChild(slide);
        }
    }

    // Generate slides for both presentations
    generateSlides(presentationContainer, presentationSlides, "UNSW FADA3030 Presentation Slides");
    generateSlides(processDiaryContainer, processDiarySlides, "UNSW FADA3030 Process");
});
