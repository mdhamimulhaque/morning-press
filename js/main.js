//! ========== load categories data ==========
const loadCategory = async () => {
    try {
        const res = await fetch(`https://openapi.programming-hero.com/api/news/categories`)
        const data = await res.json()
            .then(data => showCategories(data?.data?.news_category))
    } catch (err) {
        console.log(err)
    }
}
loadCategory()

const categoriesWrapper = document.getElementById('category_wrapper');

//* ========== show categories data ==========
const showCategories = (categories) => {
    categories.forEach(category => {
        // console.log(category.category_id)
        const categoryItem = document.createElement('li');
        categoryItem.classList.add('nav-item', 'mx-3')
        categoryItem.innerHTML = `
        <a onclick='singleCategoryDataLoad(${category?.category_id})' class="nav-link hover_text" href="#">${category?.category_name}</a>
        `;
        categoriesWrapper.appendChild(categoryItem);
    })

}

//! ========== single category's data load==========
const singleCategoryDataLoad = async (id) => {
    // console.log(id)
    try {
        const res = await fetch(`https://openapi.programming-hero.com/api/news/category/0${id}`)
        const data = await res.json()
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}
