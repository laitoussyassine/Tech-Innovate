import SubmitButton from "@/components/resusableComponents/SubmitBuuton";
import Image from "next/image";
import imageProfile from  "../images/profile.png"
export default function Home() {
  return (
    <>
      <div className="text-white grid grid-cols-6 gap-6 my-28 mx-5">
        <div className="lg:col-span-3 col-span-full mb-4">
          <h1 className="text-textSecond font-bold text-2xl mb-4">Hello, i’m</h1>
          <h2 className="text-4xl font-bold w-2/5 mb-4"><span className="text-mainColor">Roy C. Jones</span> web designer</h2>
          <p className="text-textSecond font-semibold w-3/4">We denounce with righteous indignation dislike demoralized by the charms of pleasure</p>
          <SubmitButton className={"w-40 p-2 rounded-lg my-5 "} title={"HIRE ME >"} />
        </div>
        <div className="lg:col-span-3 col-span-full ">
          <Image src={imageProfile} alt="" className="bg-mainColor rounded-full" height={300} width={400} />
        </div>

      </div>
    </>
  );
}
