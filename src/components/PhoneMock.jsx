export default function PhoneMock({ children, badge }) {
  return (
    <div className="bg-olive/80 p-5 sm:p-6 rounded-sm h-full flex items-center justify-center">
      <div className="bg-paper w-full max-w-[280px] rounded-md p-5 shadow-sm">
        <div className="flex items-center gap-1 mb-5">
          <div className="w-6 h-6 rounded-full bg-olive flex items-center justify-center text-[10px] font-bold text-paper">
            j
          </div>
          <div className="leading-none">
            <p className="text-sm font-bold text-olive leading-none">jovia</p>
            <p className="text-[7px] text-muted leading-none mt-0.5">
              Financial Credit Union
            </p>
          </div>
        </div>
        {badge && (
          <div className="flex items-center gap-2 mb-4 text-[11px] text-muted">
            {badge}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
