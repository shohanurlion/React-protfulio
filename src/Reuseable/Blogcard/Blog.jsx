import React from 'react'
import './Blog.css'
import { Col } from 'react-bootstrap';
import blogimg from '../../assets/img/blog-1.jpg'
import { IoPeopleOutline } from "react-icons/io5";
import { MdWebAsset } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { IoIosChatboxes } from "react-icons/io";
 function Blog() {
  return (
   <>
   <Col sm={12} md={11}>
   <div class="blog-item">
          <div class="blog-img">
            <img src={blogimg} alt="website template image"/>
          </div>
          <div class="blog-text">
            <h2>Lorem ipsum dolor sit amet</h2>
            <div className="blog-meta">
              <p><IoPeopleOutline className='blogicon' />Admin</p>
              <p><MdWebAsset className='blogicon' />Web Design</p>
              <p><SlCalender className='blogicon' />01-Jan-2045</p>
              <p><IoIosChatboxes className='blogicon' />5</p>
            </div>
            <p>Lorem ipsum dolor sit amet elit. Nullam commodo mattis mi. Nullam eu erat lectus. Proin viverra risus vitae luctus. Proin ut ante, vitae sapien. Fusce sem ac erat rhoncus, ornare mattis nisl massa et eros vitae pulvin</p>
            <a className="btn" href="#">Read More</a>
            </div>
        </div>
   </Col>
    
   </>
  )
}
export default Blog;