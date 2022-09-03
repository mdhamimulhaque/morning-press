const blogRow = document.getElementById('blog_row');

blogData.forEach(data => {
    // ---> create blog ui
    const blogCol = document.createElement('div');
    blogCol.classList.add('col-md-6', 'col-xl-4');
    blogCol.innerHTML = `
    <div class="blog_wrapper mt-4">
        <div class="card mb-3">
        <img src='${data.thumb_img}' 
        class='img-fluid'
        />
            <div class="card-body">
                <h5 class="card-title">${data.question}</h5>
                 <p class="card-text">${data.answer}</p>
            </div>
        </div>
    </div>
    `;
    blogRow.appendChild(blogCol)
})