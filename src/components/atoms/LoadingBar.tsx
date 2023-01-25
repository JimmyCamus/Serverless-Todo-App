const LoadingBar = ({ className }: { className?: string }) => {
  return <progress className={`progress ${className}`}></progress>;
};

export default LoadingBar;
