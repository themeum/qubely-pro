window.addEventListener("DOMContentLoaded", (event) => {
    const modalButtons = document.querySelectorAll(".qubely-block-modal-link");
    const modalCloseButtons = document.querySelectorAll(".qubely-block-modal-close-btn");
    const modalBoxes = document.querySelectorAll(".qubely-modal-box");

    // Handle modal button click event
    modalButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const mainWrapper = event.target.closest(".wp-block-qubely-modal");
            mainWrapper.setAttribute("style", "z-index:999;");
            mainWrapper.querySelector(".qubely-modal-popup").setAttribute("style", "display:flex;");
        });
    });

    // Handle close button click event
    modalCloseButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const closeAnimationName = button.closest(".qubely-modal-box").getAttribute("closeAnimation");
            const openAnimationName = button.closest(".qubely-modal-box").style.animationName;
            button.closest(".qubely-modal-box").style.animationName = closeAnimationName;
            button.closest(".qubely-modal-popup").style.opacity = 0;
            setTimeout(() => {
                button.closest(".qubely-modal-popup").setAttribute("style", "display:none;");
                button.closest(".wp-block-qubely-modal").setAttribute("style", "z-index:0;");
                button.closest(".qubely-modal-box").setAttribute("style", `animation-name:${openAnimationName};`);
            }, 400);
        });
    });

    // Handle click outside modal box
    document.addEventListener('click', (event) => {
        modalBoxes.forEach((modalBox) => {
            if (modalBox.parentElement.style.display === "flex") {
                const mainWrapper = event.target.closest(".wp-block-qubely-modal");
                if (mainWrapper) {
                    if (!modalBox.contains(event.target) && event.target !== mainWrapper.querySelector(".qubely-block-modal-link")) {
                        const closeAnimationName = modalBox.getAttribute("closeAnimation");
                        const openAnimationName = modalBox.style.animationName;
                        modalBox.style.animationName = closeAnimationName;
                        modalBox.closest(".qubely-modal-popup").style.opacity = 0;
                        setTimeout(() => {
                            modalBox.closest(".qubely-modal-popup").setAttribute("style", "display:none;");
                            modalBox.closest(".wp-block-qubely-modal").setAttribute("style", "z-index:0;");
                            modalBox.setAttribute("style", `animation-name:${openAnimationName};`);
                        }, 400);
                    }
                }
            }
        });
    });

    // Handle escape key press
    document.addEventListener("keydown", (event) => {
        let keyCode = event.code;
        if (keyCode === "Escape") {
            modalBoxes.forEach((modalBox) => {
                if (modalBox.parentElement.style.display === "flex") {
                    const closeAnimationName = modalBox.getAttribute("closeAnimation");
                    const openAnimationName = modalBox.style.animationName;
                    modalBox.style.animationName = closeAnimationName;
                    modalBox.closest(".qubely-modal-popup").style.opacity = 0;
                    setTimeout(() => {
                        modalBox.closest(".qubely-modal-popup").setAttribute("style", "display:none;");
                        modalBox.closest(".wp-block-qubely-modal").setAttribute("style", "z-index:0;");
                        modalBox.setAttribute("style", `animation-name:${openAnimationName};`);
                    }, 400);
                }
            });
        }
    });
});