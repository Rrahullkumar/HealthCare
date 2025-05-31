import { Heart } from "lucide-react";

const AnatomySection = () => {
  return (
    <div className="bg-white rounded-2xl p-6 relative overflow-hidden">
      <div className="relative">
        <img 
          src="https://o.quizlet.com/I-c-KNyqoA31idQEdprrRw_b.jpg" 
          alt="Human Anatomy" 
          className="w-64 h-80 mx-auto object-contain"
        />
        
        {/* Health indicators */}
        <div className="absolute top-16 left-8 bg-blue-600 text-white px-3 py-1 rounded-full text-sm flex items-center">
          <Heart className="w-4 h-4 mr-1 text-red-400" />
          Healthy Heart
        </div>
        
        <div className="absolute bottom-20 left-4 bg-cyan-400 text-white px-3 py-1 rounded-lg text-sm">
          Healthy Log
        </div>
      </div>
    </div>
  );
};

export default AnatomySection