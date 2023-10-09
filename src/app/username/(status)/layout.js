export default function StatusLayout({ children }) {
  return (
    <div>
      <article className={""}>
        <h1>John Doe</h1>
        <span>@john doe</span>
        <span>Joined feb 2022</span>
      </article>
      {children}
      <form>
        <label>Post your reply</label>
        <input type="text"></input>
      </form>
    </div>
  );
}
