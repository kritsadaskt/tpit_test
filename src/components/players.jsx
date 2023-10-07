import playersImg from '../img/players-image.png'
import playersImgT from '../img/players-tablet-image.png'
import playersImgM from '../img/players-mobile-image.png'

import DetailItem from './detail'

const playersData = [
  {
    id: "01",
    title: "CONNECTION",
    desc: "Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.",
    skin: "light"
  },
  {
    id: "02",
    title: "COLLABORATION",
    desc: "Work with recruiter to increase your chances of finding talented athlete.",
    skin: "med"
  },
  {
    id: "03",
    title: "GROWTH",
    desc: "Save your time, recruit proper athlets for your team.",
    skin: "darker"
  }
]

function PlayersBlock() {
  return (
    <section id="players">
      <div className="image-wrapper container ml-auto mr-0 lg:mx-auto relative">
        <img src={playersImg} alt="" className="hidden lg:block absolute w-4/5 sm:w-3/5 mx-auto right-0" />
        <img src={playersImgT} alt="" className="hidden md:block lg:hidden absolute right-0" />
      </div>
      <div className="title-wrapper bg-white px-4 md:px-0 pt-4 md:pt-[80px]">
        <div className="container mx-auto flex md:pl-5 lg:pl-0">
          <h2 className="title text-[60px] md:text-[80px] text-[#E7E7E7] lg:w-1/2">PLAYERS</h2>
        </div>
      </div>
      <img src={playersImgM} alt="" className="block md:hidden w-[95%] mb-[-60px] md:mb-0 mx-auto" />
      <div className="details hidden md:block">
      {
        playersData.map((playersData) => 
          <DetailItem data={playersData}></DetailItem>
        )
      }
      </div>
      <div className="detail-m block md:hidden pt-12 pb-4 md:pt-[5.5rem]">
        <swiper-container loop={true} pagination={true}>
        {
          playersData.map((item) => {
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

export default PlayersBlock;