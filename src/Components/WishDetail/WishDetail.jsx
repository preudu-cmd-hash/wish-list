import { useNavigate, useParams } from "react-router";
import { useWishs } from "../../Hooks/useWishs";
import { useEffect, useState } from "react";
import { formatDate } from "../../utils/FormatDate";
import { AddItemForm } from "../AddItemForm/AddItemForm";

export const WishDetail = () => {
  const { id } = useParams();
  const { wishs, loading, setLoading, form, setForm, setWishs } = useWishs();
  const [wishDetail, setWishDetail] = useState({});
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  useEffect(() => {
    setLoading(true);
    if (id && wishs.length > 0) {
      const foundWish = wishs.find((wish) => wish.id == parseInt(id));
      setWishDetail(foundWish);
      setForm({
        name: foundWish.name,
        description: foundWish.description,
        urlImage: foundWish.urlImage,
        date: foundWish.date || "",
      });
    }
    setLoading(false);
  }, [wishs, id]);

  if (loading) {
    return <h1>Carregando...</h1>;
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    const updWish = { ...form, id: wishDetail.id };
    setWishs((prev) =>
      prev.map((wish) => (wish.id == updWish.id ? updWish : wish))
    );
    setIsEditing(false);
  };

  return (
    <>
      <div>
        <button onClick={() => navigate(-1)}>Voltar</button>
        <button onClick={handleEditToggle}>Editar</button>
        {isEditing ? (
          <>
            <AddItemForm
              handleSubmit={handleUpdate}
              setForm={setForm}
              form={form}
            />
          </>
        ) : (
          <>
            <h1>Detalhes do desejo com o id: {id}</h1>
            <p>{wishDetail.name}</p>
            <img
              width={200}
              height={150}
              src={wishDetail.urlImage}
              alt={wishDetail.name}
            />
            <p>{wishDetail.description}</p>
            <p>{formatDate(wishDetail.date)}</p>
          </>
        )}
      </div>
    </>
  );
};
