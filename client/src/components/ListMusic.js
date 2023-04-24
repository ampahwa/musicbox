import React from 'react';

const ListMusic = ({ musics, deleteMusic }) => {
  return (
    <ul>
      {musics && musics.length > 0 ? (
        musics.map((music) => {
          return (
            <li key={music._id} onClick={() => deleteMusic(music._id)}>
              {music.action}
            </li>
          );
        })
      ) : (
        <li>No music(s) left</li>
      )}
    </ul>
  );
};

export default ListMusic;