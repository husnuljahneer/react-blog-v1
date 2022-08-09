import { useLocation } from "react-router-dom";

export default function Posts() {
  const location = useLocation();

  const title = location.state.title;
  const content = location.state.content;

  return (
    <div>
      <h1>
        {title}
      </h1>
      <p>
        {content}
      </p>
    </div>
  );
}
