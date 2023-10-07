function DetailItem ({ data }) {
  return(
    <div className={`detail-item detail-${data.id} skin-${data.skin} px-4 md:px-0 py-6 md:py-9 lg:py-[3.25rem]`}>
      <div className={`container content-wrapper mx-auto flex`}>
        <div className="content w-100 md:w-3/5 lg:w-1/2">
          <div className="detail-title text-[28px] md:text-[36px] text-[#C2C2C2] flex leading-none mb-3 md:mb-[20px]">
            <div className="numb text-black mr-[5px] mt-[2px] text-[.5em]">{data.id}</div>
            {data.title}
          </div>
          <div className="detail-desc text-[15px] md:text-[20px] leading-[17.58px] md:leading-[28px]">{data.desc}</div>
        </div>
      </div>
    </div>
  );
}

export default DetailItem;