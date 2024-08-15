function InputForm({ name, type, label, size,placeholder }) {
  return (
    <div className="form-control ">
      <label className="">
        <div className="label">
          <span className="label-text capitalize">{label}</span>
        </div>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          className={`input input-bordered w-full ${size} bg-[#F3F9FA]`}
        />
      </label>
    </div>
  );
}

export default InputForm;
