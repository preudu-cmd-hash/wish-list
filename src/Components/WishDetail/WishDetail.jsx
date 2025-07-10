import { useNavigate, useParams } from "react-router";
import { useWishs } from "../../Hooks/useWishs";
import { useEffect, useState } from "react";
import { formatDate } from "../../utils/FormatDate";

export const WishDetail = () => {
  const { id } = useParams();
  const { wishs, loading, setLoading } = useWishs();
  const [wishDetail, setWishDetail] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    if (id && wishs.length > 0) {
      const foundWish = wishs.find((wish) => wish.id == parseInt(id));
      setWishDetail(foundWish);
    }
    setLoading(false);
  }, [wishs, id]);

  if (loading) {
    return <h1>Carregando...</h1>;
  }

  const handleEditToggle = () => {
    console.log("clicou");
  };

  return (
    <>
      <div>
        <button onClick={() => navigate(-1)}>Voltar</button>
        <h1>Detalhes do desejo com o id: {id}</h1>
        <button onClick={handleEditToggle}>Editar</button>
        <p>{wishDetail.name}</p>
        <img
          width={200}
          height={150}
          src={wishDetail.urlImage}
          alt={wishDetail.name}
        />
        <p>{wishDetail.description}</p>
        <p>{formatDate(wishDetail.date)}</p>
      </div>
    </>
  );
};
