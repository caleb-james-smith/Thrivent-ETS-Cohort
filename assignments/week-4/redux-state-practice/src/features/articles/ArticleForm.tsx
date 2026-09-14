export function ArticleForm() {
  function renderArticleForm() {
    return (
      <div id="form-container">
        <h2>Add Article</h2>
        <form>
          <label htmlFor="title">Title: </label>
          <input name="title" placeholder="Title"></input>
          <label htmlFor="category">Category: </label>
          <input name="category" placeholder="Category"></input>
          <button type="submit">Add Article</button>
        </form>
      </div>
    );
  }

  return renderArticleForm();
}
