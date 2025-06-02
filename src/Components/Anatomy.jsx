import { Heart } from "lucide-react";

const AnatomySection = () => {
  return (
    <div className="bg-white rounded-2xl p-6 relative overflow-hidden">
      <div className="relative">
        <img
          src="https://o.quizlet.com/I-c-KNyqoA31idQEdprrRw_b.jpg"
          alt="Human Anatomy"
          className="w-64 h-80 mx-auto object-contain sm:w-48 sm:h-64"
        />

        {/* Health indicators */}
        <div className="absolute top-16 left-8 sm:top-10 sm:left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm flex items-center sm:text-xs">
          <Heart className="w-4 h-4 mr-1 text-red-400" />
          <span className="hidden sm:inline">Healthy Heart</span>
          <span className="inline sm:hidden">Heart</span>
        </div>

        <div className="absolute bottom-20 left-4 sm:bottom-10 sm:left-3 bg-cyan-400 text-white px-3 py-1 rounded-lg text-sm sm:text-xs">
          Healthy Log
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;
