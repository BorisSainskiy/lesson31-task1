$(() => {
  let headerItem = $(".tabs-header-item");
  headerItem.on("click", function() {
    let dataName = $(this).data("tab");
    let tab = $(`.tabs-content[data-tab="${dataName}"]`);
    $(".tabs-content#active-tab").attr("id", "un-active");
    tab.attr("id", "active-tab");
    headerItem.attr("id", "");
    $(this).attr("id", "active");
  });
  let stars = $(".fa-star");
  let rate = document.body.querySelectorAll(".fa-star");
  stars.on("click", function() {
    $(this).attr("id", "activeStars");
    $(this).addClass("currentActive");
    for (let i = 0; i < rate.length; i++) {
      if (rate[i].classList.contains("currentActive")) {
        break;
      } else {
        rate[i].id = "activeStars";
      }
    }
    // stars.removeClass("currentActive");
  });
  stars.on("click", function() {
    $(this).attr("id", "activeStars");
    $(this).addClass("currentActive");
    for (let i = rate.length - 1; i > 0; i--) {
      if (rate[i].classList.contains("currentActive")) {
        break;
      } else {
        rate[i].id = " ";
      }
    }
    $(this).removeClass("currentActive");
  });
});
