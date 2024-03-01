export default function CustomInput({ label, invalid, ...props }) {
    let labelClasses = 'block mb-2 text-xs font-bold tracking-wide uppercase';
    let inputClasses = 'shadow border rounded w-full px-3 py-2 leading-tight text-gray-700';

    if (invalid) {
        labelClasses += ' text-red-600';
        inputClasses += ' text-red-500 bg-red-100 border-red-300';
    } else {
        labelClasses += ' text-slate-700';
        inputClasses += ' bg-stone-100 text-gray-700';
    }

    return (
        <p>
            <label className={labelClasses}>{label}</label>
            <input className={inputClasses} {...props} />
        </p>
    );
}