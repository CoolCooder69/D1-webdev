import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CircleQuestionMark, PencilLine } from "lucide-react";
import { useState } from "react";
import CreatePost  from "@/components/CreatePost"; 
import CreateQue from "@/components/CreateQue";

const Post = () => {

    const [post, setPost] = useState(true);  
    

  return (
    <>
      <div className="w-full h-dvh p-10 flex flex-col justify-start items-center gap-5">
        <div>
            <h1 className="text-2xl"> Share your thoughts. </h1>
        </div>
        <div>
          <Tabs defaultValue={"Post"} >
            <TabsList>
              <TabsTrigger className={"text-xl"} value={"Post"} onClick={() => setPost(true)}>
                <PencilLine></PencilLine>
                Post
              </TabsTrigger>

              <TabsTrigger className={"text-xl"} value={"Que"} onClick={()=> setPost(false)}>
                <CircleQuestionMark> </CircleQuestionMark>
                Questions
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div>
            {post ? <CreatePost/> : <CreateQue/>}
        </div>
      </div>
    </>
  );
};

export default Post;
