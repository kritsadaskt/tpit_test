import athletsImg from '../img/athlets-image.png'
import athletsImgT from '../img/athlets-tablet-image.png'
import athletsImgM from '../img/athlets-mobile-image.png'

import DetailItem from './detail'
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

const athleteData = [
  {
    id: "01",
    title: "CONNECTION",
    desc: "Connect with coaches directly, you can ping coaches to view profile.",
    skin: "light"
  },
  {
    id: "02",
    title: "COLLABORATION",
    desc: "Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.",
    skin: "med"
  },
  {
    id: "03",
    title: "GROWTH",
    desc: "Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc",
    skin: "dark"
  }
]

function AthletsBlock() {
  return (
    <section id="athlets">
      <div className="image-wrapper container mx-0 lg:mx-auto relative">
        <img src={athletsImg} alt="" className="hidden lg:block absolute w-2/3 sm:w-[530px] top-[30px] left-[60px]" />
        <img src={athletsImgT} alt="" className="hidden md:block lg:hidden absolute top-[75px]" />
      </div>
      <div className="title-wrapper bg-white px-4 md:px-0 pt-3 lg:pt-[40px]">
        <div className="container mx-auto md:justify-end flex">
          <h2 className="title text-[60px] md:text-[80px] text-[#E7E7E7] md:w-3/5 lg:w-1/2">ATHLETS</h2>
        </div>
      </div>
      <img src={athletsImgM} alt="" className="block md:hidden w-3/4 mx-auto mb-[-3rem] md:mb-0" />
      <div className="details hidden md:block">
      {
        athleteData.map((athleteData) => 
          <DetailItem data={athleteData}></DetailItem>
        )
      }
      </div>
      <div className="detail-m block md:hidden pt-12 pb-4 md:pt-[5.5rem]">
        <swiper-container loop={true} pagination={true}>
        {
          athleteData.map((item) => {
            return (
              <swiper-slide>
                <div className={`detail-item detail-${item.id} skin-${item.skin} px-4 md:px-0 pt-6 pb-10 swiper-slide`}>
                  <div className={`container content-wrapper mx-auto flex`}>
                    <div className="content w-100 md:w-3/5 lg:w-1/2">
                      <div className="detail-title text-[28px] text-[#C2C2C2] flex leading-none mb-3">
                        <div className="numb text-black mr-[5px] mt-[2px] text-[.5em]">{item.id}</div>
                        {item.title}
                      </div>
                      <div className="detail-desc text-[15px] leading-[17.58px]">{item.desc}</div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            )
          })
        }
        </swiper-container>
      </div>
    </section>
  )
}

export default AthletsBlock;