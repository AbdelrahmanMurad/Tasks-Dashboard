export default function SocialMediaComponent(props) {
  return (
    <div className="text-center mb-3">
      <h4 className="mb-4 mt-5">{props.message}</h4>
      <button type="button" className="btn btn-link btn-floating mx-1">
        <i className="fab fa-facebook-f"></i>
      </button>

      <button type="button" className="btn btn-link btn-floating mx-1">
        <i className="fab fa-google"></i>
      </button>

      <button type="button" className="btn btn-link btn-floating mx-1">
        <i className="fab fa-twitter"></i>
      </button>

      <button type="button" className="btn btn-link btn-floating mx-1">
        <i className="fab fa-github"></i>
      </button>
    </div>
  );
}
