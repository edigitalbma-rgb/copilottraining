export default function ReferenceTableLesson({ lesson }) {
  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-500">
        Read-only reference; no completion gate. Use Continue when you're ready to move on.
      </p>
      <div className="overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-navy text-white">
            <tr>
              {lesson.columns.map((col) => (
                <th key={col} className="px-4 py-3 font-semibold whitespace-nowrap">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {lesson.rows.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-ice/30'}>
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={`px-4 py-3 align-top text-slate-700 leading-relaxed ${
                      j === 0 ? 'font-semibold text-navy whitespace-nowrap' : ''
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {lesson.note && <p className="text-xs italic text-slate-400">{lesson.note}</p>}
    </div>
  )
}
