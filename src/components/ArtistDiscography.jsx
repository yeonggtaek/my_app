import { useState } from "react";
import PropTypes from "prop-types";
import { LuMinus, LuPlus } from "react-icons/lu";

import albumsData from "../albumsData"; 
import styles from "./ArtistDiscography.module.css";

function Album({ album }) {
  const [open, setOpen] = useState(false);
  return (
    <details key={album.id}>
      <summary onClick={() => setOpen((prev) => !prev)}>
        {album.title}
        {open ? <LuMinus /> : <LuPlus />}
      </summary>
      <ul>
        {album.tracks.map((track, index) => (
          <li key={index}>
            {index + 1}. &quot;{track}&quot;
          </li>
        ))}
      </ul>
    </details>
  );
}

Album.propTypes = {
  album: PropTypes.isRequired,
};

function AlbumList({ albums }) {
  return (
    <div className={styles.albumList}>
      <p className={styles.albumListTitle}>Big Naughty&apos;s Albums</p>
      {albums.map((album) => (
        <Album key={album.title} album={album} />
      ))}
    </div>
  );
}

AlbumList.propTypes = {
  albums: PropTypes.array.isRequired,
};

function ArtistDiscography() {
  return (
    <div className={styles.artistDiscography}>
      <h1>MyTunes</h1>
      <div>
        <img
          className={styles.artistImage}
          src="https://6.soompi.io/wp-content/uploads/image/20230607095502_big-naughty.jpg?s=900x600&e=t"
          alt="Artist"
        />
        <AlbumList albums={albumsData} />
      </div>
    </div>
  );
}

export default ArtistDiscography;