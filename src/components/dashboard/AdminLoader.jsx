"use client";

const sizeClasses = {
  sm: "h-6 w-6 border-2",
  md: "h-10 w-10 border-[3px]",
  lg: "h-14 w-14 border-4",
};

const AdminLoader = ({
  size = "md",
  text,
  fullPage = false,
  className = "",
}) => {
  const spinner = (
    <div
      className={`animate-spin rounded-full border-slate-300 border-t-[#0F3457] ${sizeClasses[size] || sizeClasses.md}`}
    />
  );

  if (fullPage) {
    return (
      <div
        className={`flex flex-col items-center justify-center min-h-[60vh] gap-4 ${className}`}
      >
        {spinner}
        {text && (
          <p className="text-slate-500 text-sm font-medium">{text}</p>
        )}
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 ${className}`}
    >
      {spinner}
      {text && (
        <p className="text-slate-500 text-sm font-medium">{text}</p>
      )}
    </div>
  );
};

export default AdminLoader;
