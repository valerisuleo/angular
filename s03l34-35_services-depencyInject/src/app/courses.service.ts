// 02 we wanto to export a plain typescipt Class.
  // Normally we add a decorator (@Component) to a Class. But we don't have one for Service!

export class CoursesService {
  getCourses() {
    // for now we don't do the http service.
    return ['course1', 'course2', 'course3'];
  }
}

// Ok now we have a service but we need to use it in our "courses.component.ts". How?
 // 03 first we need to add a constructor -->  courses.component.ts
