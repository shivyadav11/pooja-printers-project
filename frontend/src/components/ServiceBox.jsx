import {
  FaIdCard,
  FaReceipt,
  FaBook,
  FaStickyNote,
  FaFlag,
  FaPrint,
  FaEnvelope,
  FaFileAlt,
  FaTools,
} from "react-icons/fa";

export default function ServiceBox({ title, desc, icon, color }) {
  const iconMap = {
    FaIdCard: <FaIdCard />,
    FaReceipt: <FaReceipt />,
    FaBook: <FaBook />,
    FaStickyNote: <FaStickyNote />,
    FaFlag: <FaFlag />,
    FaPrint: <FaPrint />,
    FaEnvelope: <FaEnvelope />,
    FaFileAlt: <FaFileAlt />,
    FaTools: <FaTools />,
  };

  return (
    <div className="bg-white border shadow-sm rounded-2xl p-6 hover:shadow-lg transition">
      <div
        className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center text-white text-2xl`}
      >
        {iconMap[icon] || <FaPrint />}
      </div>

      <h3 className="text-lg font-bold text-gray-900 mt-5">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{desc}</p>

      <a
        href="/quote"
        className="inline-block mt-5 px-5 py-2 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
      >
        Get Quote
      </a>
    </div>
  );
}
