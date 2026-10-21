
const courses = [
  {
    id: 1,
    title: "Web Development",
    lecturer: "Dr. Kato",
    progress: 70,
    completed: false
  },
  {
    id: 2,
    title: "Database Systems",
    lecturer: "Ms. Auma",
    progress: 100,
    completed: true
  },
  {
    id: 3,
    title: "Structured Programming",
    lecturer: "Mr. Richard",
    progress: 50,
    completed: false
  }
];

// Empty array for testing the empty-state message
const emptyCourses = [];

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

      <progress
        value={course.progress}
        max="100"
        aria-label={`${course.title} progress`}
      />

      <p className={course.completed ? "completed" : "ongoing"}>
        {course.completed ? "Completed" : "In progress"}
      </p>
    </article>
  );
}

// Reusable section component
function DashboardSection({ title, courseList }) {
  return (
    <section className="course-section">
      <h2>{title}</h2>

      {courseList.length === 0 ? (
        <div className="empty-state">
          <h3>No courses available yet</h3>
          <p>
            Your course list is currently empty. Please check
            back later or contact your lecturer for course
            registration information.
          </p>
        </div>
      ) : (
        <div className="grid">
          {courseList.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default function App() {
  return (
    <main className="dashboard">
      <header className="dashboard-header">
        <h1>My Course Dashboard</h1>
        <p>
          Track your courses and monitor your learning progress.
        </p>
      </header>

      <DashboardSection
        title="Completed and In Progress Courses"
        courseList={courses}
      />

      <DashboardSection
        title="Empty State Example"
        courseList={emptyCourses}
      />
    </main>
  );
}
