import React from 'react';
import useTitle from '../../Hooks/UseTitle';

const Blog = () => {

    useTitle('Blog')

    return (
        <div>
          
   <section class="blog-area pb-5">
   <div class="container">
      <div class="row justify-content-center">
         <div class="col-lg-4 col-md-8 col-sm-10">
            <div class="single-blog blog-style-one">
               <div class="blog-image">
                  {/* <a href="javascript:void(0)"
                     ><img src="https://cdn.ayroui.com/1.0/images/blog/1.jpg" alt="Blog"
                     /></a> */}
                  {/* <a href="javascript:void(0)" class="category">Technology</a> */}
               </div>
               <div class="blog-content">
                  <h5 class="blog-title">
                     {/* <a href="javascript:void(0)"> */}
                     Budget-Friendly Design Ideas to Transform Your Office
                     {/* </a> */}
                  </h5>
                  <span><i class="lni lni-calendar"></i> Mar 23, 2022</span>
                  <span><i class="lni lni-comments-alt"></i> 24 Comment</span>
                  <p class="text">
                     Create a workspace your team will love with these money-saving
                     interior Ui/Ux design tips Learn how People.
                  </p>
                  {/* <a class="more" href="javascript:void(0)">READ MORE</a> */}
               </div>
            </div>
            {/* <!-- single blog --> */}
         </div>
         <div class="col-lg-4 col-md-8 col-sm-10">
            <div class="single-blog blog-style-one">
               <div class="blog-image">
                  {/* <a href="javascript:void(0)"
                     ><img src="https://cdn.ayroui.com/1.0/images/blog/2.jpg" alt="Blog"
                     /></a> */}
                  {/* <a href="javascript:void(0)" class="category">Lifestyle</a> */}
               </div>
               <div class="blog-content">
                  <h5 class="blog-title">
                     {/* <a href="javascript:void(0)"> */}
                     Budget-Friendly Design Ideas to Transform Your Office
                     {/* </a> */}
                  </h5>
                  <span><i class="lni lni-calendar"></i> Mar 23, 2022</span>
                  <span><i class="lni lni-comments-alt"></i> 24 Comment</span>
                  <p class="text">
                     Create a workspace your team will love with these money-saving
                     interior Ui/Ux design tips Learn how People.
                  </p>
                  {/* <a class="more" href="javascript:void(0)">READ MORE</a> */}
               </div>
            </div>
            {/* <!-- single blog --> */}
         </div>
         <div class="col-lg-4 col-md-8 col-sm-10">
            <div class="single-blog blog-style-one">
               <div class="blog-image">
                  {/* <a href="javascript:void(0)" */}
                    {/* //  ><img src="https://cdn.ayroui.com/1.0/images/blog/3.jpg" alt="Blog" */}
                    {/* //  /></a> */}
                  {/* <a href="javascript:void(0)" class="category">Science</a> */}
               </div>
               <div class="blog-content">
                  <h5 class="blog-title">
                     {/* <a href="javascript:void(0)"> */}
                     Budget-Friendly Design Ideas to Transform Your Office
                     {/* </a> */}
                  </h5>
                  <span><i class="lni lni-calendar"></i> Mar 23, 2022</span>
                  <span><i class="lni lni-comments-alt"></i> 24 Comment</span>
                  <p class="text">
                     Create a workspace your team will love with these money-saving
                     interior Ui/Ux design tips Learn how People.
                  </p>
                  {/* <a class="more" href="javascript:void(0)">READ MORE</a> */}
               </div>
            </div>
            {/* <!-- single blog --> */}
         </div>
      </div>
      {/* <!-- row --> */}
   </div>
   {/* <!-- container --> */}
   
</section>
{/* <!--====== BLOG PART ENDS ======--> */}
        </div>
    );
};

export default Blog;