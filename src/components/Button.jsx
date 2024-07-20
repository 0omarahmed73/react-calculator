function Button({ text, ...props }) {
  return (
    <div className="btn" {...props}>
      {text}
    </div>
  );
}

export default Button;
