// import 'antd/dist/antd.css';

import { Card } from "../card";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import { Pagination } from "antd";

import { ServiceApiComics } from "../../services/Comics";
import { useCallback, useEffect, useState } from "react";

import "./styles.scss";
import { LoadingPage } from "../loading-page";
import { Button } from "../button";
import { DetailsModal } from "../modal-comic";

const PAGE_SIZE = 8;

export function Footer() {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(PAGE_SIZE);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(0);
  const [isDetailsModal, setDetailsModal] = useState(false);
  const [comicId, setComicId] = useState(0);

  const getDataAllComics = useCallback(
    async (offset) => {
      try {
        setLoading(true);

        const responseData = await ServiceApiComics.getAllComics(limit, offset);
        setComics(responseData.results);
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

  useEffect(() => {
    getDataAllComics(offset);
  }, [offset]);

  return (
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
              <div className="content-card">
                <div key={comic.id} className="row-list-cards">
                  <Card image={`${path}.${extension}`} title={comic.title} />
                </div>
                <p onClick={() => handleOpenModal(comic.id)}>Detalhes</p>
              </div>
            );
          })
        ) : (
          <LoadingPage />
        )}

        {isDetailsModal &&
        (
          <DetailsModal
            comicId={comicId}
            isOpen={isDetailsModal}
            onRequestClose={() => setDetailsModal(false)}
          />
        )}
      </div>
    </footer>
  );
}
