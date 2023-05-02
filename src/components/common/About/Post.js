import PostCard from "./PostCard";
import {config} from "./PostConfig";
import Quote from "../../../assets/images/Steps (1).png";

function Post () {

  return (
    <div className="post container mx-auto mb-[180px] pt-2 px-4">
      <h1 className="text-[#333333] text-4xl sm:text-6xl text-center font-bold leading-[54px] mt-[20px] mb-[54px]">CE-APCC Implementation Stages</h1>
      <img src={Quote} alt="Quote" className="mx-auto m-4"/>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {config.map((item, index) => <PostCard key={index} path={item.path} title={item.title} description={item.description} />)}
      </div>
    </div>
  )
}

export default Post;