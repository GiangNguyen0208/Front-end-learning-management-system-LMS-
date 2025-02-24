export const scrollContainer = (containerRef, direction) => {
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -432 : 432;
      containerRef.current.scrollLeft += scrollAmount;
    }
  };
  