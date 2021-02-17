API method `getAuthorsList` returns an array of authors.
Used in page `/bands`.

Example of response:

```tsx
[
  { author: 'Beatles', id: '5ec...' },
  { author: 'Queen', id: '5ec...' },
];
```

---

Method `getBandSongs` gets an `id` as an argument and returns band songs.
Used in page `/bands`.

Example of response:

```tsx
[
  { variations: 1, id: '5f3...', title: 'Let it be' },
  { variations: 1, id: '5f6...', title: 'All my loving' },
  { variations: 1, id: '5f6...', title: 'Eight days a week' },
];
```
