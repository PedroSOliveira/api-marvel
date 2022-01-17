import Modal from "react-modal";

import { ServiceApiComics } from "../../services/Comics";

import { useCallback, useEffect, useState } from "react";

import thanos from "../../assets/thanos.png";
import disneyImg from "../../assets/disney.png";
import closeImg from "../../assets/close.svg";

import "./styles.scss";

export function DetailsModal({ isOpen, onRequestClose, comicId }) {
  const [comic, setComic] = useState(null);

  const getDataComic = useCallback(
    async (comicId) => {
      if (comicId) {
        try {
          const responseData = await ServiceApiComics.getComic(comicId);
          console.log(responseData);
          setComic(responseData);
          console.log(responseData);
        } catch (error) {
          alert(error.message);
        } finally {
          // setLoading(false);
        }
      }
    },
    [ServiceApiComics]
  );

  useEffect(() => {
    getDataComic(comicId);
  }, [comicId]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <div className="content-modal">
        <img
          className=" image-comic"
          src={`${comic?.thumbnail.path}.${comic?.thumbnail.extension}`}
          alt={comic?.title}
        />

        <div className="details">
          <h1>{comic?.title}</h1>
          <p>{comic?.description}</p>
          {/* <footer className="stream">
            <strong>Streaming:</strong>
            <img className="image-stream" src={disneyImg} alt="Disney" />
          </footer> */}
          {/* <h1>Crítica</h1> */}
          {/* <Rate
            style={{ marginTop: -20, color: "red" }}
            disabled
            value={3}
            defaultValue={3}
          /> */}
        </div>
      </div>

      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        {/* const { path, extension } = comic.thumbnail;
image={`${path}.${extension}`} title={comic.title} */}
        <img className={"image-stream"} src={disneyImg} />
      </button>
    </Modal>
  );
}
