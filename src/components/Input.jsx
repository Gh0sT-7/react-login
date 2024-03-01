export default function Input({label, invalid, ...props}) {
    return <p>
        <label className="block mb-2 text-xs font-bold tracking-wide uppercase text-stone-200">{label}</label>
        <Input className="shadow border rounded w-full px-3 py-2 bg-stone-300 leading-tight text-gray-700" {...props} />
    </p>
};