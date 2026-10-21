
function CourseCard({ course }) {
  return (
    <article className="card">
      <h2>{course.title}</h2>

      <p className="lecturer">
        Lecturer: {course.lecturer}
      </p>

      <div className="progress-info">
        <span>Course progress</span>
        <strong>{course.progress}%</strong>
      </div>

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${course.progress}%` }}
        ></div>
      </div>

      <p className={course.completed ? "status completed" : "status ongoing"}>
        {course.completed ? "Completed" : "In progress"}
      </p>
    </article>
  );
}

export default CourseCard;
