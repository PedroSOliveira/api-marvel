import { Sidebar } from "../../components/sidebar";

import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { Pagination } from "antd";

import "./styles.scss";
import { Button } from "../../components/button";
import { CurrentLocation } from "../../components/current-location";
import { useCallback, useEffect, useState } from "react";
import { ServiceApiComics } from "../../services/Comics";
import { Card } from "../../components/card";
import { DetailsModal } from "../../components/modal-comic";
import { LoadingPage } from "../../components/loading-page";
import { SendAdress } from "../../components/send-adress";

const PAGE_SIZE = 8;

export function Home() {
  const [comicSend, setComicSend] = useState(null);
  const [comics, setComics] = useState([]);
  const [isFilter, setIsFilter] = useState(false);
  const [title, setTitle] = useState(null);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(PAGE_SIZE);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(0);
  const [isDetailsModal, setDetailsModal] = useState(false);
  const [comicId, setComicId] = useState(0);

  const getDataAllComics = useCallback(
    async (offset, title) => {
      try {
        setLoading(true);

        const responseData = await ServiceApiComics.getAllComics(
          limit,
          offset,
          title
        );
        setComics(responseData.results);

        const comicSend = responseData.results[0];
        setComicSend(comicSend);

        console.log(responseData);
        console.log(comicSend.thumbnail.path);
        setTotal(responseData.total);
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    },
    [ServiceApiComics]
  );

  const handleOpenModal = (id) => {
    setComicId(id);
    setDetailsModal(true);
  };

  const handleFilter = () => {
    getDataAllComics(offset, title);
    setTitle("");
    setIsFilter(!isFilter);
  };

  const handleSendComic = () => toast.success("Quadrinho enviado!!!");

  useEffect(() => {
    getDataAllComics(offset, title);
  }, [offset]);

  return (
    <div className="home">
      <section className="header">
        <div className="header-filter">
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          <input
            value={title}
            placeholder="Buscar quadrinhos"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Button
            title={!isFilter ? "Buscar" : "Limpar"}
            onClick={handleFilter}
          />
        </div>
        <CurrentLocation />
      </section>

      <section className="sidebar">
        <Sidebar />
      </section>

      <section className="main">
        <main className="content">
          <div className="picture-filter">
            {/* <img className="img-content-footer" src={`${comicSend?.thumbnail.path}.${comicSend?.thumbnail.extension}`} alt={comicSend?.title} /> */}
            <div className="content-footer">
              <h1>{comicSend?.title}</h1>
              <Button onClick={handleSendComic} title="Enviar" />
            </div>
          </div>

          <SendAdress />
        </main>

        <footer>
          <div className="header">
            <h1>Top Rated Comics</h1>
            <Pagination
              className="pagination"
              defaultPageSize={limit}
              defaultCurrent={1}
              showSizeChanger={false}
              total={total}
              onChange={(page) => setOffset((page - 1) * limit)}
            />
          </div>

          <div className="movie-list-area">
            {!loading ? (
              comics.map((comic) => {
                const { path, extension } = comic.thumbnail;
                return (
                  <div key={comic.id} className="content-card">
                    <div className="row-list-cards">
                      <Card
                        image={`${path}.${extension}`}
                        title={comic.title}
                      />
                    </div>
                    <p onClick={() => handleOpenModal(comic.id)}>Detalhes</p>
                  </div>
                );
              })
            ) : (
              <LoadingPage />
            )}

            {isDetailsModal && (
              <DetailsModal
                comicId={comicId}
                isOpen={isDetailsModal}
                onRequestClose={() => setDetailsModal(false)}
              />
            )}
          </div>
        </footer>
      </section>
    </div>
  );
}
