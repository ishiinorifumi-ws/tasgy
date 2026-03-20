import { useState } from 'react'
import { getCategoryLabel } from '../utils/labels'
import { parseDeadline, getDeadlineInfo } from '../utils/deadline'
import TaskDetail from './TaskDetail'

function TaskCard({ issue, onUpdate }) {
  const [expanded, setExpanded] = useState(false)

  const category = getCategoryLabel(issue)
  const deadline = parseDeadline(issue.body)
  const deadlineInfo = getDeadlineInfo(deadline)

  return (
    <div className="bg-white rounded-xl shadow-sm mb-2 overflow-hidden border border-gray-100">
      {/* カード概要 */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left px-4 py-3 active:bg-gray-50"
      >
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-gray-800 leading-tight">
              <span className="text-gray-400 text-xs mr-1">#{issue.number}</span>
              {issue.title}
            </p>
            <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
              {category && (
                <span
                  className="inline-block text-[10px] px-1.5 py-0.5 rounded-full font-medium text-white"
                  style={{ backgroundColor: category.color }}
                >
                  {category.name}
                </span>
              )}
              {deadlineInfo && (
                <span
                  className={`text-[11px] ${
                    deadlineInfo.status === 'overdue'
                      ? 'text-red-600 font-bold'
                      : deadlineInfo.status === 'soon'
                        ? 'text-orange-500 font-medium'
                        : 'text-gray-500'
                  }`}
                >
                  {deadlineInfo.text}
                </span>
              )}
            </div>
          </div>
          <span className="text-gray-300 text-sm mt-1 shrink-0">
            {expanded ? '▲' : '▼'}
          </span>
        </div>
      </button>

      {/* 展開時の詳細 */}
      {expanded && <TaskDetail issue={issue} onUpdate={onUpdate} />}
    </div>
  )
}

export default TaskCard
