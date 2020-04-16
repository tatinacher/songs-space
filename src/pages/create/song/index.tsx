import * as React from "react";
import { submitForm, handleChange } from "./model";
import { useStore } from "effector-react";
import { $song } from "./model";
import { getAuthors, $authors } from "../../../features/authors";

export const CreateSong: React.FC = () => {
  const { title, author } = useStore($song);
  const authors = useStore($authors);

  React.useEffect(() => {
    getAuthors();
  }, []);
  return (
    <div>
      <form onSubmit={submitForm}>
        <input type="text" name="title" value={title} onChange={handleChange} />
        <div>
          <div>Band:</div>
          <select name="author" value={author} onChange={handleChange}>
            <option value="">Select Author</option>
            {authors.map(author => (
              <option key={author._id} value={author._id}>
                {author.author}
              </option>
            ))}
          </select>
        </div>
        <button>Save</button>
      </form>
    </div>
  );
};
