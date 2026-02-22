import { scroller } from "react-scroll";

export const handleScrollNavigation = (
  location,
  navigate,
  id = null,
  path = null,
) => {
  if (path) {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  if (location.pathname !== "/") {
    navigate("/");
    setTimeout(() => {
      if (id) {
        scroller.scrollTo(id, {
          duration: 800,
          smooth: "easeInOutQuart",
          offset: -80,
        });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 100);
  } else {
    if (id) {
      scroller.scrollTo(id, {
        duration: 800,
        smooth: "easeInOutQuart",
        offset: -80,
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
};
