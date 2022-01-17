import Modal from "react-modal";

import { ServiceApiComics } from "../../services/Comics";

import { useCallback, useEffect, useState } from "react";

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
        }
      }
    },
    []
  );

  useEffect(() => {
    getDataComic(comicId);
  }, [getDataComic, comicId]);

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
        </div>
      </div>

      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Close" />
      </button>
    </Modal>
  );
}
