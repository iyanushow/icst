import Button from "../atoms/Button";

const items = [
  {
    id: 1,
    title: "MITX-LAUNCHX",
    subtext: "Becoming An Entrepreneur",
    groups: ["Amazon Service", "Martin Caulpepper"],
    imageUrl: "images/feat1.jpg",
  },
  {
    id: 2,
    title: "MITX-LAUNCHX",
    subtext: "Becoming An Entrepreneur",
    groups: ["Amazon Service", "Martin Caulpepper"],
    imageUrl: "images/feat2.jpg",
  },
  {
    id: 3,
    title: "MITX-LAUNCHX",
    subtext: "Becoming An Entrepreneur",
    groups: ["Amazon Service", "Martin Caulpepper"],
    imageUrl: "images/feat3.jpg",
  },
  {
    id: 4,
    title: "MITX-LAUNCHX",
    subtext: "Becoming An Entrepreneur",
    groups: ["Amazon Service", "Martin Caulpepper"],
    imageUrl: "images/feat4.jpg",
  },
];

function FeaturedCourses() {
  return (
    <div className="pt-10">
      <div className="flex justify-between items-center w-full">
        <h3 className="text-2xl leading-7 font-semibold">Featured Courses</h3>
        <Button size="lg" className="bg-teal">
          See all Courses {">"}
        </Button>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-6">
        {items.map(item => (
          <FeatureItem {...item} />
        ))}
      </div>
    </div>
  );
}

export default FeaturedCourses;

type IFeatureItem = {
  imageUrl: string;
  title: string;
  subtext: string;
  groups: string[];
};

function FeatureItem({ imageUrl, title, subtext, groups }: IFeatureItem) {
  return (
    <div className="rounded w-[222px] h-[251px]">
      <figure>
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-[123px] rounded-t"
        />
      </figure>
      <div className="p-2.5 border-[0.2px] border-gray rounded-b">
        <div className="px-4 py-[11px]">
          <h4 className="font-bold text-sm leading-4 text-primary-300">
            {title}
          </h4>
          <h5 className="text-xs font-semibold text-primary-300">{subtext}</h5>
          <div className="pt-[3px]">
            {groups.map((group, i) => (
              <span key={i} className="block text-[11px] leading-4 font-light">
                {group}
              </span>
            ))}
          </div>
        </div>
        <div className="border-t-[0.2px] pt-1 border-gray text-[10px] font-bold leading-4 flex justify-center">
          <button className="pr-[17px] border-r-[0.5px] border-gray text-red">
            See Details
          </button>
          <button className="px-[17px] border-r-[0.5px] border-gray text-yellow">
            Wishlist
          </button>
          <button className="pl-[17px] text-primary-100">Buy</button>
        </div>
      </div>
    </div>
  );
}
