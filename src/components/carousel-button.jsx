import { ArrowLeft, ArrowRight } from "lucide-react";

const CarouselButton = ({ direction, onClick, disabled }) => (
    <button
        disabled={disabled}
        onClick={onClick}
        className="w-9 h-8 bg-white/10 hover:bg-white/[.13] disabled:bg-white/5 active:bg-white/5 flex items-center smoothie justify-center"
    >
        {direction === 'prev' ? <ArrowLeft className="size-[1.1rem]" /> : <ArrowRight className="size-[1.1rem]" />}
        <span className="sr-only">{direction === 'prev' ? 'Previous' : 'Next'} slide</span>
    </button>
);

export default CarouselButton;