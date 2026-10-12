interface GalleryCardProps {
  ImgUrl: string;
}

const GalleryCard = ({ ImgUrl }: GalleryCardProps) => (
  <div className="rounded-lg overflow-hidden">
    <img className="h-full w-full object-cover" src={ImgUrl} alt="photo" />
  </div>
);

export default GalleryCard;