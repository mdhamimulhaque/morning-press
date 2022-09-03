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
    // --->loader spinner on
    spinnerFunctionality(true)
    newsRow.innerHTML = '';
    // ---> post count show
    document.querySelector('.post_count').innerText = `${SingleCategoryAllData.length}`;
    if (SingleCategoryAllData.length === 0) {
        newsRow.innerHTML = `
        <h2>No News Available</h2>
        `;
    }
    // ---> data sort
    SingleCategoryAllData.sort((a, b) => b.total_view - a.total_view)

    // ---> category 
    SingleCategoryAllData.forEach(category => {
        // ---> description slice
        const descriptionLength = category.details.length;
        let description;
        if (descriptionLength > 50) {
            description = category?.details.slice(0, 150)
        }

        const newsItemColumn = document.createElement('div');
        newsItemColumn.classList.add('col-md-6', 'col-lg-6', 'col-xl-4');
        newsItemColumn.innerHTML = `
        <div class="news_box mb-4" data-bs-toggle="modal" data-bs-target="#newsdetails" onclick="categoryDetailsDataLoad('${category._id}')">
            <div class="card">
                <img src="${category?.image_url ? category?.image_url : "No Image Found"}" class="card-img-top" alt="image">
                <div class="card-body">
                    <h5 class="card-title post_title">${category?.title.slice(0, 60)}...</h5>
                    <p class="card-text">${description}...</p>

                    <div class="author_info_box d-flex align-items-center justify-content-between">
                        <div class="author_info_wrapper d-flex align-items-center">
                            <div class="author_img">
                                <img src="${category?.author?.img ? category?.author?.img : "No Image Found"}" alt="image">
                            </div>
                            <div class="ms-2 author_name">
                                    By <strong id="name">${category?.author?.name ? category?.author?.name : "No Name found"}</strong>
                                <div class="author_published_date">
                                    <i class="fa-regular fa-clock me-1"></i>
                                    <span>${category?.author?.published_date ? category?.author?.published_date : "No Date found"}</span>
                                </div>
                            </div>
                        </div>

                        <div class="total_view">
                            <i class="fa-regular fa-eye me-1"></i>
                            <span>${category?.total_view ? category?.total_view : "No view"}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        newsRow.appendChild(newsItemColumn);
    })
    // ---> loader spinner off
    spinnerFunctionality(false)
}


//! ==========  category details data load ==========
const categoryDetailsDataLoad = async (newsId) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/${newsId}`)
    const data = await res.json()
    categoryDetailsDataShow(data.data)
}


//* ==========  category details data load ==========
const modalBody = document.getElementById('modal_body');
const categoryDetailsDataShow = (categoryInfo) => {
    document.querySelector('.modal-title').innerText = '';
    // ---> description slice
    const descriptionCategoryInfoLength = categoryInfo[0]?.details.length;
    let descriptionCategoryInfo;
    if (descriptionCategoryInfoLength > 50) {
        descriptionCategoryInfo = categoryInfo[0]?.details.slice(0, 400)
    }
    modalBody.innerHTML = `
        <div class="card">          
            <div class="card-body">
            <div class="author_info_box d-flex align-items-center justify-content-between">
            <div class="author_info_wrapper d-flex align-items-center mb-3">
                <div class="author_img">
                    <img src="${categoryInfo[0]?.author?.img}" alt="image">
                </div>
                <div class="ms-2 author_name">
                        By <strong id="name">${categoryInfo[0]?.author?.name ? categoryInfo[0]?.author?.name : "No Name found"}</strong>
                    <div class="author_published_date">
                        <i class="fa-regular fa-clock me-1"></i>
                        <span>${categoryInfo[0]?.author?.published_date ? categoryInfo[0]?.author?.published_date : "No Date Found"}</span>
                    </div>
                </div>
            </div>

            <div class="total_view">
                <i class="fa-regular fa-eye me-1"></i>
                <span>${categoryInfo[0]?.total_view ? categoryInfo[0]?.total_view : "No view"}</span>
            </div>

          </div>
            <h5 class="card-title post_title">${categoryInfo[0]?.title.slice(0, 60)}...</h5>
            <p class="card-text">${descriptionCategoryInfo}...</p>            
            </div>
            <img src="${categoryInfo[0]?.image_url ? categoryInfo[0]?.image_url : "No Image Found"}" class="card-img-bottom" alt="image">
        </div>
    `;

}


// ! ============ loading spinner ===========
const spinnerFunctionality = (isLoading) => {
    const spinnerWrapper = document.querySelector('.spinner_wrapper');
    if (isLoading === true) {
        spinnerWrapper.classList.remove('d-none')
    } else {
        spinnerWrapper.classList.add('d-none')
    }
}


// singleCategoryDataLoad(8)
