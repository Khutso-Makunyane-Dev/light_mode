import { MdOutlineDesignServices } from "react-icons/md"; // full stack icon
import { LiaLaptopCodeSolid } from "react-icons/lia"; // front-end icon
import { SiMaterialdesignicons } from "react-icons/si"; // backend + database icons
import { SiAntdesign } from "react-icons/si"; // ux/ui design icon
import { SiBlackmagicdesign } from "react-icons/si";
import { CgWebsite } from "react-icons/cg";

export default function Marquee() {
  return (
    <>
      {/* Inline styles for animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .marquee {
            display: flex;
            width: max-content;
            animation: marquee 25s linear infinite;
            will-change: transform;
          }

          .marquee:hover {
            animation-play-state: paused;
          }

          .marquee-item {
            display: flex;
            align-items: center;
            gap: 10px;
           
            background: #0e0e10;
           
            border-radius: 12px;
            margin-right: 1.5rem;
            transition: all 0.3s ease;
            box-shadow: 0 0 10px rgba(17, 218, 209, 0.05);
          }

          .marquee-item:hover {
            transform: scale(1.08);
            box-shadow: 0 0 12px rgba(17, 218, 209, 0.3);
          }
        `}
      </style>

      <div className="relative overflow-hidden w-full p-4  ">
        <div className="marquee">
          {/* Duplicate content twice for infinite loop */}
          {[...Array(2)].map((_, index) => (
            <div key={index} className="flex items-center">
              {/* Full Stack */}
             <div className="flex justify-center items-center gap-5 mr-4 text-white p-4">
                <div className="flex justify-center items-center w-10 h-10 bg-[#18181B] rounded-full">
                    <MdOutlineDesignServices
                    className="text-2xl text-white"
                    style={{
                        filter: "drop-shadow(0 0 1px #ffffff) drop-shadow(0 0 6px rgba(255,255,255,0.8))",
                    }}
                    />
                </div>

                <p className="font-semibold">UX & UI Designer</p>
                </div>


              {/* Front-End */}
                <div className="flex justify-center items-center mr-4 gap-5 text-white p-4">
                    <div className="flex justify-center items-center w-10 h-10 bg-[#18181B] rounded-full">
                        <LiaLaptopCodeSolid
                        className="text-2xl text-white"
                        style={{
                                filter: "drop-shadow(0 0 1px #ffffff) drop-shadow(0 0 6px rgba(255,255,255,0.4))",
                            }}
                        />
                    </div>
                
                    <p className="font-semibold">Full Stack Developer</p>
              </div>

              {/* Back-End */}
                <div className="flex justify-center items-center mr-4 gap-5 text-white p-4">
                    <div className="flex justify-center items-center w-10 h-10 bg-[#18181B] rounded-full">
                        <SiMaterialdesignicons
                        className="text-2xl text-white"
                          style={{
                                filter: "drop-shadow(0 0 1px #ffffff) drop-shadow(0 0 6px rgba(255,255,255,0.4))",
                            }}
                        />
                    </div>
                
                    <p className="font-semibold">User-Centered Design</p>
              </div>

              {/* Database */}
                <div className="flex justify-center items-center mr-4 gap-5 text-white p-4">
                    <div className="flex justify-center items-center w-10 h-10 bg-[#18181B] rounded-full">
                        <CgWebsite
                        className="text-2xl text-white"
                         style={{
                                filter: "drop-shadow(0 0 1px #ffffff) drop-shadow(0 0 6px rgba(255,255,255,0.4))",
                            }}
                        />
                    </div>
                
                    <p className="font-semibold">Modern Web Technologies</p>
              </div>

              <div className="flex justify-center items-center mr-4 gap-5 text-white p-4">
                    <div className="flex justify-center items-center w-10 h-10 bg-[#18181B] rounded-full">
                        <SiBlackmagicdesign
                        className="text-2xl text-white"
                        style={{
                                filter: "drop-shadow(0 0 1px #ffffff) drop-shadow(0 0 6px rgba(255,255,255,0.4))",
                            }}
                        />
                    </div>
                
                    <p className="font-semibold">Scalable Solutions</p>
              </div>

              {/* UX/UI Design */}
                <div className="flex justify-center items-center mr-4 gap-5 text-white p-4">
                    <div className="flex justify-center items-center w-10 h-10 bg-[#18181B] rounded-full">
                        <SiAntdesign
                        className="text-2xl text-white"
                        style={{
                                filter: "drop-shadow(0 0 1px #ffffff) drop-shadow(0 0 6px rgba(255,255,255,0.4))",
                            }}
                        />
                    </div>
                
                    <p className="font-semibold">Clean Design</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
