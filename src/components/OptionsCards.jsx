export default function OptionsCards({ img, title, desc }) {
    return (
        <div className="flex items-center py-2 px-3 gap-4 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-full md:w-80">
            <div>
                <img src={img} alt={title} className="max-w-12 h-auto" />
            </div>
            <div className="flex flex-col flex-grow">
                <h3 className="text-sm font-semibold">{title}</h3>
                <p className="text-sm">{desc}</p>
            </div>
        </div>
    )
}
