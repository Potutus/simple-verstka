// немножко очень сеньорного кода
const product_type = `<li class="product">
                                    
<div class="product_image">
    <img src="assets/images/testPick.png" alt="image">
</div>

<div class="product_content">

    <span class="product_title">
        <div>
            <h2>
                Title
            </h2>
        </div>
        <div>
            <img 
                class="heart img_svg" 
                src="assets/images/logos/heart.svg" 
                alt="избранное"
            />  
            <img 
                class="three_point img_svg"
                src="assets/images/logos/3-point.svg" 
                alt="more options"
            />
            <div class="collapse-details common_text">
                <ul>
                    <li>some options number one</li>
                    <li>some options number two</li>
                    <li>some options number three</li>
                    <li>
                        <img 
                            class="three_point img_svg"
                            src="assets/images/logos/3-point.svg" 
                            alt="more options"
                        />
                        <div class="collapse-details">
                            <ul>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        
    </span>
    

    <p class="product_description">
        Some text imagine my interest like fish in th Sea? of course its strange for none persons but it me like is
    </p>
    <div class="product_price">
        
            <span>
                <bdi>
                    param2&nbsp;S
                </bdi>                                            
            </span>

            <span>
                param1.
            </span>
        
    </div>
    <a class="product_btn" href="#">
        Button
    </a>

</div>                            

</li>`

const products = document.querySelector(".products")

if(products){
    for( let i = 0; i < 6; i++){
        products.innerHTML += product_type
    }
}

const albumEl = `<li class="album">
<span class="product_title">
<div>
    <h2>
        Title
    </h2>
</div>
<div>                                              
    <img 
        class="three_point img_svg"
        src="assets/images/logos/3-point.svg" 
        alt="more options"
    />
    <div class="collapse-details common_text">
        <ul>
            <li>some options number one</li>
            <li>some options number two</li>
            <li>some options number three</li>
            <li>
                <img 
                    class="three_point img_svg"
                    src="assets/images/logos/3-point.svg" 
                    alt="more options"
                />
                <div class="collapse-details">
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</div>                                        
</span>
<div class="folder">
    <svg version="1.1" class="folder_svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
            viewBox="924 796 200 200" enable-background="new 924 796 200 200" xml:space="preserve">

            
            <g>
                <path class="folder_first" d="M958.787,950.188c7.493-18.661,19.423-50.612,26.914-70.192c2.946-7.701,10.342-12.787,18.587-12.787h89.79v-1.861
                    c0-10.187-8.259-18.445-18.445-18.445h-72.751l-9.535-18.427c-3.169-6.123-9.488-9.969-16.382-9.969h-34.519
                    c-10.188,0-18.446,8.259-18.446,18.446v118.094c0,10.04,6.396,18.425,16.73,18.425
                    C949.971,973.008,954.928,959.797,958.787,950.188z"
                />
            </g>

            <foreignObject class="folder_image_in">
                <img src="assets/images/testPick.png" alt="folder_image" />
            </foreignObject>

            <g>
                <path class="folder_second" d="M1122.661,879.5c-1.415-2.055-3.749-3.282-6.245-3.282h-106.145c-7.547,0-14.315,4.654-17.012,11.703
                    c-6.856,17.92-26.709,69.417-32.99,85.573h115.49c8.798,0,16.038-4.631,21.099-17.645c6.45-16.592,19.95-51.847,26.643-69.342
                    C1124.392,884.177,1124.076,881.555,1122.661,879.5z"
                />
            </g>
     
    </svg>
</div>

</li>`

const albums = document.querySelector(".albums")

if(albums){
    for( let i = 0; i < 6; i++){
        albums.innerHTML += albumEl
    }
}



// БУРГЕР МЕНЮ

const btnBurgerMenu = document.querySelector(".header_burger-btn");
const btnNavbar = document.querySelector(".navbar");

btnBurgerMenu.onclick = function () {
    btnBurgerMenu.classList.toggle("active");
    btnNavbar.classList.toggle("active");
}

// СМЕНА ТЕМЫ

const btnDarkMode = document.querySelector(".dark-mode-btn");

// 1. Проверка темной темы на уровне системных настроек
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ) {
    btnDarkMode.classList.add("dark-mode-btn--active");
	document.body.classList.add("dark");
}

// 2. Проверка темной темы в localStorage
if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
} else if (localStorage.getItem("darkMode") === "light") {
    btnDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove("dark");
}

// Если меняются системные настройки, меняем тему
window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";

        if (newColorScheme === "dark") {
			btnDarkMode.classList.add("dark-mode-btn--active");
			document.body.classList.add("dark");
			localStorage.setItem("darkMode", "dark");
		} else {
			btnDarkMode.classList.remove("dark-mode-btn--active");
			document.body.classList.remove("dark");
			localStorage.setItem("darkMode", "light");
		}
    });

btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle("dark");

    if (isDark) {
        localStorage.setItem("darkMode", "dark");
    } else {
        localStorage.setItem("darkMode", "light");
    }
} 

//more options menu

document.querySelectorAll(".three_point").forEach((btn) => {
    const collapse = btn.nextElementSibling;
    btn.addEventListener("click", () => {
      collapse?.classList.toggle("active");
    });
  });

// svg inliner
// нужнен сервер, браузер на cors ругается

document.querySelectorAll("img.img_svg").forEach(function(img) {
    const imgClass = img.getAttribute("class");
    const imgURL = img.getAttribute("src");

    fetch(imgURL)
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "image/svg+xml");
            let svg = xmlDoc.querySelector("svg");

            if (imgClass) {
                svg.setAttribute("class", imgClass + " replaced-svg");
            }

            svg.removeAttribute("xmlns:a");

            if (!svg.getAttribute("viewBox") && svg.getAttribute("height") && svg.getAttribute("width")) {
                svg.setAttribute("viewBox", "0 0 " + svg.getAttribute("width") + " " + svg.getAttribute("height"));
            }

            img.replaceWith(svg);
        })
        .catch(error => console.error("Error loading SVG:", error));
});



// list menu

document.querySelectorAll("li.menu_item").forEach((li) => {
    li.addEventListener("click", () => {
        if(!li.classList.contains("active")){
            
            document.querySelectorAll("li.menu_item").forEach((li) => {
                li.classList.remove("active")
            })
            
            li.classList.toggle("active")
        }else{
            li.classList.toggle("active")
        }
    })
});

//tag_list

const tag_elem = `
<div class="tag" style="--tag-bg-color:#228B22">
    tag
</div>
`
const tags_list = document.querySelector(".tags_list")
if(tags_list){
    for(let i = 0; i < 30; i++){
        tags_list.innerHTML += tag_elem;
    }
}

// input file

document.querySelectorAll('.input_file input[type="file"]').forEach(function(input) {
    input.addEventListener('change', function() {
        let file = this.files[0];
        this.closest('.input_file').querySelector('.input_file_text').innerHTML = file.name;
    });
});