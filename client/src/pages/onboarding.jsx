import React, { useState } from "react";
import Image from 'next/image';
import { useStateProvider } from "@/context/StateContext";

function Onboarding() {
  const [{ userInfo }] = useStateProvider();
  const [name, setName] = useState(userInfo?.name || "");
  const [about, setAbout] = useState("");
  const [image, setImage] = useState("/default_avatar.png");

  return (
    <div className="bg-panel-header-background h-screen w-screen text-white flex flex-col items-center justify-center gap-8">
      <div className="flex items-center justify-center gap-4">
        <Image src="/whatsapp.gif" alt="ChatLH" height={100} width={100} />
        <span className="text-5xl">ChatLH</span>
      </div>
      <h2 className="text-2xl mb-4">Create your profile</h2>
      <div className="flex flex-col items-center gap-4 w-3/4 md:w-1/2 lg:w-1/3">
        <div className="flex flex-col items-start w-full">
          <label className="mb-1 text-gray-400">Display Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-input-background text-start focus:outline-none text-white h-10 rounded-lg px-5 py-4 w-full"
          />
        </div>
        <div className="flex flex-col items-start w-full">
          <label className="mb-1 text-gray-400">About</label>
          <input
            type="text"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            className="bg-input-background text-start focus:outline-none text-white h-10 rounded-lg px-5 py-4 w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Onboarding;

// import React, { useState } from "react";
// import Image from 'next/image';
// import { useStateProvider } from "@/context/StateContext";
// import Input from "@/components/common/Input";

// function onboarding() {
//   const [{ userInfo }] = useStateProvider();
//   const [name,setName] =useState(userInfo?.name ||"");
//   const [about,setAbout] =useState("");
//   const[image,setImage] = useState("/default_avatar.png");
//   return <div className="bg-panel-header-background h-screen w-screen text-white flex fle-col items-center justify-center ">
//     <div className="flex item-center justify-center gap-2">
//       <Image src="/whatsapp.gif" alt="ChatLH" height={300} width={300} />
//       <span className="text-7xl">ChatLH</span>
//     </div>
//     <h2 className="text-2xl">Create your profile</h2>
//     <div className="flex gap-6 mt-6">
//       <div className="flex flex-col items-center justify-center mt-5 gap-6">
//         <Input name="Display Name" state={name} setState ={setName} label/>
//         <Input name="About" state={about} setState={setAbout} label/>
//       </div>
//     </div>
//   </div>;
// }

// export default onboarding;
