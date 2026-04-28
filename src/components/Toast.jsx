import { useState, useEffect } from 'react';
import { CheckCircle, XCircle, AlertCircle, X } from 'lucide-react';

const Toast = ({ toast, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300); // Wait for fade out animation
    }, toast.duration || 4000);

    return () => clearTimeout(timer);
  }, [toast, onClose]);

  const getIcon = () => {
    switch (toast.type) {
      case 'success':
        return <CheckCircle size={20} className="text-green-400" />;
      case 'error':
        return <XCircle size={20} className="text-red-400" />;
      case 'warning':
        return <AlertCircle size={20} className="text-yellow-400" />;
      default:
        return <AlertCircle size={20} className="text-blue-400" />;
    }
  };

  const getBgColor = () => {
    switch (toast.type) {
      case 'success':
        return 'bg-green-900/20 border-green-500/30';
      case 'error':
        return 'bg-red-900/20 border-red-500/30';
      case 'warning':
        return 'bg-yellow-900/20 border-yellow-500/30';
      default:
        return 'bg-blue-900/20 border-blue-500/30';
    }
  };

  return (
    <div
      className={`fixed top-4 right-4 z-50 max-w-sm w-full transform transition-all duration-300 ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
    >
      <div
        className={`${getBgColor()} border rounded-lg p-4 shadow-lg backdrop-blur-sm`}
      >
        <div className="flex items-start gap-3">
          {getIcon()}
          <div className="flex-1">
            {toast.title && (
              <h4 className="text-white font-semibold text-sm mb-1">
                {toast.title}
              </h4>
            )}
            <p className="text-slate-300 text-sm">{toast.message}</p>
          </div>
          <button
            onClick={() => {
              setIsVisible(false);
              setTimeout(onClose, 300);
            }}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toast;