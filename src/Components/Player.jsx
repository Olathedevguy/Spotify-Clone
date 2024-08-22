import { useRef, useState, useEffect } from "react";
import { assets, songsData } from "../assets/assets";

const Player = () => {
    const imgRef = useRef(null);
    const [bgColor, setBgColor] = useState('#FFFFFF');

    useEffect(() => {
        const imgElement = imgRef.current;
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        imgElement.onload = () => {
            // Set canvas dimensions to the image's dimensions
            canvas.width = imgElement.width;
            canvas.height = imgElement.height;

            // Draw the image on the canvas
            ctx.drawImage(imgElement, 0, 0, canvas.width, canvas.height);

            // Get image data
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;

            let r = 0, g = 0, b = 0;
            const totalPixels = data.length / 4;

            // Loop through each pixel, summing up the RGB values
            for (let i = 0; i < data.length; i += 4) {
                r += data[i];
                g += data[i + 1];
                b += data[i + 2];
            }

            // Calculate the average RGB values
            r = Math.floor(r / totalPixels);
            g = Math.floor(g / totalPixels);
            b = Math.floor(b / totalPixels);

            // Set the background color
            setBgColor(`rgb(${r}, ${g}, ${b})`);
        };
    }, []);

    return (
        <div className="h-[10%] flex justify-between items-center text-white px-4" style={{ backgroundColor: bgColor }}>
            <div className="flex items-center gap-4">
                <img ref={imgRef} className="w-12 inset-0 backdrop-blur-lg" src={songsData[0].image} alt="" />
                <div>
                    <p>{songsData[0].name}</p>
                    <p>{songsData[0].desc.slice(0, 12)}</p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-1 m-auto">
                <div className="flex gap-4 ">
                    <img className="w-4 cursor-pointer hidden md:flex" src={assets.shuffle_icon} alt="" />
                    <img className="w-4 cursor-pointer hidden md:flex" src={assets.prev_icon} alt="" />
                    <img className="w-4 cursor-pointer ml-[190px] md:ml-0" src={assets.play_icon} alt="" />
                    <img className="w-4 cursor-pointer hidden md:flex" src={assets.next_icon} alt="" />
                    <img className="w-4 cursor-pointer hidden md:flex" src={assets.loop_icon} alt="" />
                </div>
                <div className="hidden md:flex items-center gap-5">
                    <p>1:06</p>
                    <div className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
                        <hr className="h-1 border-none w-0 bg-green-400 rounded-full" />
                    </div>
                    <p>{songsData[0].duration}</p>
                </div>
            </div>
            <div className="hidden lg:flex items-center gap-2 opacity-75 ">
                <img className="w-4" src={assets.plays_icon} alt="" />
                <img className="w-4" src={assets.mic_icon} alt="" />
                <img className="w-4" src={assets.queue_icon} alt="" />
                <img className="w-4" src={assets.speaker_icon} alt="" />
                <img className="w-4" src={assets.volume_icon} alt="" />
                <div className="w-20 bg-slate-50 h-1 rounded"></div>
                <img className="w-4" src={assets.mini_player_icon} alt="" />
                <img className="w-4" src={assets.zoom_icon} alt="" />
            </div>
        </div>
    );
};

export default Player;
