Api method `fetchLastRecords` returns last `count` numbers of songs.

Example of response:

```json
[
  { "title": "Let it be", "id": "5f4..." },
  { "title": "You're My Best Friend", "id": "5f5..." }
]
```

---

Api method `fetchSongChords` gets an `id` of song as an argument and returns song chords.

Example of response:

```json
{
  "chords": ["C", "G", "Am", "F", "Em", "Dm"],
  "id": "5f4...",
  "song": "5f3...",
  "title": "Let it be",
  "lyrics": [
    {
      "text": "When I find myself in times of trouble, Mother Mary comes to me,",
      "chords": [
        {
          "afterSpaces": 14,
          "beforeSpaces": 7,
          "color": "#264653",
          "name": "C",
          "_id": "5f4..."
        },
        {
          "afterSpaces": 17,
          "beforeSpaces": 0,
          "color": "#2a9d8f",
          "name": "G",
          "_id": "5f4..."
        }
        ...
      ]
    }
    ...
  ]
}
```
