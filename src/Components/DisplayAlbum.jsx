import { useParams } from "react-router-dom"
import Navbar from "./Navbar"
import { albumsData, assets, songsData } from "../assets/assets";
import { PlayerContext } from "../Context/PlayerContext";
import { useContext } from "react";

const DisplayAlbum = () => {

    const {id} = useParams();
    const albumData = albumsData[id];
    const length = 10
    const {playWithId} = useContext(PlayerContext)

  return (
    <>
    <Navbar />
    <div className="mt-10 flex md:gap-8 gap-2 flex-row md:items-end items-center">
        <div>
        
        <img className="w-30 md:w-48 rounded" src={albumData.image} alt="" />
</div>
        <div className="flex flex-col">
            <p>Playlist</p>
            <h2 className="text-2xl font-bold mb-4 md:text-7xl">{albumData.name}</h2>
            <h4 className="text-sm md:text-md">{albumData.desc}</h4>
            <p className="mt-1 text-sm md:text-md">
                <img src={assets.spotify_logo} className="inline-block w-5" alt="" />
                <b>{` `}Spotify{` `}</b>
                •1,323,154
                •<b>{` `}50 song {` `}</b>
                about 2hrs 30mins
            </p>
        </div>
    </div>
    <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p><b className="mr-4">#</b>Title</p>
        <p className="hidden md:block">Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img src={assets.clock_icon} className="m-auto w-4 ml-40 md:ml-[120px]" alt="" />
    </div>
    <hr />
    {
        songsData.map((item, indexNumber) => (
            <div onClick={() => playWithId(item.id)} key={indexNumber} className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer">
                <p className="text-white w-[200px]">
                    <b className="mr-4 text-[#a7a7a7]">{indexNumber+1}</b>
                    <img src={item.image} className="inline w-10 mr-5" alt="" />
                  {
                        item.name.length >= length ? item.name.slice(0, length) + "..." : item.name
                    }
                </p>
                <p className="text-[15px] hidden md:block">{albumData.name}</p>
                <p className="text-[15px] hidden sm:block">5 days ago</p>
                <p className="text-[15px] text-center ml-40 md:ml-0">{item.duration}</p>
            </div>
        ))
    }
    </>
  )
}
export default DisplayAlbum