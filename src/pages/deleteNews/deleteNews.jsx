import { useForm } from "react-hook-form";
import { Button } from "../../components/button/Button";
import { ContainerDel } from "./deleteNewsStyled";
import { useNavigate, useParams } from "react-router-dom";
import { deleteNews } from "../../services/newsServices";

export function DeleteNews() {
    const { id } = useParams();

    const {
        handleSubmit: handleSubmitSim,
      } = useForm({});
    
      const {
        handleSubmit: handleSubmitNao,
      } = useForm({});
    
    const navigate = useNavigate();
    
    async function naoHandleSubmit() {
        try {
          navigate("/profile");
        } catch (error) {}
    }
    
    async function simHandleSubmit() {
        try {
        await deleteNews(id)
          navigate("/profile");
        } catch (error) {}
      }

  return (
    <>
      <ContainerDel>
        <h1>Deletar noticia?</h1>
        <div>
          <form onSubmit={handleSubmitSim(simHandleSubmit)}>
            <Button type="submit" text="Sim"/>
          </form>
          <form onSubmit={handleSubmitNao(naoHandleSubmit)}>
            <Button type="submit" text="Não" />
          </form>
        </div>
      </ContainerDel>
    </>
  );
}
