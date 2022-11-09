import React from 'react';
import useTitle from '../../Hooks/UseTitle';

const Blog = () => {

    useTitle('Blog')

    return (
        <div>
          
   <section class="blog-area pb-5">
   <div class="container mt-5 pt-5 bg-dark-50">
      <div class="row justify-content-center">
         <div class="col-lg-4 col-md-8 col-sm-10">
            <div class="single-blog blog-style-one">
               <div class="blog-image">
                  {/* <a href="javascript:void(0)"
                     ><img src="https://cdn.ayroui.com/1.0/images/blog/1.jpg" alt="Blog"
                     /></a> */}
                  {/* <a href="javascript:void(0)" class="category">Technology</a> */}
               </div>
               <div class="blog-content border shadow">
                  <h5 class="blog-title p-3 ">
                     {/* <a href="javascript:void(0)"> */}
                   what is the difference between SQL and NoSQL?
                     {/* </a> */}
                  </h5>
                  <span><i class="lni lni-calendar"></i> Mar 23, 2022</span>
                  <span><i class="lni lni-comments-alt"></i> 24 Comment</span>
                  <p class="text fs-6">
                  SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
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
               <div class="blog-content border shadow">
                  <h5 class="blog-title p-3">
                     {/* <a href="javascript:void(0)"> */}
                     What is JWT, and how does it work?
                     {/* </a> */}
                  </h5>
                  <span><i class="lni lni-calendar"></i> Mar 23, 2022</span>
                  <span><i class="lni lni-comments-alt"></i> 24 Comment</span>
                  <p class="text fs-6 pt-5">
                  JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally sign
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
               <div class="blog-content border shadow">
                  <h5 class="blog-title p-3">
                     {/* <a href="javascript:void(0)"> */}
                     What is the difference between javascript and NodeJS?
                     {/* </a> */}
                  </h5>
                  <span><i class="lni lni-calendar"></i> Mar 23, 2022</span>
                  <span><i class="lni lni-comments-alt"></i> 24 Comment</span>
                  <p class="text fs-6 pt-1">
                  JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
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
               <div class="blog-content border shadow">
                  <h5 class="blog-title p-3">
                     {/* <a href="javascript:void(0)"> */}
                     How does NodeJS handle multiple requests at the same time?
                     {/* </a> */}
                  </h5>
                  <span><i class="lni lni-calendar"></i> Mar 23, 2022</span>
                  <span><i class="lni lni-comments-alt"></i> 24 Comment</span>
                  <p class="text fs-6 pt-1">
                  How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
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