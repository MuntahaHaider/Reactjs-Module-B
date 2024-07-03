import React from 'react'
import style from './Profile.module.css'
function Profile() {
  return (
    <div className={style.flex}>
      <div><img  src="https://echooling-react.vercel.app/static/media/testimonial.b4a97b69f2bf8c02fc4f.png" alt="" /></div>
      <div>
        <h3>Justin Case</h3>
        <p>Student</p>
        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
         Suscipit nihil repellat omnis culpa molestias magnam deleniti <br />
          voluptas inventore quae dignissimos perferendis, veniam veritatis. <br />
           At, officiis  <br />consequatur! Quibusdam exercitationem maxime quae harum dolores.</h6>
      </div>
    </div>
  )
}

export default Profile