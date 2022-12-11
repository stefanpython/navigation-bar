function dropDownTemplate() {
  const dropBtn = document.querySelectorAll(".dropbtn");
  const aLinks = document.querySelectorAll("a");

  // Keep links active when hovering over them
  aLinks.forEach((item) => {
    item.addEventListener("mouseover", (e) => {
      const container = document.querySelector(
        `[data-num="${e.target.dataset.link}"]`
      );

      if (container !== null) {
        container.style.display = "block";
      }

      item.addEventListener("mouseleave", (e) => {
        const container = document.querySelector(
          `[data-num="${e.target.dataset.link}"]`
        );
        if (container !== null) {
          container.style.display = "none";
        }
      });
    });
  });

  dropBtn.forEach((elem) => {
    // Show dropList when clicking button
    if (elem.dataset.target && elem.dataset.target === "clickItem") {
      elem.addEventListener("click", (e) => {
        const container = document.querySelector(
          `[data-num="${e.target.dataset.id}"]`
        );
        if (!container.style.display || container.style.display === "none") {
          container.style.display = "block";
        } else {
          container.style.display = "none";
        }
      });

      // Show dropList when hovering over button
    } else if (elem.dataset.target && elem.dataset.target === "hoverItem") {
      elem.addEventListener("mouseover", (e) => {
        const container = document.querySelector(
          `[data-num="${e.target.dataset.id}"]`
        );

        if (!container.style.display || container.style.display === "none") {
          container.style.display = "block";
        }

        elem.addEventListener("mouseleave", (e) => {
          const container = document.querySelector(
            `[data-num="${e.target.dataset.id}"]`
          );

          if (!container.style.display || container.style.display === "block") {
            container.style.display = "none";
          }
        });
      });
    }
  });
}

dropDownTemplate();
