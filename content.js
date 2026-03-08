const removeRecommendations = () => {
    const related = document.querySelector("#related");
    if (related) related.remove();

    const grid = document.querySelector("ytd-rich-grid-renderer");
    if (grid) grid.remove();
};

const observer = new MutationObserver(removeRecommendations);

observer.observe(document.body, {
    childList: true,
    subtree: true
});

removeRecommendations();