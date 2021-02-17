const express = require("express");
const router = express.Router();
const model = require("./data");
var ObjectId = require("mongoose").Types.ObjectId;

router.get("/last-records", (req, res) => {
  const { count } = req.body;

  model.SongChords.find()
    .sort({ date: -1 })
    .limit(count)
    .exec((err, data) => {
      if (err) return res.json({ success: false, error: err });

      // give link directly to the song
      const lastRecords = data.map(({ title, _id }) => ({
        title,
        id: _id
      }));
      return res.json({ success: true, data: lastRecords });
    });
});

//returns all bands
router.get("/authors-list", (req, res) => {
  model.Authors.find((err, data) => {
    // const authors = data.map(({ author, description, _id }) => ({
    //   author,
    //   description,
    //   id: _id
    // }));
    // if (err) return res.json({ success: false, error: err });
    // return res.json({ success: true, data: authors });
    allPromises = [];
    data.forEach(author => {
      allPromises.push(model.SongChords.find({ author: author._id }).exec());
    });
    return { data, allPromises };
  }).then(res => {
    Promise.all(res.allPromises).then(songs => {
      console.log(songs);
    });
  });
});

// returns all author songs
router.get("/author-songs/:id", async (req, ress) => {
  const id = req.params.id;

  model.Songs.find({ author: id })
    .exec()
    .then(allSongs => {
      let allPromises = [];
      let songs = [];

      allSongs.forEach(song => {
        allPromises.push(model.SongChords.find({ song: song._id }).exec());
        songs.push({ id: song._id, title: song.title });
      });
      return { allPromises, songs };
    })
    .then(res => {
      Promise.all(res.allPromises).then(variations => {
        const songsNew = [];
        variations.forEach(variation => {
          res.songs.forEach(el => {
            if (
              variation.length > 0 &&
              JSON.stringify(el.id) == JSON.stringify(variation[0].song)
            ) {
              songsNew.push({ variations: variation.length, ...el });
            }
          });
        });
        return ress.json({ success: true, data: songsNew });
      });
    });
});

// used for creation a new song
router.get("/get-author/:id", async (req, ress) => {
  const id = req.params.id;

  model.Songs.find({ author: id })
    .exec()
    .then(allSongs => {
      let allPromises = [];
      let songs = [];
      console.log(allSongs);

      allSongs.forEach(song => {
        allPromises.push(model.SongChords.find({ song: song.id }).exec());
        songs.push({ id: song.id, title: song.title });
      });
      return allSongs;
    })
    .then(songs => {
      model.Authors.findById(id, (err, author) => {
        const result = {
          author: author.author,
          songs: songs
        };
        return ress.json({ success: true, data: result });
      });
    });
});

router.get("/song/:id", (req, res) => {
  const id = req.params.id;

  model.SongChords.find({ song: new ObjectId(id) }).exec(function(err, data) {
    if (err) return res.json({ success: false, error: err });
    const songs = data.map(({ _id, title }) => ({
      id: _id,
      title
    }));
    return res.json({ success: true, data: songs });
  });
});

router.get("/song-chords/:id", (req, res) => {
  const id = req.params.id;

  model.SongChords.findById(new ObjectId(id), (err, data) => {
    if (err) return res.json({ success: false, error: err });

    const { _id, chords, lyrics, title, song } = data;
    const songChord = {
      id: _id,
      title,
      chords,
      lyrics,
      song
    };

    return res.json({ success: true, data: songChord });
  });
});

router.post("/update-author", (req, res) => {
  const { id, update } = req.body;
  model.Authors.findByIdAndUpdate(id, update, err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

router.delete("/delete-author", (req, res) => {
  const { id } = req.body;
  model.Authors.findByIdAndRemove(id, err => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

router.post("/add-author", (req, res) => {
  let data = new model.Authors();

  const { author, description } = req.body;

  if (!author) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }
  data.author = author;
  data.description = description || "";

  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

router.post("/add-song", (req, res) => {
  let song = new model.Songs();

  const { title, author, album } = req.body;

  if (!title || !author) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }

  song.title = title;
  song.author = author;
  song.album = album;

  song.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

router.post("/add-song-variation", (req, res) => {
  let song = new model.SongChords();

  const { title, lyrics, chords, fullText, songId } = req.body;

  console.log(!title || !lyrics || !fullText || !chords || !songId);

  if (!title || !lyrics || !fullText || !chords || !songId) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }
  song.title = title;
  song.lyrics = lyrics;
  song.chords = chords;
  song.fullText = fullText;
  song.song = new ObjectId(songId);

  song.save(err => {
    console.log(err);

    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

router.get("/search", (req, res) => {
  const search = req.query.request;
  model.Songs.find({ title: { $regex: search, $options: "i" } })
    .limit(10)
    .exec(function(err, data) {
      if (err) return res.json({ success: false, error: err });
      const songs = data.map(({ _id, title }) => ({
        id: _id,
        title
      }));
      return res.json({ success: true, data: songs });
    });
});

module.exports = router;
