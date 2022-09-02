//! ========== load categories data ==========
const loadCategory = async () => {
    try {
        const res = await fetch(`https://openapi.programming-hero.com/api/news/categories`)
        const data = res.json()
            .then(data => showCategories(data.data.news_category))
    } catch (err) {
        console.log(err)
    }
}

const categoriesWrapper = document.getElementById('category_wrapper');

//* ========== show categories data ==========
const showCategories = (categories) => {
    categories.forEach(category => {
        // console.log(category.category_id)
        const categoryItem = document.createElement('li');
        categoryItem.classList.add('nav-item', 'mx-3')
        categoryItem.innerHTML = `
        <a class="nav-link hover_text" href="#">${category.category_name}</a>
        `;
        categoriesWrapper.appendChild(categoryItem);
    })

}
loadCategory()