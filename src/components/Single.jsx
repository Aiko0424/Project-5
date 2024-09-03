"use client";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const Single = ({ result }) => {
  const { title, cover_image, published_at, body_html } = result;

  return (
    <div className="flex w-screen justify-center mt-[80px]">
      <div className="w-[800px] flex-col justify-start items-center gap-8 inline-flex">
        <div className="self-stretch flex-col justify-start items-start gap-5 flex">
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="self-stretch text-[#181a2a] text-4xl font-semibold font-['Work Sans'] leading-10">
              {title}
            </div>
          </div>
          <div className="justify-start items-center gap-6 inline-flex">
            <div className="justify-start items-center gap-2 flex">
              <img className="w-7 h-7 rounded-[28px]" src="/Profile.png" />
              <div className="text-[#696a75] text-sm font-medium font-['Work Sans'] leading-tight">
                Tracey Wilson
              </div>
            </div>
            <div className="text-[#696a75] text-sm font-normal font-['Work Sans'] leading-tight">
              {formatDate(published_at)}
            </div>
          </div>
        </div>
        <img className="self-stretch h-[462px] rounded-xl" src={cover_image} />

        {/* {body_html} */}

        <div className="self-stretch justify-start items-start gap-2.5 inline-flex">
          <div className="w-[804px] text-[#3b3c4a] text-xl font-normal font-['Source Serif Pro'] leading-loose text-justify">
            Traveling is an enriching experience that opens up new horizons,
            exposes us to different cultures, and creates memories that last a
            lifetime. However, traveling can also be stressful and overwhelming,
            especially if you don't plan and prepare adequately. In this blog
            article, we'll explore tips and tricks for a memorable journey and
            how to make the most of your travels.
            <br />
            <br />
            One of the most rewarding aspects of traveling is immersing yourself
            in the local culture and customs. This includes trying local
            cuisine, attending cultural events and festivals, and interacting
            with locals. Learning a few phrases in the local language can also
            go a long way in making connections and showing respect.
          </div>
        </div>
        <div className="self-stretch h-[364px] flex-col justify-start items-start gap-4 flex mb-[50px]">
          <div className="self-stretch text-[#181a2a] text-2xl font-semibold font-['Work Sans'] leading-7">
            Research Your Destination
          </div>
          <div className="self-stretch text-[#3b3c4a] text-xl font-normal font-['Source Serif Pro'] leading-loose text-justify">
            Before embarking on your journey, take the time to research your
            destination. This includes understanding the local culture, customs,
            and laws, as well as identifying top attractions, restaurants, and
            accommodations. Doing so will help you navigate your destination
            with confidence and avoid any cultural faux pas.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. In
            hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum
            faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod
            elementum nisi quis eleifend quam adipiscing vitae. Viverra
            adipiscing at in tellus.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
