import { scroller } from "react-scroll";

export const handleScrollNavigation = (
  location,
  navigate,
  id = null,
  path = null,
) => {
  const offset = window.innerWidth < 768 ? -140 : 0;

  const scrollToId = () => {
    if (id) {
      scroller.scrollTo(id, {
        duration: 800,
        smooth: "easeInOutQuart",
        offset: offset,
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (path) {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  if (location.pathname !== "/") {
    navigate("/");
    setTimeout(scrollToId, 100);
  } else {
    scrollToId();
  }
};
