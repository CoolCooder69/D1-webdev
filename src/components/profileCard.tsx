import ProfilePhoto from "./profile";

interface ProfileCardProp {
  userName: string  
}

const ProfileCard = ({userName} : ProfileCardProp) => (
  <section className="flex-1 w-full text-lg flex justify-center">
    <div className="border shadow-2xl shrink-0 w-4/12 h-96 rounded-lg flex justify-start items-center p-2">
      <ProfilePhoto
        imageUrl="https://i.pinimg.com/474x/55/1f/ff/551fff636303fb8a696c213736ddc09e.jpg"
        userName="Ravneet"
      />

      <div className="h-full flex-1 flex flex-col justify-center gap-1 text-center p-5 overflow-y-auto">
        <span className="text-3xl">{userName}</span>
        <span className="text-sm">2510994789</span>
        <p className="text-gray-500">
          I'm {userName}, a software engineering student with a strong interest
          and experience in web development. I have worked with technologies
          such as React, Tailwind CSS, Next.js, and other modern web
          development tools.
        </p>
      </div>
    </div>
  </section>
);

export default ProfileCard;