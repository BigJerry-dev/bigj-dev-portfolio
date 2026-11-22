function ProjectRow({ project }) {
  const hasLive = project.live && project.live !== "#";
  const hasCode = project.github && project.github !== "#";
  const hasStack = project.stack && project.stack.length > 0;

  return (
    <div className="pr-card" style={{ animationDelay: `${(project.id - 1) * 0.1}s` }}>
      <style>{`
        .pr-card {
          background: #fff;
          border: 1px solid var(--line);
          border-radius: 24px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          animation: fadeUp 0.6s ease backwards;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .pr-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 32px rgba(15, 23, 42, 0.1);
        }
        .pr-preview {
          background: #F4F5F7;
          padding: 28px 24px 0 24px;
        }
        .pr-shot {
          background: #fff;
          border-radius: 14px 14px 0 0;
          border: 1px solid var(--line);
          border-bottom: none;
          height: 150px;
          overflow: hidden;
        }
        .pr-shot img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top left;
        }
        .pr-window {
          background: #fff;
          border-radius: 14px 14px 0 0;
          border: 1px solid var(--line);
          border-bottom: none;
          padding: 14px 16px 22px 16px;
          height: 150px;
        }
        .pr-dots {
          display: flex;
          gap: 5px;
          margin-bottom: 14px;
        }
        .pr-dots span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #E3E5E8;
        }
        .pr-line {
          height: 8px;
          border-radius: 4px;
          background: #ECEEF0;
          width: 55%;
          margin-bottom: 8px;
        }
        .pr-line-wide {
          width: 80%;
          background: #E3E5E8;
        }
        .pr-blocks {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          margin-top: 14px;
        }
        .pr-blocks div {
          height: 46px;
          border-radius: 8px;
          background: #F1F2F4;
        }
        .pr-blocks div:first-child {
          background: var(--yellow);
        }
        .pr-body {
          padding: 22px 24px 24px 24px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }
        .pr-tag {
          font-size: 12px;
          font-weight: 600;
          color: var(--muted);
          margin: 0;
        }
        .pr-title {
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -0.01em;
          margin: 0;
          line-height: 1.2;
        }
        .pr-desc {
          font-size: 14px;
          line-height: 1.7;
          color: #555;
          margin: 0;
        }
        .pr-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 4px;
        }
        .pr-stack span {
          border: 1px solid var(--line);
          border-radius: 8px;
          padding: 4px 10px;
          font-size: 12px;
          font-weight: 600;
        }
        .pr-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: auto;
          padding-top: 16px;
        }
        .pr-btn {
          padding: 11px 18px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          border: 1.5px solid var(--ink);
          transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
        }
        .pr-btn-dark {
          background: var(--ink);
          color: #fff;
        }
        .pr-btn-dark:hover {
          background: var(--yellow);
          color: var(--ink);
          border-color: var(--yellow);
        }
        .pr-btn-light {
          background: transparent;
          color: var(--ink);
        }
        .pr-btn-light:hover {
          background: var(--ink);
          color: #fff;
        }
        .pr-soon {
          padding: 11px 18px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 700;
          background: #F1F2F4;
          color: var(--muted);
        }
      `}</style>

      <div className="pr-preview">
        {project.image ? (
          <div className="pr-shot">
            <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
          </div>
        ) : (
          <div className="pr-window">
            <div className="pr-dots"><span></span><span></span><span></span></div>
            <div className="pr-line pr-line-wide"></div>
            <div className="pr-line"></div>
            <div className="pr-blocks"><div></div><div></div><div></div></div>
          </div>
        )}
      </div>

      <div className="pr-body">
        <p className="pr-tag">Demo showcase</p>
        <h3 className="pr-title">{project.title}</h3>
        <p className="pr-desc">{project.description}</p>

        {hasStack && (
          <div className="pr-stack">
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        )}

        <div className="pr-actions">
          {hasLive ? (
            <a href={project.live} target="_blank" rel="noreferrer" className="pr-btn pr-btn-dark">View live demo</a>
          ) : (
            <span className="pr-soon">Coming soon</span>
          )}
          {hasCode && (
            <a href={project.github} target="_blank" rel="noreferrer" className="pr-btn pr-btn-light">View code</a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectRow;