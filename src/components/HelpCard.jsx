export default function HelpCard({ Img, title, desc }) {
    return (
        <div className="flex flex-col items-center py-2 px-3 gap-4 rounded-xl w-56">
            <div>
                <img src={Img} alt={title} className="max-w-12 h-auto" />
            </div>
            <div className="flex flex-col flex-grow gap-3">
                <h3 className="text-md text-blue-500 font-bold text-center">{title}</h3>
                <p className="text-sm text-center font-medium">{desc}</p>
            </div>
        </div>
    )
}
