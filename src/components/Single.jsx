const Single = ({ result }) => {
  const { title, name, cover_image } = result;

  return (
    <div>
      <img src={cover_image} alt="" />
      <div>{title}</div>
      <div>{name}</div>
    </div>
  );
};

export default Single;
