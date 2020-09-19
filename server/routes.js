const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const model = require("./data");
var ObjectId = require("mongoose").Types.ObjectId;

router.get("/last-records", (req, res) => {
  const { count } = req.body;

  model.SongChords.find()
    .sort({ date: -1 })
    .limit(count)
    .exec(function(err, data) {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data });
    });
});

router.get("/authors", (req, res) => {
  model.Authors.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

router.get("/get-author/:_id", async (req, ress) => {
  const _id = req.params._id;

  model.Songs.find({ author: _id })
    .exec()
    .then(allSongs => {
      let allPromises = [];
      let songs = [];
      console.log(allSongs);

      allSongs.forEach(song => {
        allPromises.push(model.SongChords.find({ song: song._id }).exec());
        songs.push({ _id: song._id, title: song.title });
      });
      return allSongs;
    })
    .then(songs => {
      model.Authors.findById(_id, (err, author) => {
        const result = {
          author: author.author,
          songs: songs
        };
        return ress.json({ success: true, data: result });
      });
    });
});

router.get("/author/:_id", async (req, ress) => {
  const _id = req.params._id;

  model.Songs.find({ author: _id })
    .exec()
    .then(allSongs => {
      let allPromises = [];
      let songs = [];
      console.log(allSongs);

      allSongs.forEach(song => {
        allPromises.push(model.SongChords.find({ song: song._id }).exec());
        songs.push({ _id: song._id, title: song.title });
      });
      return { allPromises, songs };
    })
    .then(res => {
      console.log(res.allPromises);

      Promise.all(res.allPromises)
        .then(variations => {
          const songsNew = [];
          console.log(variations);

          variations.forEach(variation => {
            res.songs.forEach(el => {
              if (
                variation.length > 0 &&
                JSON.stringify(el._id) == JSON.stringify(variation[0].song)
              ) {
                songsNew.push({ variations: variation.length, ...el });
              }
            });
          });
          return songsNew;
        })
        .then(songs => {
          model.Authors.findById(_id, (err, author) => {
            const result = {
              author: author.author,
              songs: songs
            };
            return ress.json({ success: true, data: result });
          });
        });
    });

  // model.Songs.find({ author: _id }).exec(async function(err, data) {
  //   if (err) return res.json({ success: false, error: err });
  //   console.log(1);

  //   await model.Authors.findById(_id, async (err, author) => {
  //     const songs = await data.map(async song => {
  //       // TODO: get top song instead of first one
  //       let variationsNumber = 0;
  //       console.log(2);

  //       await data.map(async song => {
  //         await model.SongChords.find({ song: song._id }).exec(
  //           (err, variations) => {
  //             variationsNumber = variations.length;
  //           }
  //         );
  //       });
  //       console.log(3);

  //       return {
  //         _id: song._id,
  //         title: song.title,
  //         variations: variationsNumber
  //       };
  //     });
  //     console.log(songs);

  //     const result = {
  //       author: author.author,
  //       songs: songs
  //     };
  //     console.log(5);

  //     return res.json({ success: true, data: result });
  //   });
  // });
});

router.get("/song/:_id", (req, res) => {
  const _id = req.params._id;

  model.SongChords.find({ song: new ObjectId(_id) }).exec(function(err, data) {
    if (err) return res.json({ success: false, error: err });
    const songs = data.map(song => {
      return {
        _id: song._id,
        title: song.title
      };
    });
    return res.json({ success: true, data: songs });
  });
});

router.get("/variation/:_id", (req, res) => {
  const _id = req.params._id;

  model.SongChords.findById(new ObjectId(_id), (err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

router.post("/update-author", (req, res) => {
  const { _id, update } = req.body;
  model.Authors.findByIdAndUpdate(_id, update, err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

router.delete("/delete-author", (req, res) => {
  const { _id } = req.body;
  model.Authors.findByIdAndRemove(_id, err => {
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
      const songs = data.map(song => {
        return {
          _id: song._id,
          title: song.title
        };
      });
      return res.json({ success: true, data: songs });
    });
});

module.exports = router;
