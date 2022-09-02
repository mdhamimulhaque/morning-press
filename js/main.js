//! ========== load categories data ==========
const loadCategory = async () => {
    try {
        const res = await fetch(`https://openapi.programming-hero.com/api/news/categories`)
        const data = await res.json()
        showCategories(data?.data?.news_category)
    } catch (err) {
        console.log(err)
    }
}
loadCategory()



//* ========== show categories data ==========
const categoriesWrapper = document.getElementById('category_wrapper');

const showCategories = (categories) => {
    categories.forEach(category => {
        const categoryItem = document.createElement('li');
        categoryItem.classList.add('nav-item', 'mx-3')
        categoryItem.innerHTML = `
        <a onclick='singleCategoryDataLoad(${category?.category_id})' class="nav-link hover_text" href="#">${category?.category_name}</a>
        `;
        categoriesWrapper.appendChild(categoryItem);
    })

}

//! ========== single category's data load ==========
const singleCategoryDataLoad = async (id) => {
    try {
        const res = await fetch(`https://openapi.programming-hero.com/api/news/category/0${id}`)
        const data = await res.json()
        singleCategoryDataShow(data.data)
    } catch (err) {
        console.log(err)
    }
}


//* ========== single category's data load ==========
const newsRow = document.getElementById('news_row');

const singleCategoryDataShow = (SingleCategoryAllData) => {
    newsRow.innerHTML = '';
    document.querySelector('.post_count').innerText = `${SingleCategoryAllData.length}`;
    // ---> category 
    SingleCategoryAllData.forEach(category => {
        const newsItemColumn = document.createElement('div');
        newsItemColumn.classList.add('col-md-6', 'col-lg-6', 'col-xl-4');
        newsItemColumn.innerHTML = `
        <div class="news_box mb-4" data-bs-toggle="modal" data-bs-target="#newsdetails" onclick="categoryDetailsDataLoad('${category._id}')">
            <div class="card">
                <img src="${category?.image_url}" class="card-img-top" alt="image">
                <div class="card-body">
                    <h5 class="card-title post_title">${category?.title.slice(0, 60)}...</h5>
                    <p class="card-text">${category?.details.slice(0, 200)}...</p>

                    <div class="author_info_box d-flex align-items-center justify-content-between">
                        <div class="author_info_wrapper d-flex align-items-center">
                            <div class="author_img">
                                <img src="${category?.author?.img}"    alt="image">
                            </div>
                            <div class="ms-2 author_name">
                                    By <strong id="name">${category?.author?.name ? category?.author?.name : "No Name found"}</strong>
                                <div class="author_published_date">
                                    <i class="fa-regular fa-clock me-1"></i>
                                    <span>${category?.author?.published_date}</span>
                                </div>
                            </div>
                        </div>

                        <div class="total_view">
                            <i class="fa-regular fa-eye me-1"></i>
                            <span>${category?.total_view ? category?.total_view : "No view yet"}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        newsRow.appendChild(newsItemColumn);

    })
}


//! ==========  category details data load ==========

const categoryDetailsDataLoad = async (newsId) => {
    // console.log(newsId)
    const res = await fetch(`https://openapi.programming-hero.com/api/news/${newsId}`)
    const data = await res.json()
    console.log(data.data)
}










// singleCategoryDataLoad(8)
