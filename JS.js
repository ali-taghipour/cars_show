function show(i) {
    big_title2.innerHTML = "ماشین" + i; 
    big_img.src = "car/0" + i + " car.png";
    toz.innerHTML = "توضیحات بیشتر درباره ی ماشین" + "  " + i;
}
i = 0;
function bast() {
    if (i === 0) {
        grid.style.display = "none";
        button.innerHTML = "نمایش بیشتر";
        i = 1;
    }
    else if (i === 1) {
        grid.style.display = "block";
        button.innerHTML = "بستن نمایش بیشتر";
        i = 0;
    }
}